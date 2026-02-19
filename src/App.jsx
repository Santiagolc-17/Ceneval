import { useMemo, useState } from 'react';
import { questions } from './allQuestions.js';

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

export default function App() {
  const [screen, setScreen] = useState('start');
  const [mode, setMode] = useState('juego');
  const [playerNameInput, setPlayerNameInput] = useState('');
  const [player, setPlayer] = useState('Jugador');
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const current = quizQuestions[index];
  const shuffledOptions = useMemo(() => (current ? shuffle(current.options) : []), [current]);
  const isAnswered = selectedOption !== null;
  const isCorrect = isAnswered && selectedOption === current?.answer;

  function startGame() {
    setPlayer(playerNameInput.trim() || 'Jugador');
    setQuizQuestions(shuffle(questions));
    setIndex(0);
    setScore(0);
    setSelectedOption(null);
    setScreen('quiz');
  }

  function selectOption(option) {
    if (isAnswered) return;
    setSelectedOption(option);
    if (option === current.answer) setScore((prev) => prev + 1);
  }

  function nextQuestion() {
    if (index + 1 >= quizQuestions.length) {
      setScreen('end');
      return;
    }
    setIndex((prev) => prev + 1);
    setSelectedOption(null);
  }

  const percent = quizQuestions.length ? Math.round((score / quizQuestions.length) * 100) : 0;

  return (
    <main className="app">
      {screen === 'start' && (
        <section className="card">
          <h1>🧠 CENEVAL Mecatrónica · Nivel Difícil</h1>
          <p>
            Simulador visual con <strong>{questions.length} preguntas</strong>. Orden aleatorio,
            retroalimentación y dos modos: juego y estudio.
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
            <button className={mode === 'juego' ? 'mode-btn active' : 'mode-btn'} onClick={() => setMode('juego')}>
              🎮 Juego
            </button>
            <button className={mode === 'estudio' ? 'mode-btn active' : 'mode-btn'} onClick={() => setMode('estudio')}>
              📘 Estudio
            </button>
          </div>
          <button onClick={startGame}>Empezar</button>
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

          <h2>{current.question}</h2>
          <div className="options">
            {shuffledOptions.map((option) => {
              const classes = ['option-btn'];
              if (isAnswered && option === current.answer) classes.push('correct');
              if (isAnswered && option === selectedOption && option !== current.answer) classes.push('wrong');

              return (
                <button
                  key={option}
                  className={classes.join(' ')}
                  onClick={() => selectOption(option)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`feedback ${isCorrect ? 'ok' : 'bad'}`}>
              {isCorrect ? (
                <p>✅ <strong>Correcto.</strong> {current.explanation}</p>
              ) : (
                <p>
                  ❌ <strong>Incorrecto.</strong> La correcta es <strong>{current.answer}</strong>.
                  <br />
                  {current.explanation}
                </p>
              )}
            </div>
          )}

          {isAnswered && <button onClick={nextQuestion}>{mode === 'estudio' ? 'Siguiente tema' : 'Siguiente'}</button>}
        </section>
      )}

      {screen === 'end' && (
        <section className="card">
          <h2>🏁 Fin de la sesión ({mode})</h2>
          <p>
            {player}, obtuviste {score}/{quizQuestions.length} ({percent}%). {getResultMessage(percent)}
          </p>
          <button onClick={startGame}>Reintentar</button>
          <button onClick={() => setScreen('start')}>Cambiar modo</button>
        </section>
      )}
    </main>
  );
}
