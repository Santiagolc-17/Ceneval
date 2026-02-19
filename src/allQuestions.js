import { questions as baseQuestions } from './questions.js';
import { additionalQuestions } from './additionalQuestions.js';
import { internetQuestions } from './internetQuestions.js';
import { epeQuestions } from './epeQuestions.js';
import { circuitsQuestions } from './circuitsQuestions.js';

const sourceCatalog = [
  { match: 'cinemática', source: 'OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' },
  { match: 'energía', source: 'OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' },
  { match: 'materiales', source: 'ASM International / Aluminum Association', url: 'https://www.asminternational.org/' },
  { match: 'cnc', source: 'LinuxCNC Documentation', url: 'https://linuxcnc.org/docs/html/gcode/g-code.html' },
  { match: 'automatización', source: 'ISA references', url: 'https://www.isa.org/' },
  { match: 'control', source: 'Feedback Systems - Åström & Murray', url: 'https://fbsbook.org/' },
  { match: 'sensores', source: 'NIST references', url: 'https://www.nist.gov/' },
  { match: 'redes', source: 'EtherCAT/PROFINET docs', url: 'https://www.ethercat.org/' },
  { match: 'planeación', source: 'PMI PMBOK Guide', url: 'https://www.pmi.org/pmbok-guide-standards' },
  { match: 'epe', source: 'Guía EPE + bibliografía técnica reportada', url: 'https://www.ceneval.edu.mx/' }
];

const theoryProfiles = [
  {
    keys: ['circuit', 'ohm', 'resist', 'corriente', 'voltaje', 'potencia', 'kirchhoff'],
    base: 'Base teórica chill: usa Ley de Ohm (V = I·R) y potencia (P = V·I = I²R = V²/R). Si hay varias mallas o nodos, aplica Leyes de Kirchhoff (suma de voltajes en lazo = 0 y suma de corrientes en nodo = 0).',
    method: 'Pasos: 1) identifica serie/paralelo, 2) calcula equivalente, 3) resuelve variable pedida y 4) valida unidades (V, A, Ω, W).'
  },
  {
    keys: ['cinemat', 'movimiento', 'velocidad', 'aceleraci', 'trayectoria', 'torque', 'fuerza'],
    base: 'Base teórica chill: parte de cinemática y dinámica clásica. Usa x = x0 + v0·t + 0.5·a·t², v = v0 + a·t y, cuando aplica, ΣF = m·a y τ = F·r.',
    method: 'Pasos: 1) define sistema y signos, 2) coloca datos en SI, 3) despeja incógnita, 4) revisa coherencia física (magnitud y sentido).'
  },
  {
    keys: ['pid', 'control', 'lazo', 'plc', 'automatiz'],
    base: 'Base teórica chill: en control industrial, el objetivo es minimizar error e(t)=r(t)-y(t) con acciones P, I y D, respetando estabilidad y tiempos de respuesta.',
    method: 'Pasos: 1) define variable controlada, 2) identifica perturbaciones, 3) compara estrategia de control, 4) verifica seguridad/interlocks y robustez operacional.'
  },
  {
    keys: ['red', 'profinet', 'ethercat', 'modbus', 'comunicacion', 'latencia', 'jitter'],
    base: 'Base teórica chill: redes OT se eligen por determinismo, latencia y sincronización temporal (p. ej. IEEE 1588/PTP). El criterio principal es que el ciclo de control cumpla tiempo y confiabilidad.',
    method: 'Pasos: 1) define requerimiento de ciclo, 2) evalúa topología y tolerancia a fallas, 3) valida diagnóstico/ciberseguridad, 4) selecciona protocolo compatible.'
  },
  {
    keys: ['material', 'fatiga', 'goodman', 'deformacion', 'esfuerzo'],
    base: 'Base teórica chill: resistencia de materiales combina relaciones esfuerzo-deformación (σ=F/A, ε=ΔL/L) y criterios de diseño (fatiga Goodman/Soderberg según caso).',
    method: 'Pasos: 1) modela carga estática/alternante, 2) calcula esfuerzo equivalente, 3) aplica factor de seguridad, 4) confirma condición de operación real.'
  }
];

const defaultTheory = {
  base: 'Base teórica chill: identifica el principio físico o de ingeniería que gobierna el reactivo y usa una ecuación o criterio técnico verificable.',
  method: 'Pasos: ordena datos, modela variables, aplica fórmula/criterio y valida unidades, límites y sentido práctico.'
};

function normalize(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function attachSource(question) {
  if (question.source && question.sourceUrl) return question;
  const found = sourceCatalog.find((entry) => normalize(question.category).includes(normalize(entry.match)));
  if (found) return { ...question, source: found.source, sourceUrl: found.url };
  return { ...question, source: 'Compilación técnica CENEVAL (revisión interna)', sourceUrl: 'https://www.ceneval.edu.mx/' };
}

function ensureQuestionText(question) {
  let text = (question.question || '').trim();
  const lower = normalize(text);

  if (
    lower.startsWith('brazo ') ||
    lower.startsWith('motor ') ||
    lower.startsWith('cilindro ') ||
    lower.startsWith('fresa ') ||
    lower.startsWith('desplazamiento de')
  ) {
    if (!lower.includes('calcula') && !lower.includes('determine') && !lower.includes('cual')) {
      text = `${text} ¿Cuál es el resultado correcto solicitado (magnitud principal)?`;
    }
  }

  if (text.includes('?')) return text;
  return `¿${text}?`;
}

function getTheoryProfile(question) {
  const searchable = `${question.category || ''} ${question.subcategory || ''} ${question.question || ''} ${question.explanation || ''}`;
  const normalized = normalize(searchable);
  return theoryProfiles.find((profile) => profile.keys.some((key) => normalized.includes(key))) || defaultTheory;
}

function buildRichDeepExplanation(question) {
  const theory = getTheoryProfile(question);
  const baseExplanation = question.deepExplanation || question.explanation || 'Analiza el concepto base antes de responder.';
  return `${theory.base} ${theory.method} Aplicación al reactivo: ${baseExplanation}`;
}

function buildRichExplanation(question) {
  if (question.explanation) return question.explanation;
  const theory = getTheoryProfile(question);
  return `${theory.base} Respuesta correcta por consistencia con el modelo y los datos.`;
}

function buildHint(question) {
  if (question.hint) return question.hint;
  const theory = getTheoryProfile(question);
  return `Tip chill: ${theory.method}`;
}

function buildOptionExplanations(question) {
  const map = question.optionExplanations || {};
  const theory = getTheoryProfile(question);
  return Object.fromEntries(
    question.options.map((opt) => {
      if (map[opt]) return [opt, map[opt]];
      if (opt === question.answer) return [opt, `Es correcta porque respeta el criterio técnico y la base teórica del tema. ${theory.base}`];
      return [opt, 'No es la mejor opción porque rompe una condición del modelo, una unidad, o el criterio de diseño solicitado.'];
    })
  );
}

function sanitizeOptions(question) {
  const unique = [...new Set([...(question.options || [])])];
  if (!unique.includes(question.answer)) unique.unshift(question.answer);
  return unique.slice(0, 4);
}

function enrichQuestion(question) {
  const sourced = attachSource(question);
  const clean = {
    ...sourced,
    question: ensureQuestionText(sourced),
    options: sanitizeOptions(sourced),
    hint: buildHint(sourced),
    explanation: buildRichExplanation(sourced),
    deepExplanation: buildRichDeepExplanation(sourced)
  };
  return { ...clean, optionExplanations: buildOptionExplanations(clean) };
}

function dedupeQuestions(all) {
  const seen = new Set();
  const out = [];
  all.forEach((q) => {
    const key = `${normalize(q.category)}|${normalize(q.question)}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(q);
  });
  return out;
}

const raw = [...baseQuestions, ...additionalQuestions, ...internetQuestions, ...epeQuestions, ...circuitsQuestions].map(enrichQuestion);
export const questions = dedupeQuestions(raw);
