const circuitScenarios = [
  {
    topic: 'Temporizadores en PLC',
    source: 'Siemens S7-1200 System Manual (TON/TOF timers)',
    sourceUrl: 'https://support.industry.siemens.com/'
  },
  {
    topic: 'Control y estabilidad',
    source: 'Ogata, Modern Control Engineering',
    sourceUrl: 'https://www.pearson.com/en-us/subject-catalog/p/modern-control-engineering/P200000003479/9780136156734'
  },
  {
    topic: 'Redes industriales y CIM',
    source: 'ISA Industrial Networking Principles',
    sourceUrl: 'https://www.isa.org/'
  },
  {
    topic: 'Medios de transmisión',
    source: 'Cisco Networking Academy / Fiber vs Copper references',
    sourceUrl: 'https://www.cisco.com/'
  },
  {
    topic: 'Circuitos eléctricos básicos',
    source: 'OpenStax University Physics Vol. 2 (circuits)',
    sourceUrl: 'https://openstax.org/details/books/university-physics-volume-2'
  }
];

const templates = [
  (i) => ({
    category: 'Circuitos y automatización · PLC',
    question: `En un diagrama de escalera, si la entrada X0 se activa y permanece energizada durante ${2 + (i % 4)} s, y un TON está configurado a ${2 + (i % 4)} s para habilitar Y0, ¿qué comportamiento esperado es correcto?`,
    options: [
      'Y0 se activa después de cumplirse el tiempo del TON',
      'Y0 se activa instantáneamente al energizar X0',
      'Y0 nunca se activa aunque X0 permanezca activa',
      'Y0 se activa solo al desactivar X0'
    ],
    answer: 'Y0 se activa después de cumplirse el tiempo del TON',
    explanation: 'Un temporizador TON activa su salida cuando la entrada permanece activa al menos el tiempo preestablecido.',
    hint: 'TON = retardo a la conexión.'
  }),
  (i) => ({
    category: 'Circuitos y automatización · Teoría de control',
    question: `¿Cuál es el objetivo principal de un sistema de control en mecatrónica cuando existe una perturbación externa de amplitud ${5 + i % 6}% sobre la salida?`,
    options: [
      'Asegurar estabilidad y desempeño del sistema',
      'Eliminar completamente el uso de sensores',
      'Reducir siempre el costo sin importar desempeño',
      'Evitar cualquier lazo de retroalimentación'
    ],
    answer: 'Asegurar estabilidad y desempeño del sistema',
    explanation: 'Control busca respuesta estable, seguimiento de referencia y rechazo de perturbaciones.',
    hint: 'Piensa en estabilidad + precisión + robustez.'
  }),
  (i) => ({
    category: 'Circuitos y automatización · Comunicaciones',
    question: `En una línea de ${40 + i} m dentro de planta, ¿cuál es la principal desventaja del cable de cobre frente a fibra óptica?`,
    options: [
      'Mayor susceptibilidad a interferencias electromagnéticas',
      'Imposibilidad total de transmitir datos digitales',
      'Menor costo de instalación inicial',
      'Mayor inmunidad al ruido en ambientes industriales'
    ],
    answer: 'Mayor susceptibilidad a interferencias electromagnéticas',
    explanation: 'El cobre es más sensible a EMI; la fibra ofrece mejor inmunidad y aislamiento eléctrico.',
    hint: 'EMI en planta = tema crítico para cobre.'
  }),
  (i) => ({
    category: 'Circuitos y automatización · CIM',
    question: `¿Qué distingue a los buses del nivel de supervisión en la pirámide CIM para una celda con ${3 + (i % 5)} estaciones?`,
    options: [
      'Alta velocidad e integración con SCADA/MES',
      'Uso exclusivo de señales analógicas puras',
      'Comunicación solo punto a punto sin red',
      'Baja capacidad de integración empresarial'
    ],
    answer: 'Alta velocidad e integración con SCADA/MES',
    explanation: 'En supervisión se requiere integrar información de proceso, diagnóstico y gestión con sistemas superiores.',
    hint: 'CIM arriba = más integración de información.'
  }),
  (i) => ({
    category: 'Circuitos y automatización · Circuitos DC',
    question: `En un circuito serie con R1=${10 + i % 5} Ω, R2=${15 + i % 6} Ω y R3=${20 + i % 4} Ω, ¿qué ley debe aplicarse primero para obtener corriente total con fuente DC conocida?`,
    options: [
      'Ley de Ohm usando resistencia equivalente en serie',
      'Solo ley de Faraday sin resistencia equivalente',
      'Transformada Z antes del análisis DC',
      'Regla de la mano derecha para potencia activa'
    ],
    answer: 'Ley de Ohm usando resistencia equivalente en serie',
    explanation: 'Primero se calcula R_eq sumando resistencias en serie y luego I=V/R_eq.',
    hint: 'En serie, resistencias se suman.'
  })
];

function optionExplanations(question) {
  return Object.fromEntries(
    question.options.map((opt) => {
      if (opt === question.answer) {
        return [opt, 'Correcta: describe el comportamiento esperado según teoría de control/circuitos del escenario.'];
      }
      return [opt, 'Incorrecta: contradice el modelo físico o la función real del componente/protocolo descrito.'];
    })
  );
}

export const circuitsQuestions = Array.from({ length: 200 }, (_, i) => {
  const scenario = circuitScenarios[i % circuitScenarios.length];
  const generated = templates[i % templates.length](i);
  return {
    ...generated,
    question: `[Circuitos ${i + 1}] ${generated.question}`,
    deepExplanation: `${generated.explanation} Método recomendado: identifica primero si el problema es de lógica de control, red industrial o circuito eléctrico; luego aplica la ley específica (TON/Ohm/Kirchhoff/control).`,
    source: scenario.source,
    sourceUrl: scenario.sourceUrl,
    optionExplanations: optionExplanations(generated)
  };
});
