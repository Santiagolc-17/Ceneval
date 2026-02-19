import { questions as baseQuestions } from './questions.js';
import { additionalQuestions } from './additionalQuestions.js';
import { internetQuestions } from './internetQuestions.js';

const sourceCatalog = [
  { match: 'Cinemática', source: 'OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' },
  { match: 'Energía', source: 'OpenStax University Physics', url: 'https://openstax.org/details/books/university-physics-volume-1' },
  { match: 'Materiales', source: 'ASM International / Aluminum Association', url: 'https://www.asminternational.org/' },
  { match: 'CNC', source: 'LinuxCNC Documentation', url: 'https://linuxcnc.org/docs/html/gcode/g-code.html' },
  { match: 'Automatización', source: 'ISA / IEC referencias de automatización', url: 'https://www.isa.org/' },
  { match: 'control', source: 'Feedback Systems - Åström & Murray', url: 'https://fbsbook.org/' },
  { match: 'Sensores', source: 'NIST / Instrumentation references', url: 'https://www.nist.gov/' },
  { match: 'Redes', source: 'EtherCAT/PROFINET official docs', url: 'https://www.ethercat.org/' },
  { match: 'Planeación', source: 'PMI PMBOK Guide', url: 'https://www.pmi.org/pmbok-guide-standards' }
];

function attachSource(question) {
  if (question.source && question.sourceUrl) return question;
  const found = sourceCatalog.find((entry) => question.category.toLowerCase().includes(entry.match.toLowerCase()));
  if (!found) return question;
  return { ...question, source: found.source, sourceUrl: found.url };
}

function enrichQuestion(question) {
  const withSource = attachSource(question);
  return {
    ...withSource,
    hint: withSource.hint || 'Piensa en unidades, modelo físico y qué variable realmente te están pidiendo.',
    deepExplanation:
      withSource.deepExplanation ||
      `${withSource.explanation} Para dominar este reactivo, identifica primero la ley base, luego sustituye datos con unidades consistentes y valida si el resultado tiene sentido físico.`
  };
}

export const questions = [...baseQuestions, ...additionalQuestions, ...internetQuestions].map(enrichQuestion);
