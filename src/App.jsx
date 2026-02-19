import { useEffect, useMemo, useState } from 'react';
import { questions } from './allQuestions.js';
import { studySections } from './studyContent.js';

const HISTORY_KEY = 'ceneval_history_v3';

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getResultMessage(percent) {
  if (percent >= 90) return '¡Nivel leyenda! Eres crack total 🏆';
  if (percent >= 70) return '¡Muy pro! Ya tienes gran nivel 😎';
  if (percent >= 50) return 'Vas muy bien, un poco más y la rompes ✨';
  return 'Buen intento. Sigue practicando y subes ese marcador 🔥';
}

const blockOptions = [
  { id: 'all', label: 'Todo mezclado', match: () => true },
  { id: 'cinematica', label: 'Solo Cinemática y dinámica', match: (q) => q.category.toLowerCase().includes('cinemática') },
  { id: 'cnc', label: 'Solo Materiales y CNC', match: (q) => q.category.toLowerCase().includes('cnc') || q.category.toLowerCase().includes('materiales') },
  { id: 'energia', label: 'Solo Energía y trabajo', match: (q) => q.category.toLowerCase().includes('energía') },
  { id: 'robots', label: 'Solo robótica / control', match: (q) => q.category.toLowerCase().includes('robot') || q.category.toLowerCase().includes('control') },
  { id: 'integradores', label: 'Solo problemas integradores', match: (q) => q.category.toLowerCase().includes('integradores') },
  { id: 'basico', label: 'Solo banco básico chill', match: (q) => q.category.toLowerCase().includes('banco básico chill') },
  { id: 'verificadas', label: 'Solo preguntas verificadas', match: (q) => q.category.toLowerCase().includes('preguntas verificadas') || q.category.toLowerCase().includes('epe') }
];

function calculateCategoryStats(quizQuestions, answers) {
  const stats = {};
  quizQuestions.forEach((q, idx) => {
    const item = answers[idx] || { correct: false };
    if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
    stats[q.category].total += 1;
    if (item.correct) stats[q.category].correct += 1;
  });

  return Object.fromEntries(
    Object.entries(stats).map(([k, v]) => [k, { ...v, percent: Math.round((v.correct / v.total) * 100) }])
  );
}

function aggregatePerformance(history) {
  const agg = {};
  history.forEach((session) => {
    Object.entries(session.categoryStats || {}).forEach(([category, value]) => {
      if (!agg[category]) agg[category] = { total: 0, correct: 0 };
      agg[category].total += value.total;
      agg[category].correct += value.correct;
    });
  });

  return Object.entries(agg)
    .map(([category, v]) => ({ category, percent: Math.round((v.correct / v.total) * 100), total: v.total }))
    .sort((a, b) => a.percent - b.percent);
}

function buildAdaptivePool(filteredQuestions, weakCategories, adaptiveEnabled) {
  if (!adaptiveEnabled || weakCategories.length === 0) return filteredQuestions;
  const weakSet = new Set(weakCategories);
  const bonus = filteredQuestions.filter((q) => weakSet.has(q.category));
  return [...filteredQuestions, ...bonus, ...bonus];
}

export default function App() {
  const [screen, setScreen] = useState('start');
  const [mode, setMode] = useState('juego');
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [adaptiveEnabled, setAdaptiveEnabled] = useState(true);
  const [playerNameInput, setPlayerNameInput] = useState('');
  const [player, setPlayer] = useState('Jugador');

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [startedAt, setStartedAt] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (raw) {
      try {
        setHistory(JSON.parse(raw));
      } catch {
        setHistory([]);
      }
    }
  }, []);

  const current = quizQuestions[index];
  const currentAnswer = answers[index] || { marked: false, completed: false, correct: false, attempts: 0, showHint: false };
  const shuffledOptions = useMemo(() => (current ? shuffle(current.options) : []), [current]);

  const ranking = aggregatePerformance(history);
  const weak5 = ranking.slice(0, 5);
  const strong5 = [...ranking].reverse().slice(0, 5);

  function startGame() {
    const block = blockOptions.find((item) => item.id === selectedBlock) || blockOptions[0];
    const filtered = questions.filter(block.match);
    const weakCategories = weak5.map((w) => w.category);
    const adaptivePool = buildAdaptivePool(filtered, weakCategories, adaptiveEnabled);
    const selected = shuffle(adaptivePool);

    setPlayer(playerNameInput.trim() || 'Jugador');
    setQuizQuestions(selected);
    setIndex(0);
    setScore(0);
    setStartedAt(Date.now());
    setAnswers(
      selected.map(() => ({
        marked: false,
        completed: false,
        correct: false,
        attempts: 0,
        selected: null,
        showHint: false
      }))
    );
    setScreen('quiz');
  }

  function updateAnswer(patch) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], ...patch };
      return copy;
    });
  }

  function selectOption(option) {
    if (!current) return;
    if (mode === 'juego' && currentAnswer.completed) return;
    if (mode === 'estudio' && currentAnswer.correct) return;

    const isCorrect = option === current.answer;
    const attempts = currentAnswer.attempts + 1;

    if (mode === 'juego') {
      updateAnswer({ selected: option, attempts, completed: true, correct: isCorrect });
      if (isCorrect) setScore((prev) => prev + 1);
      return;
    }

    if (isCorrect) {
      updateAnswer({ selected: option, attempts, completed: true, correct: true });
      setScore((prev) => prev + 1);
    } else {
      updateAnswer({ selected: option, attempts, completed: false, correct: false });
    }
  }

  function toggleMark() {
    updateAnswer({ marked: !currentAnswer.marked });
  }

  function toggleHint() {
    updateAnswer({ showHint: !currentAnswer.showHint });
  }

  function canGoNext() {
    if (mode === 'juego') return currentAnswer.completed;
    return currentAnswer.correct;
  }

  function finalizeSession() {
    const durationSec = startedAt ? Math.round((Date.now() - startedAt) / 1000) : 0;
    const categoryStats = calculateCategoryStats(quizQuestions, answers);
    const entry = {
      date: new Date().toISOString(),
      mode,
      block: selectedBlock,
      score,
      total: quizQuestions.length,
      percent: quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0,
      durationSec,
      categoryStats
    };

    const newHistory = [entry, ...history].slice(0, 60);
    setHistory(newHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    setScreen('end');
  }

  function nextQuestion() {
    if (index + 1 >= quizQuestions.length) {
      finalizeSession();
      return;
    }
    setIndex((prev) => prev + 1);
  }

  const percent = quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0;

  return (
    <main className="app">
      {screen === 'start' && (
        <section className="card">
          <h1>🧠 CENEVAL Mecatrónica · Smart Trainer</h1>
          <p>
            Banco de <strong>{questions.length} preguntas</strong> con fuentes, tips por reactivo,
            modo juego/estudio y enfoque adaptativo.
          </p>

          <label htmlFor="player-name">Tu nombre (opcional)</label>
          <input
            id="player-name"
            type="text"
            value={playerNameInput}
            onChange={(event) => setPlayerNameInput(event.target.value)}
            placeholder="Ej. Alex"
            maxLength={20}
          />

          <label>Modo</label>
          <div className="mode-wrap">
            <button className={mode === 'juego' ? 'mode-btn active' : 'mode-btn'} onClick={() => setMode('juego')}>🎮 Juego</button>
            <button className={mode === 'estudio' ? 'mode-btn active' : 'mode-btn'} onClick={() => setMode('estudio')}>📘 Estudio</button>
          </div>

          <label htmlFor="block-select">Bloque de examen</label>
          <select id="block-select" value={selectedBlock} onChange={(e) => setSelectedBlock(e.target.value)}>
            {blockOptions.map((block) => (
              <option key={block.id} value={block.id}>{block.label}</option>
            ))}
          </select>

          <label className="check-wrap">
            <input type="checkbox" checked={adaptiveEnabled} onChange={(e) => setAdaptiveEnabled(e.target.checked)} />
            Activar banco adaptativo (más preguntas de tus áreas débiles)
          </label>

          <div className="question-actions">
            <button onClick={startGame}>Empezar examen</button>
            <button onClick={() => setScreen('study')}>Abrir biblioteca de estudio</button>
          </div>

          <div className="stats-grid">
            <div>
              <h3>🔥 Áreas fuertes</h3>
              <ul>
                {strong5.length === 0 ? <li>Sin historial aún.</li> : strong5.map((s) => <li key={s.category}>{s.category} — {s.percent}%</li>)}
              </ul>
            </div>
            <div>
              <h3>🧩 Áreas a reforzar</h3>
              <ul>
                {weak5.length === 0 ? <li>Sin historial aún.</li> : weak5.map((s) => <li key={s.category}>{s.category} — {s.percent}%</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      {screen === 'study' && (
        <section className="card">
          <h2>📚 Biblioteca de estudio (leyes y ecuaciones clave)</h2>
          <p>Resumen de ecuaciones importantes, tips de resolución y repaso rápido por tema.</p>
          <div className="study-grid">
            {studySections.map((section) => (
              <article key={section.title} className="study-card">
                <h3>{section.title}</h3>
                <p>{section.summary}</p>
                <strong>Ecuaciones clave:</strong>
                <ul>
                  {section.keyEquations.map((eq) => <li key={eq}><code>{eq}</code></li>)}
                </ul>
                <strong>Tips:</strong>
                <ul>
                  {section.tips.map((tip) => <li key={tip}>{tip}</li>)}
                </ul>
                {section.imageUrl && (
                  <a href={section.imageUrl} target="_blank" rel="noreferrer">Ver imagen de apoyo</a>
                )}
              </article>
            ))}
          </div>
          <button onClick={() => setScreen('start')}>Volver al inicio</button>
        </section>
      )}

      {screen === 'quiz' && current && (
        <section className="card">
          <div className="top-bar">
            <div>
              <span>👤 {player}</span>
              <span className="badge">{current.category}</span>
            </div>
            <div>
              <span>{index + 1} / {quizQuestions.length}</span>
              <span className="score">{mode === 'juego' ? `Puntos: ${score}` : `Aciertos: ${score}`}</span>
            </div>
          </div>

          <div className="question-actions">
            <button className={currentAnswer.marked ? 'mark-btn active' : 'mark-btn'} onClick={toggleMark}>🚩 Marcar duda</button>
            {mode === 'estudio' && <button className="mark-btn" onClick={toggleHint}>💡 {currentAnswer.showHint ? 'Ocultar pista' : 'Ver pista'}</button>}
          </div>

          {mode === 'estudio' && currentAnswer.showHint && <div className="hint">Pista específica: {current.hint}</div>}

          <h2>{current.question}</h2>
          <div className="options">
            {shuffledOptions.map((option) => {
              const classes = ['option-btn'];
              if ((mode === 'juego' ? currentAnswer.completed : currentAnswer.correct) && option === current.answer) classes.push('correct');
              if (currentAnswer.selected === option && ((mode === 'juego' && currentAnswer.completed && !currentAnswer.correct) || (mode === 'estudio' && !currentAnswer.correct && currentAnswer.attempts > 0))) classes.push('wrong');

              return (
                <button key={option} className={classes.join(' ')} onClick={() => selectOption(option)} disabled={mode === 'juego' ? currentAnswer.completed : currentAnswer.correct}>
                  {option}
                </button>
              );
            })}
          </div>

          {currentAnswer.attempts > 0 && (
            <div className={`feedback ${currentAnswer.correct ? 'ok' : 'bad'}`}>
              {currentAnswer.correct ? (
                <>
                  <p>✅ <strong>Correcto.</strong> {current.explanation}</p>
                  {mode === 'estudio' && <p><strong>Explicación extendida:</strong> {current.deepExplanation}</p>}
                </>
              ) : (
                <>
                  <p>❌ <strong>{mode === 'estudio' ? 'Aún no.' : 'Incorrecto.'}</strong> Respuesta correcta: <strong>{current.answer}</strong>.</p>
                  <p>{current.explanation}</p>
                  {mode === 'estudio' && <p><strong>Explicación extendida:</strong> {current.deepExplanation}</p>}
                  {mode === 'estudio' && <p>Intenta de nuevo hasta acertar 👇</p>}
                </>
              )}
              {current.sourceUrl && (
                <p>
                  <strong>Fuente:</strong> <a href={current.sourceUrl} target="_blank" rel="noreferrer">{current.source || current.sourceUrl}</a>
                </p>
              )}
            </div>
          )}

          <div className="question-actions">
            <button onClick={nextQuestion} disabled={!canGoNext()}>{mode === 'estudio' ? 'Siguiente tema' : 'Siguiente'}</button>
          </div>

          <div className="nav-panel">
            {quizQuestions.map((_, i) => {
              const a = answers[i] || {};
              const cls = ['nav-dot'];
              if (a.marked) cls.push('marked');
              if (a.correct) cls.push('ok');
              else if (a.completed && !a.correct) cls.push('bad');
              return (
                <button key={`dot-${i}`} className={cls.join(' ')} onClick={() => setIndex(i)}>
                  {i + 1}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {screen === 'end' && (
        <section className="card">
          <h2>🏁 Fin de la sesión ({mode})</h2>
          <p>{player}, obtuviste {score}/{quizQuestions.length} ({percent}%). {getResultMessage(percent)}</p>
          <button onClick={startGame}>Reintentar mismo bloque</button>
          <button onClick={() => setScreen('start')}>Cambiar bloque/modo</button>

          <h3>Últimas sesiones</h3>
          <ul>
            {history.slice(0, 5).map((h, i) => (
              <li key={`h-${i}`}>{new Date(h.date).toLocaleString()} · {h.mode} · {h.score}/{h.total} ({h.percent}%) · {h.durationSec}s</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
