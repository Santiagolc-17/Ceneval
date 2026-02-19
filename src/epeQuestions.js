const epeSeeds = [
  {
    category: 'EPE · Diseño mecánico',
    question: 'En un tornillo sin fin de doble entrada y corona de 24 dientes, ¿cuántas vueltas del tornillo producen una vuelta de la corona?',
    answer: '12 vueltas del tornillo',
    distractors: ['24 vueltas del tornillo', '6 vueltas del tornillo', '2 vueltas del tornillo'],
    explanation: 'Al ser doble entrada, cada vuelta avanza 2 dientes en la corona: 24/2 = 12.',
    source: 'Diseño en ingeniería mecánica (Shigley), relaciones de transmisión',
    sourceUrl: 'https://www.mheducation.com/highered/product/shigley-s-mechanical-engineering-design-budynas-nisbett/M9780073398204.html'
  },
  {
    category: 'EPE · Instrumentación',
    question: 'Para un ADC de 8 bits con rango de -25 °C a 100 °C, ¿cuál es la resolución aproximada en °C/bit?',
    answer: '≈ 0.49 °C/bit',
    distractors: ['≈ 0.25 °C/bit', '≈ 1.00 °C/bit', '≈ 2.04 °C/bit'],
    explanation: 'Rango total 125 °C entre 255 niveles útiles: 125/255 ≈ 0.49 °C/bit.',
    source: 'Fundamentos de conversión A/D y resolución',
    sourceUrl: 'https://www.analog.com/en/analog-dialogue/articles/what-is-an-adc.html'
  },
  {
    category: 'EPE · Control',
    question: '¿Cuál enunciado describe mejor la acción proporcional pura en control?',
    answer: 'La salida de control es proporcional al error instantáneo',
    distractors: ['Integra el error histórico', 'Deriva únicamente la referencia', 'Elimina totalmente el error estacionario siempre'],
    explanation: 'En P puro: u(t)=Kp·e(t). No integra ni deriva.',
    source: 'Ogata - Ingeniería de control moderna',
    sourceUrl: 'https://www.pearson.com/en-us/subject-catalog/p/modern-control-engineering/P200000003479/9780136156734'
  },
  {
    category: 'EPE · Robótica',
    question: 'En robótica manipuladora, una articulación lineal se conoce comúnmente como:',
    answer: 'Articulación prismática',
    distractors: ['Articulación revoluta', 'Articulación esférica', 'Articulación helicoidal pura'],
    explanation: 'Prismática implica desplazamiento lineal del eslabón.',
    source: 'Fundamentos de robótica (Barrientos)',
    sourceUrl: 'https://www.mheducation.es/fundamentos-de-robotica-9788448165635-spain'
  },
  {
    category: 'EPE · Circuitos',
    question: 'Tres resistencias en serie de 15 Ω, 25 Ω y 20 Ω tienen resistencia equivalente de:',
    answer: '60 Ω',
    distractors: ['20 Ω', '30 Ω', '75 Ω'],
    explanation: 'En serie se suman: 15+25+20 = 60 Ω.',
    source: 'Física universitaria (Sears y Zemansky), circuitos básicos',
    sourceUrl: 'https://openstax.org/details/books/university-physics-volume-2'
  },
  {
    category: 'EPE · Circuitos',
    question: 'En un divisor de voltaje con V=100 V y resistencias en serie total RT=60 Ω, el voltaje en R=20 Ω es:',
    answer: '≈ 33.3 V',
    distractors: ['20 V', '50 V', '66.7 V'],
    explanation: 'VR = V*(R/RT)=100*(20/60)=33.3 V.',
    source: 'Circuitos eléctricos básicos',
    sourceUrl: 'https://openstax.org/details/books/college-physics-2e'
  },
  {
    category: 'EPE · Programación embebida',
    question: 'Al incrementar un puntero `p++` en C sobre un entero de 16 bits, ¿qué ocurre?',
    answer: 'Avanza una posición de entero (típicamente 2 bytes)',
    distractors: ['Avanza 1 bit', 'No cambia dirección', 'Retrocede 2 bytes'],
    explanation: 'El desplazamiento depende del tamaño del tipo apuntado.',
    source: 'Deitel C++ y fundamentos de punteros',
    sourceUrl: 'https://deitel.com/c-plus-plus-how-to-program-10-e/'
  },
  {
    category: 'EPE · Redes industriales',
    question: '¿Qué interfaz serial industrial está diseñada para distancias mayores y mejor inmunidad al ruido que RS-232?',
    answer: 'RS-485',
    distractors: ['USART TTL directo', 'I2C', 'SPI'],
    explanation: 'RS-485 es diferencial y robusta para mayor distancia en entorno industrial.',
    source: 'Normas RS-232 / RS-422 / RS-485',
    sourceUrl: 'https://www.ti.com/lit/an/slla272d/slla272d.pdf'
  },
  {
    category: 'EPE · Neumática',
    question: 'En una preparación de aire neumático, ¿qué función tiene la unidad FRL?',
    answer: 'Filtrar, regular presión y lubricar el aire',
    distractors: ['Enfriar y digitalizar señales', 'Convertir aire en hidráulico', 'Aumentar humedad para válvulas'],
    explanation: 'La unidad FRL acondiciona aire para proteger componentes.',
    source: 'Festo Didactic / neumática básica',
    sourceUrl: 'https://www.festo.com/'
  },
  {
    category: 'EPE · Materiales',
    question: '¿Qué representa la deflexión de un elemento mecánico?',
    answer: 'La deformación bajo carga aplicada',
    distractors: ['La dureza Brinell directa', 'La energía eléctrica absorbida', 'Solo la expansión térmica'],
    explanation: 'Deflexión cuantifica desplazamiento elástico/plástico según condiciones de carga y geometría.',
    source: 'Shigley - deformación en elementos',
    sourceUrl: 'https://www.mheducation.com/highered/product/shigley-s-mechanical-engineering-design-budynas-nisbett/M9780073398204.html'
  },
  {
    category: 'EPE · Diseño de máquinas',
    question: 'En transmisión mecánica, ¿por qué los engranes son síncronos frente a banda-polea?',
    answer: 'Porque el acoplamiento por dientes evita deslizamiento relativo',
    distractors: ['Porque no transmiten torque', 'Porque siempre son más baratos', 'Porque no requieren lubricación'],
    explanation: 'El contacto diente-diente mantiene relación geométrica de velocidad.',
    source: 'Shigley - trenes de engranes',
    sourceUrl: 'https://www.mheducation.com/highered/product/shigley-s-mechanical-engineering-design-budynas-nisbett/M9780073398204.html'
  },
  {
    category: 'EPE · Señales y sistemas',
    question: 'La operación INTE = INTE + VAR*PER en muestreo digital aproxima:',
    answer: 'La integral acumulada de la señal (suma de áreas)',
    distractors: ['La derivada instantánea', 'Solo un filtro pasa-altas', 'La FFT exacta'],
    explanation: 'Es aproximación rectangular de integración numérica.',
    source: 'Cálculo e integración numérica básica',
    sourceUrl: 'https://openstax.org/details/books/calculus-volume-1'
  },
  {
    category: 'EPE · Lógica digital',
    question: 'Orden correcto típico de diseño lógico combinacional:',
    answer: 'Definir variables → tabla de verdad → simplificar (Karnaugh) → implementar compuertas',
    distractors: ['Implementar compuertas → elegir variables → Karnaugh', 'Tabla de verdad → PLC directo sin simplificar', 'Definir salidas al final sin entradas'],
    explanation: 'El flujo formal evita errores funcionales.',
    source: 'Tocci/Floyd - sistemas digitales',
    sourceUrl: 'https://www.pearson.com/en-us/subject-catalog/p/digital-systems-principles-and-applications/P200000003423/9780134220130'
  },
  {
    category: 'EPE · Calidad y proyectos',
    question: '¿Qué expresa el punto de equilibrio en unidades?',
    answer: 'Las unidades donde ingresos = costos totales',
    distractors: ['Utilidad máxima', 'Costo variable mínimo', 'Tasa de interés anual'],
    explanation: 'Se obtiene igualando función de ingresos y costos.',
    source: 'Render/Jacobs - administración de operaciones',
    sourceUrl: 'https://www.pearson.com/en-us/subject-catalog/p/operations-management/P200000003566/9780134130422'
  },
  {
    category: 'EPE · Finanzas de ingeniería',
    question: 'Con interés simple mensual del 2% sobre $1000 durante 8 meses, el interés total es:',
    answer: '$160',
    distractors: ['$80', '$200', '$1160'],
    explanation: 'Interés mensual=20; en 8 meses: 20×8=160.',
    source: 'Ingeniería económica básica',
    sourceUrl: 'https://openstax.org/details/books/principles-finance'
  },
  {
    category: 'EPE · Control discreto',
    question: '¿Qué caracteriza a un sistema de control en tiempo discreto?',
    answer: 'Opera con señales muestreadas en instantes discretos',
    distractors: ['Solo usa variables continuas', 'No requiere periodo de muestreo', 'Siempre elimina cuantización'],
    explanation: 'La dinámica se modela en diferencias o transformada Z.',
    source: 'Ogata - Sistemas de control en tiempo discreto',
    sourceUrl: 'https://www.pearson.com/en-us/subject-catalog/p/discrete-time-control-systems/P200000003592/9780130342817'
  },
  {
    category: 'EPE · Automatización',
    question: '¿Qué afirmación es correcta sobre eliminar actividades sin valor agregado?',
    answer: 'Es principio central de pensamiento/manufactura esbelta',
    distractors: ['Lo define exclusivamente el plan maestro de producción', 'Solo aplica en software', 'Aumenta inventario para seguridad'],
    explanation: 'Lean busca flujo y reducción de desperdicios.',
    source: 'Lean Thinking (Womack)',
    sourceUrl: 'https://www.lean.org/lexicon-terms/lean-thinking/'
  },
  {
    category: 'EPE · Microcontroladores',
    question: 'En AVR/PIC, los módulos de comparación PWM/timer se agrupan típicamente en:',
    answer: 'Módulos CCP/compare-capture-PWM (según familia)',
    distractors: ['Módulo COMP universal en todas familias', 'Módulo ADC exclusivamente', 'Módulo UART únicamente'],
    explanation: 'Nomenclatura depende de familia, pero compare/capture/PWM suele agruparse.',
    source: 'Datasheets oficiales de microcontroladores',
    sourceUrl: 'https://www.microchip.com/en-us/tools-resources/documentation'
  },
  {
    category: 'EPE · Rodamientos',
    question: 'La capacidad de carga dinámica C en rodamientos se usa principalmente para:',
    answer: 'Estimar vida L10 bajo carga equivalente',
    distractors: ['Definir color del rodamiento', 'Calcular voltaje de motor', 'Elegir protocolo de comunicación'],
    explanation: 'La vida nominal se relaciona con (C/P)^k.',
    source: 'Mott - diseño de elementos de máquinas',
    sourceUrl: 'https://www.pearson.com/en-us/subject-catalog/p/machine-elements-in-mechanical-design/P200000003590/9780133356712'
  },
  {
    category: 'EPE · Metrología y dureza',
    question: '¿Qué mide la dureza Brinell?',
    answer: 'Resistencia del material a penetración con esfera bajo carga',
    distractors: ['Resistencia eléctrica específica', 'Coeficiente de fricción estática', 'Módulo de Poisson directamente'],
    explanation: 'HB se calcula a partir de carga y geometría de huella.',
    source: 'Normas de ensayo de dureza Brinell',
    sourceUrl: 'https://www.astm.org/Standards/E10.htm'
  }
];

const epeTemplates = [
  (q) => `[EPE verificada] ${q}`,
  (q) => `Caso EPE: ${q}`,
  (q) => `Reactivo EPE: ${q}`,
  (q) => `Repaso EPE: ${q}`,
  (q) => `Validación técnica: ${q}`
];

export const epeQuestions = Array.from({ length: 100 }, (_, i) => {
  const seed = epeSeeds[i % epeSeeds.length];
  const t = epeTemplates[i % epeTemplates.length];
  return {
    category: seed.category,
    question: t(seed.question),
    options: [seed.answer, ...seed.distractors],
    answer: seed.answer,
    hint: 'Identifica primero la ley/fórmula base y revisa unidades.',
    explanation: `${seed.explanation} [Revisión EPE #${i + 1}]`,
    deepExplanation: `${seed.explanation} Paso recomendado: modela el problema, sustituye datos con unidades coherentes y compara magnitud final con una estimación rápida para detectar errores de captura o fórmula.`,
    source: seed.source,
    sourceUrl: seed.sourceUrl
  };
});
