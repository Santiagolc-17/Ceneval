export const internetQuestions = [
  {
    category: 'Preguntas verificadas · Cinemática y dinámica',
    question: 'Según la definición de velocidad angular, ¿qué relación correcta existe entre rapidez tangencial y radio en movimiento circular?',
    options: ['v = ωr', 'v = ω/r', 'v = ω²r', 'v = r/ω²'],
    answer: 'v = ωr',
    hint: 'Piensa en unidades: rad/s por m debe dar m/s.',
    explanation: 'En movimiento circular, la rapidez tangencial es proporcional al radio y a la velocidad angular. Si duplicas el radio manteniendo ω, también se duplica v.',
    deepExplanation: 'La relación surge de s = rθ. Al derivar respecto al tiempo: v = ds/dt = r·dθ/dt = rω. Es una de las ecuaciones base de cinemática rotacional y aparece en cursos introductorios de física e ingeniería.',
    source: 'OpenStax University Physics Vol 1, Rotational Kinematics',
    sourceUrl: 'https://openstax.org/details/books/university-physics-volume-1'
  },
  {
    category: 'Preguntas verificadas · Energía y trabajo',
    question: '¿Cuál es la forma general correcta del trabajo mecánico para fuerza variable?',
    options: ['W = ∫ F·dr', 'W = F·d (siempre)', 'W = mgh', 'W = 1/2mv²'],
    answer: 'W = ∫ F·dr',
    hint: 'Cuando la fuerza cambia con la posición no puedes usar un único valor F.',
    explanation: 'El trabajo general se calcula integrando el producto punto de fuerza y desplazamiento diferencial a lo largo de la trayectoria.',
    deepExplanation: 'La fórmula W=F·d es un caso particular de fuerza constante y trayectoria lineal alineada con la fuerza. En robótica y CNC la fuerza puede variar por fricción, deformación o perfil de control, por eso se usa la forma integral.',
    source: 'OpenStax University Physics Vol 1, Work-Energy Theorem',
    sourceUrl: 'https://openstax.org/details/books/university-physics-volume-1'
  },
  {
    category: 'Preguntas verificadas · Automatización y programación',
    question: 'En G-code estándar ISO, ¿qué comando corresponde a interpolación lineal?',
    options: ['G01', 'G02', 'G03', 'G28'],
    answer: 'G01',
    hint: 'G02 y G03 son para arcos.',
    explanation: 'G01 define movimiento lineal controlado entre dos puntos a un feedrate programado.',
    deepExplanation: 'En programación CNC, G01 permite trayectorias rectas con control de avance. G02/G03 describen interpolación circular CW/CCW. Entender esta base evita errores geométricos y colisiones en trayectorias CAM postprocesadas.',
    source: 'LinuxCNC G-code Reference',
    sourceUrl: 'https://linuxcnc.org/docs/html/gcode/g-code.html'
  },
  {
    category: 'Preguntas verificadas · Sensores y actuadores',
    question: '¿Qué ventaja principal ofrece la señal industrial 4–20 mA frente a señales de voltaje en ambientes ruidosos?',
    options: ['Mayor inmunidad al ruido y detección de lazo abierto', 'Mayor velocidad de video', 'No requiere fuente de alimentación', 'Elimina la calibración'],
    answer: 'Mayor inmunidad al ruido y detección de lazo abierto',
    hint: 'Recuerda por qué se usa en instrumentación de planta.',
    explanation: 'La corriente es menos sensible a caídas de voltaje por cable y el 4 mA permite detectar fallas (0 mA suele indicar lazo roto).',
    deepExplanation: 'Los lazos 4–20 mA son robustos en distancias largas y ambientes con interferencia electromagnética. Además, permiten interoperabilidad entre transmisores y PLC/DCS. Son práctica estándar en automatización de procesos.',
    source: 'ISA - Fundamentals of 4-20 mA Current Loops',
    sourceUrl: 'https://www.isa.org/intech-home/2017/march-april/features/fundamentals-of-current-loops'
  },
  {
    category: 'Preguntas verificadas · Materiales y manufactura CNC',
    question: '¿Qué describe mejor la aleación de aluminio 6061 en aplicaciones mecánicas?',
    options: ['Buena relación resistencia-peso y maquinabilidad', 'Baja resistencia y alta fragilidad', 'Solo uso decorativo', 'Material ferromagnético'],
    answer: 'Buena relación resistencia-peso y maquinabilidad',
    hint: 'Es una aleación muy común en estructuras ligeras.',
    explanation: '6061 es ampliamente usada por su maquinabilidad, soldabilidad y desempeño mecánico balanceado.',
    deepExplanation: 'La serie 6xxx (Al-Mg-Si) ofrece un balance útil para componentes de ingeniería: buena resistencia específica, resistencia a corrosión y disponibilidad comercial. Por eso aparece en bastidores, accesorios y partes mecanizadas.',
    source: 'The Aluminum Association - Alloy 6061 data',
    sourceUrl: 'https://www.aluminum.org/'
  },
  {
    category: 'Preguntas verificadas · Control',
    question: '¿Qué problema corrige un anti-windup en control PID?',
    options: ['Saturación del actuador que acumula error integral', 'Ruido blanco en sensor óptico', 'Fallo de comunicación Ethernet', 'Error de cuantización del ADC'],
    answer: 'Saturación del actuador que acumula error integral',
    hint: 'Piensa en qué pasa con el término I cuando el actuador está limitado.',
    explanation: 'Anti-windup evita que el integrador siga creciendo cuando la salida ya está saturada.',
    deepExplanation: 'Sin anti-windup, al salir de saturación el controlador puede tardar en recuperarse y generar sobreimpulso importante. Es una técnica crítica en la práctica industrial para mejorar estabilidad transitoria y robustez.',
    source: 'Åström & Murray, Feedback Systems (cap. control PID)',
    sourceUrl: 'https://fbsbook.org/'
  },
  {
    category: 'Preguntas verificadas · Redes industriales',
    question: '¿Cuál es una característica técnica distintiva de EtherCAT?',
    options: ['Procesamiento on-the-fly de tramas para baja latencia', 'Opera solo por Wi-Fi', 'No usa sincronización temporal', 'Es exclusivo para SCADA web'],
    answer: 'Procesamiento on-the-fly de tramas para baja latencia',
    hint: 'No es token-ring clásico ni protocolo solo de supervisión.',
    explanation: 'EtherCAT procesa datos mientras la trama atraviesa nodos, logrando ciclos cortos y determinismo.',
    deepExplanation: 'Este mecanismo reduce overhead de copia por nodo y soporta control de movimiento de alto desempeño. Por eso EtherCAT es frecuente en servoaccionamientos y máquinas con sincronización estricta.',
    source: 'EtherCAT Technology Group - Technology',
    sourceUrl: 'https://www.ethercat.org/'
  },
  {
    category: 'Preguntas verificadas · Proyecto e ingeniería',
    question: 'En gestión de proyectos, ¿qué representa la ruta crítica?',
    options: ['Secuencia de actividades con holgura total cero', 'Las tareas más costosas', 'Las tareas con más personal', 'Solo la fase de compras'],
    answer: 'Secuencia de actividades con holgura total cero',
    hint: 'Si una actividad se retrasa en esa ruta, se retrasa todo el proyecto.',
    explanation: 'La ruta crítica define la duración mínima posible del proyecto y prioriza control de tiempos.',
    deepExplanation: 'Identificar ruta crítica permite enfocar mitigación de riesgos en actividades que impactan fecha final. Es base de CPM/PERT y del seguimiento profesional en ingeniería de implementación.',
    source: 'PMI PMBOK Guide (Schedule Management)',
    sourceUrl: 'https://www.pmi.org/pmbok-guide-standards'
  },
  {
    category: 'Preguntas verificadas · Física aplicada',
    question: '¿Qué expresa correctamente el teorema trabajo-energía?',
    options: ['El trabajo neto es igual al cambio de energía cinética', 'El trabajo neto siempre es cero', 'La energía potencial siempre aumenta', 'El trabajo neto equivale a masa por tiempo'],
    answer: 'El trabajo neto es igual al cambio de energía cinética',
    hint: 'Relaciona dinámica y energía.',
    explanation: 'Si actúa trabajo neto sobre un cuerpo, su energía cinética cambia en la misma magnitud.',
    deepExplanation: 'Se deriva de la segunda ley de Newton al integrar fuerza sobre desplazamiento. Es clave para analizar brazos robóticos, actuadores lineales y trayectorias donde fuerzas no son constantes.',
    source: 'OpenStax University Physics Vol 1, Work-Energy',
    sourceUrl: 'https://openstax.org/details/books/university-physics-volume-1'
  },
  {
    category: 'Preguntas verificadas · Seguridad funcional',
    question: '¿Cuál práctica es más alineada con seguridad funcional en celdas automatizadas?',
    options: ['Implementar interlocks con lógica de seguridad validada', 'Poner reset automático sin validación', 'Mover seguridad a HMI no segura', 'Desactivar alarmas para evitar paros'],
    answer: 'Implementar interlocks con lógica de seguridad validada',
    hint: 'Busca la opción con validación y arquitectura segura.',
    explanation: 'Los interlocks deben diseñarse y validarse con criterios de seguridad funcional y análisis de riesgo.',
    deepExplanation: 'La seguridad funcional requiere diagnóstico, redundancia cuando aplique y respuesta segura ante fallos. Soluciones improvisadas incrementan riesgo operativo y pueden incumplir normativas.',
    source: 'IEC 61508 overview',
    sourceUrl: 'https://webstore.iec.ch/publication/5515'
  }
];
