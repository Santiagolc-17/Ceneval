import { questions as baseQuestions } from './questions.js';
import { additionalQuestions } from './additionalQuestions.js';
import { internetQuestions } from './internetQuestions.js';
import { epeQuestions } from './epeQuestions.js';

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
  const text = (question.question || '').trim();
  if (text.includes('?')) return text;
  return `¿${text}?`;
}

function buildOptionExplanations(question) {
  const map = question.optionExplanations || {};
  return Object.fromEntries(
    question.options.map((opt) => {
      if (map[opt]) return [opt, map[opt]];
      if (opt === question.answer) return [opt, 'Es correcta porque coincide con el modelo/fórmula y datos planteados.'];
      return [opt, 'No es la mejor opción porque no satisface completamente la definición o el cálculo del reactivo.'];
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
    hint: sourced.hint || 'Tip: identifica qué pide exactamente, define variables y valida unidades.',
    explanation: sourced.explanation || 'Revisa el concepto base y vuelve a resolver con datos ordenados.',
    deepExplanation:
      sourced.deepExplanation ||
      `${sourced.explanation || 'Revisa el concepto base.'} Paso recomendado: interpreta cada variable, aplica fórmula con unidades SI y confirma orden de magnitud.`
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

const raw = [...baseQuestions, ...additionalQuestions, ...internetQuestions, ...epeQuestions].map(enrichQuestion);
export const questions = dedupeQuestions(raw);
