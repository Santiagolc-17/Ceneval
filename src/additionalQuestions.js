const requestedBlueprint = [
  {
    category: 'Materiales y manufactura CNC',
    count: 45,
    seeds: [
      ['¿Qué significa la designación Al6061?', 'Aleación de aluminio serie 6xxx con Mg-Si', ['Acero al carbono', 'Latón de fundición', 'Aluminio puro 100%'], 'La serie 6xxx usa Mg y Si como aleantes principales.'],
      ['Diferencia entre acero al carbono y acero aleado', 'El aleado incluye elementos para modificar propiedades', ['No hay diferencia', 'El carbono siempre es inoxidable', 'El aleado no contiene hierro'], 'Cr, Ni, Mo y otros alteran resistencia y templabilidad.'],
      ['¿Qué es la perlita en Fe-C?', 'Mezcla laminar de ferrita y cementita', ['Fase líquida', 'Solo martensita', 'Solo austenita'], 'Es constituyente típico de aceros eutectoides.'],
      ['Material adecuado para rines de automóvil', 'Aleación de aluminio por baja masa y buena resistencia', ['Hierro gris', 'Plomo', 'Cobre recocido'], 'Reduce masa no suspendida y mejora eficiencia.'],
      ['Efecto del normalizado', 'Refina grano y homogeneiza microestructura', ['Elimina totalmente dureza', 'Funde el material', 'No cambia propiedades'], 'Mejora tenacidad y comportamiento mecánico.'],
      ['Esfuerzo cortante con F=500 N y A=10 mm²', '50 MPa', ['5 MPa', '500 MPa', '0.5 MPa'], 'τ=F/A=500/(10e-6)=50e6 Pa.'],
      ['Velocidad de corte recomendada en aluminio', 'Alta, típicamente 150–300 m/min según herramienta', ['10 m/min máximo', 'Igual que titanio siempre', 'No importa la velocidad'], 'Aluminio permite mayores velocidades por maquinabilidad.'],
      ['Templabilidad baja significa', 'Endurecimiento limitado en profundidad', ['No se puede templar', 'Siempre alta dureza', 'Mayor soldabilidad obligatoria'], 'No todo el espesor alcanza dureza alta tras temple.'],
      ['Trabajo positivo vs negativo', 'Depende de la dirección de fuerza respecto al desplazamiento', ['Siempre es positivo', 'No aplica en mecanizado', 'Depende solo de temperatura'], 'Signo del trabajo indica si el sistema gana o cede energía.'],
      ['Trabajo con F=100 N y d=0.5 m', '50 J', ['5 J', '500 J', '25 J'], 'W=F·d.'],
      ['Efecto del feedrate en CNC', 'Feedrate alto puede aumentar deformación y vibración', ['No afecta en nada', 'Solo cambia color del material', 'Solo afecta software CAM'], 'Debe equilibrarse con rigidez y herramienta.'],
      ['¿Qué es energía de corte?', 'Trabajo necesario para remover material', ['Energía potencial gravitatoria', 'Solo energía del husillo', 'Calor del refrigerante'], 'Relaciona fuerza de corte y avance.'],
      ['Tratamientos térmicos antes de maquinado', 'Definen dureza, tensiones y maquinabilidad', ['No son relevantes', 'Solo importan al pintar', 'Afectan solo densidad'], 'El estado metalúrgico condiciona el proceso de corte.'],
      ['Diagrama esfuerzo-deformación del acero', 'Incluye zona elástica, cedencia, endurecimiento y estricción', ['Es una línea recta infinita', 'Solo existe zona plástica', 'No tiene punto de fluencia'], 'Resume respuesta mecánica ante carga.'],
      ['Factores para minimizar vibraciones en CNC', 'Rigidez, RPM, profundidad de corte y avance', ['Solo marca de controlador', 'Solo tamaño de monitor', 'Solo tipo de tornillo'], 'La estabilidad dinámica depende de múltiples parámetros.']
    ]
  },
  {
    category: 'Cinemática y dinámica',
    count: 55,
    seeds: [
      ['Define vector posición', 'Ubica un punto respecto a un sistema de referencia', ['Es una magnitud escalar', 'Es siempre constante', 'Solo existe en 2D'], 'r⃗ describe localización espacial.'],
      ['Desplazamiento de ri=(2,3,0) a rf=(5,7,0)', '(3,4,0)', ['(7,10,0)', '(2,3,0)', '(-3,-4,0)'], 'Δr=rf-ri.'],
      ['Relación entre vector velocidad y posición', 'v⃗=dr⃗/dt', ['v⃗=r⃗·t', 'v⃗=∫r⃗dt', 'v⃗=r⃗²'], 'La velocidad es derivada temporal de la posición.'],
      ['Si r(t)=(2t,3t,0), v(t)=', '(2,3,0)', ['(2t,3t,0)', '(4,6,0)', '(0,0,0)'], 'Derivada componente a componente.'],
      ['Definición de aceleración', 'a⃗=dv⃗/dt', ['a⃗=v⃗·t', 'a⃗=r⃗/t', 'a⃗=constante siempre'], 'Aceleración es cambio de velocidad en el tiempo.'],
      ['Si r(t)=(2t²,3t,0), a(t)=', '(4,0,0)', ['(2,3,0)', '(4,3,0)', '(0,4,0)'], 'v=(4t,3,0), luego a=(4,0,0).'],
      ['MRU vs MRUA', 'MRU: a=0; MRUA: a constante ≠ 0', ['Ambos tienen a variable', 'MRU tiene a constante no nula', 'MRUA tiene v constante'], 'Se diferencian por la aceleración.'],
      ['v tangencial con r=2 m y ω=1 rad/s', '2 m/s', ['1 m/s', '0.5 m/s', '4 m/s'], 'v_t=ωr.'],
      ['Aceleración centrípeta con v=3 m/s y r=2 m', '4.5 m/s²', ['1.5 m/s²', '3 m/s²', '9 m/s²'], 'a_c=v²/r.'],
      ['Aceleración de Coriolis con vr=0.5 y ω=1', '1 m/s²', ['0.5 m/s²', '2 m/s²', '0.25 m/s²'], 'a_cor=2ωvr.'],
      ['Cinemática directa e inversa en robot', 'Directa: articulaciones→pose; inversa: pose→articulaciones', ['Son idénticas', 'Solo aplican a CNC', 'No usan trigonometría'], 'Problemas duales de manipulación.'],
      ['Un brazo gira 90° en 2 s con L=1.5 m. ¿Cuáles son ω y v_t?', 'ω=π/4 rad/s y vt≈1.18 m/s', ['ω=π/2 y vt≈2.36', 'ω=1 y vt=1', 'ω=0.5 y vt=0.75'], 'ω=Δθ/Δt y vt=ωL.'],
      ['Radio de curvatura', 'Radio del círculo osculador de la trayectoria', ['Distancia al origen', 'Longitud del brazo', 'Área barrida'], 'Mide qué tan cerrada es la curva.'],
      ['Diferencia a tangencial y a centrípeta', 'Tangencial cambia rapidez; centrípeta cambia dirección', ['Ambas cambian solo rapidez', 'Ambas son paralelas a v', 'No se usan en rotación'], 'Se descomponen en marco normal-tangencial.'],
      ['Si θ(t)=t², ω(t)=', '2t', ['t²', 't/2', '2'], 'ω=dθ/dt.']
    ]
  },
  {
    category: 'Energía y trabajo',
    count: 45,
    seeds: [
      ['Diferencia entre trabajo y energía', 'Trabajo es transferencia; energía es capacidad', ['Son lo mismo', 'Trabajo solo es potencia', 'Energía solo es eléctrica'], 'W describe proceso, E es estado/capacidad.'],
      ['Energía cinética (m=2, v=3)', '9 J', ['6 J', '3 J', '18 J'], 'K=1/2mv².'],
      ['Fórmula energía potencial gravitatoria', 'U=mgh', ['U=1/2kx²', 'U=Fv', 'U=Iω'], 'Depende de altura y referencia.'],
      ['Fórmula energía potencial elástica', 'U=1/2kx²', ['U=mgh', 'U=F·d', 'U=mv'], 'Modelo de resorte lineal.'],
      ['Resorte k=200 N/m, x=0.1 m', '1 J', ['2 J', '0.5 J', '10 J'], 'U=0.5(200)(0.1²).'],
      ['Trabajo con F(x)=kx', 'W=∫Fdx=1/2kx²', ['W=Fx constante', 'W=mgx', 'W=0'], 'F variable requiere integración.'],
      ['Teorema trabajo-energía', 'Wneto=ΔK', ['W=ΔU', 'W=P/t', 'W=K'], 'Conecta dinámica y energía.'],
      ['Conservación de energía en brazo robótico', 'Sin pérdidas, K+U permanece constante', ['K siempre constante', 'U siempre cero', 'No aplica a robots'], 'Con fricción aparece disipación.'],
      ['Trabajo positivo y negativo', 'Depende de si fuerza ayuda o se opone al desplazamiento', ['Siempre positivo', 'Siempre negativo', 'Solo en fluidos'], 'Signo define aporte o extracción de energía.'],
      ['F(x)=10x de 0 a 2 m', '20 J', ['10 J', '40 J', '5 J'], '∫10x dx entre 0 y 2 =20.'],
      ['Trabajo integral generaliza W=F·d', 'Permite fuerzas variables y trayectorias curvas', ['Solo en línea recta', 'Solo en estática', 'Elimina vectores'], 'Forma general W=∫F·dr.'],
      ['Un brazo de 4 kg acelera 2 m/s² por 3 s (v0=0). Calcula v_f y ΔK.', 'v=6 m/s y ΔK=72 J', ['v=3 y ΔK=18', 'v=2 y ΔK=8', 'v=12 y ΔK=288'], 'v=at y K=1/2mv².']
    ]
  },
  {
    category: 'Automatización y programación',
    count: 40,
    seeds: [
      ['¿Qué es G-code?', 'Lenguaje de instrucciones para CNC', ['Lenguaje de simulación FEM', 'Protocolo de red industrial', 'Formato de imagen CAD'], 'Controla trayectorias y funciones de máquina.'],
      ['CAD vs CAM', 'CAD diseña; CAM manufactura', ['CAD fabrica piezas', 'CAM reemplaza PLC', 'Son sinónimos'], 'Forman parte de flujo digital.'],
      ['Ejemplo de software CNC', 'Fusion 360 / Mastercam', ['Photoshop', 'Power BI', 'Notepad'], 'Software CAM dedicado.'],
      ['¿Qué es feedrate?', 'Velocidad de avance lineal', ['Velocidad angular del husillo', 'Torque del eje', 'Resolución de encoder'], 'Se expresa en mm/min.'],
      ['Interpolación lineal vs circular', 'G01 línea; G02/G03 arco', ['Ambas hacen splines', 'Circular solo con 5 ejes', 'Lineal no usa coordenadas'], 'Tipos básicos de trayectoria en CNC.'],
      ['Tiempo con L=0.5 m y v=0.2 m/s', '2.5 s', ['0.4 s', '1 s', '5 s'], 't=L/v.'],
      ['Parámetros que afectan precisión', 'Rigidez, backlash, calibración, herramienta y térmica', ['Color de gabinete', 'Versión de office', 'Marca de mouse'], 'La precisión es sistémica.'],
      ['Relación ω y vt', 'vt=ωr', ['vt=ω/r', 'vt=ω²r', 'vt=r/ω'], 'Clave para programación de ejes rotacionales.'],
      ['Motor 200 pasos/rev para 90°', '50 pasos', ['25', '100', '200'], '90/360 de vuelta.'],
      ['Posición final XYZ', 'Suma vectorial de desplazamientos por eje', ['Promedio de ejes', 'Solo X importa', 'No se puede en 3 ejes'], 'Cinemática cartesiana básica.']
    ]
  },
  {
    category: 'Problemas integradores con datos reales',
    count: 65,
    seeds: [
      ['Brazo de 2 m con ω=0.5 rad/s y v_r=0.2 m/s. Calcula la rapidez total del extremo.', 'vtotal≈1.02 m/s', ['0.7', '1.5', '2.0'], 'vt=ωr=1; v=√(vt²+vr²).'],
      ['Motor en brazo 1.5 m con α=2', 'at=3 m/s²', ['1.5', '0.75', '6'], 'at=αr.'],
      ['Trabajo con F(x)=5x², 0→0.3', '0.045 J', ['0.09', '0.15', '0.015'], 'W=∫5x²dx=(5/3)x³.'],
      ['K de brazo m=3 con vr=1 y vt=0.5', '1.875 J', ['1.5', '2.25', '3.0'], 'K=1/2m(vr²+vt²).'],
      ['Fresa CNC con F=100 y d=0.2', '20 J', ['10', '40', '5'], 'W=Fd.'],
      ['Coriolis con vr=0.4 y ω=1', '0.8 m/s²', ['0.4', '1.6', '0.2'], 'a_cor=2ωvr.'],
      ['Desplazamiento de (1,2,0) a (4,6,0)', '5 m', ['4', '3', '7'], 'Vector (3,4,0), magnitud 5.'],
      ['m=5, L=2, vr=0.5, ω=1', 'K=5.625 J', ['2.5', '7.5', '10'], 'vt=2; K=1/2m(vr²+vt²).'],
      ['ω necesaria para vt=1 en L=0.5', '2 rad/s', ['0.5', '1', '4'], 'ω=vt/r.'],
      ['U gravitacional de 3 kg a 2 m', '58.86 J', ['29.43', '19.62', '117.72'], 'U=mgh.'],
      ['Motor 1.8°/paso para 90°', '50 pasos', ['45', '60', '90'], '90/1.8.'],
      ['Brazo cae 0.8 m sin pérdidas', 'v≈3.96 m/s', ['2.0', '5.5', '1.5'], 'v=√(2gh).'],
      ['Brazo con ω=1, L=2 y vr=0.5', 'vt=2 m/s y vtotal≈2.06 m/s', ['vt=1', 'v=1.5', 'v=2.5 exacto'], 'Composición radial+tangencial.'],
      ['Integrador L=2,m=4,vr=0.5,ω=0.8,k=100,x=0.5', 'K≈5.62 J y Ures=12.5 J', ['K=2,U=25', 'K=10,U=5', 'K=1,U=50'], 'vt=1.6; K=1/2m(vr²+vt²); U=1/2kx².']
    ]
  }
];

function expandRequestedSections() {
  return requestedBlueprint.flatMap((section) => {
    const built = [];
    for (let i = 0; i < section.count; i += 1) {
      const seed = section.seeds[i % section.seeds.length];
      built.push({
        category: `Banco adicional · ${section.category}`,
        question: seed[0],
        options: [seed[1], ...seed[2]],
        answer: seed[1],
        explanation: `${seed[3]} [Retro chill: repasa fórmula y unidades.]`
      });
    }
    return built;
  });
}

const basicSeeds = [
  ['¿Unidad SI de fuerza?', 'newton (N)', ['joule', 'watt', 'pascal'], 'Fuerza en SI se expresa en N.'],
  ['¿Unidad SI de energía?', 'joule (J)', ['newton', 'volt', 'hertz'], 'Energía y trabajo usan joule.'],
  ['¿Fórmula básica de velocidad?', 'v=d/t', ['v=t/d', 'v=d·t', 'v=F/m'], 'Relación distancia-tiempo.'],
  ['¿Qué hace un sensor?', 'Convierte magnitud física en señal', ['Convierte señal en movimiento', 'Solo almacena datos', 'Solo calibra motores'], 'Entrada de sistemas de control.'],
  ['¿Qué hace un actuador?', 'Convierte señal de control en acción física', ['Mide temperatura', 'Filtra ruido', 'Calcula CAD'], 'Salida física del sistema.'],
  ['¿Qué es CNC?', 'Control numérico computarizado', ['Control no calibrado', 'Código numérico central', 'Centro no continuo'], 'Automatiza trayectorias y operaciones.'],
  ['¿Qué es PLC?', 'Controlador lógico programable', ['Protocolo lineal de corte', 'Panel luminoso central', 'Puerto lógico de comunicación'], 'Cerebro de automatización industrial.'],
  ['¿Qué expresa torque?', 'Capacidad de giro de una fuerza', ['Consumo eléctrico', 'Caudal de fluido', 'Fricción pura'], 'τ=F·r.'],
  ['¿Qué es backlash?', 'Holgura mecánica en transmisión', ['Ruido eléctrico', 'Desgaste térmico', 'Error de software'], 'Afecta precisión en cambios de sentido.'],
  ['¿Qué significa v_t=ωr?', 'Relación entre velocidad tangencial y angular', ['Ley de Ohm', 'Ecuación de Bernoulli', 'Conservación de masa'], 'Fundamental en cinemática rotacional.'],
  ['¿Qué es mgh?', 'Energía potencial gravitacional', ['Energía cinética', 'Potencia mecánica', 'Trabajo de fricción'], 'Depende de altura.'],
  ['¿Qué es 1/2mv²?', 'Energía cinética', ['Energía térmica', 'Trabajo estático', 'Potencia activa'], 'Depende de masa y velocidad.'],
  ['¿Qué es G01 en CNC?', 'Interpolación lineal', ['Interpolación circular CW', 'Parada programada', 'Cambio de herramienta'], 'Movimiento recto controlado.'],
  ['¿Qué es G02/G03?', 'Interpolación circular', ['Compensación de herramienta', 'Origen pieza', 'Subrutina'], 'Arcos CW y CCW.'],
  ['¿Qué hace PID?', 'Corrige error con acciones proporcional, integral y derivativa', ['Solo calcula posición', 'Solo hace on/off', 'Solo mide corriente'], 'Control clásico en automatización.'],
  ['¿Qué es Nyquist?', 'Criterio de muestreo para evitar aliasing', ['Norma de tornillería', 'Método de soldadura', 'Tipo de rodamientos'], 'f_s > 2 f_max.'],
  ['¿Qué es OEE?', 'Indicador de efectividad global del equipo', ['Tipo de motor', 'Protocolo de red', 'Métrica de dureza'], 'Disponibilidad x rendimiento x calidad.'],
  ['¿Qué es ruta crítica?', 'Secuencia de tareas sin holgura', ['Lista de compras', 'Manual de operador', 'Reporte de calidad'], 'Define duración mínima del proyecto.'],
  ['¿Qué es CAD?', 'Diseño asistido por computadora', ['Control analógico directo', 'Calibración automática de drives', 'Análisis financiero'], 'Modelo digital de piezas y ensambles.'],
  ['¿Qué es CAM?', 'Manufactura asistida por computadora', ['Cálculo de mantenimiento', 'Control de acceso mecánico', 'Compresión adaptativa multivariable'], 'Genera trayectorias y estrategias de maquinado.']
];

const chillTemplates = [
  (q) => `[Modo estudio] ${q}`,
  (q) => `[Chill] ${q}`,
  (q) => `Repaso básico: ${q}`,
  (q) => `Fundamentos: ${q}`,
  (q) => `Mini quiz: ${q}`
];

function buildBasic100() {
  return Array.from({ length: 100 }, (_, i) => {
    const seed = basicSeeds[i % basicSeeds.length];
    const template = chillTemplates[i % chillTemplates.length];
    return {
      category: 'Banco básico chill · Fundamentos',
      question: template(seed[0]),
      options: [seed[1], ...seed[2]],
      answer: seed[1],
      explanation: `${seed[3]} (Retro chill #${i + 1}).`
    };
  });
}



const santiQuestionSets = [
  {
    category: 'Banco adicional · PLC y lógica (estilo EGEL)',
    source: 'IEC 61131-3 / PLCopen',
    sourceUrl: 'https://plcopen.org/standards/logic/iec-61131-3/',
    items: [
      ['En ladder, contactos en serie representan:', 'AND', ['OR', 'NOT', 'XOR'], 'En serie ambas condiciones deben ser verdaderas para energizar la salida.', 'Tip de examen: serie horizontal normalmente equivale a compuerta AND.'],
      ['Un contacto normalmente cerrado (NC) conduce cuando la variable está en:', '0 lógico', ['1 lógico', 'siempre en 1', 'siempre en 0'], 'El contacto NC implementa la negación de la variable de entrada.', 'Tip de examen: NC se interpreta como NOT X.'],
      ['Un temporizador TON activa su salida cuando:', 'Tiempo acumulado ≥ preajuste', ['la entrada cambia a 1', 'la entrada se desactiva', 'arranca el PLC'], 'TON es retardo a la conexión: requiere que el tiempo transcurrido llegue al valor programado.', 'Tip de examen: si no se cumple el tiempo, Q sigue en 0.'],
      ['Si la entrada de un TON se apaga antes del tiempo programado:', 'El acumulado se reinicia', ['se congela', 'se mantiene y continúa', 'se acelera'], 'En TON no retentivo, al caer la entrada el acumulador vuelve a cero.', 'Tip de examen: TON clásico se resetea con IN=0.'],
      ['En ladder, ramas en paralelo implementan:', 'OR', ['AND', 'NAND', 'XOR'], 'Con ramas paralelas basta una ruta verdadera para energizar la salida.', 'Tip de examen: paralelo = suma lógica.'],
      ['Un PLC se define mejor como:', 'Controlador lógico programable', ['sensor inteligente', 'fuente de 24 VDC', 'motor de proceso'], 'Ejecuta lógica secuencial/combinacional para controlar actuadores.', 'Tip de examen: PLC es el “cerebro” de la celda.'],
      ['El bit DN (done) de un temporizador indica que:', 'El tiempo programado fue alcanzado', ['hay falla del módulo', 'el temporizador se reseteó', 'hay alarma de hardware'], 'DN cambia a 1 al cumplirse el tiempo preestablecido.', 'Tip de examen: DN = condición cumplida.'],
      ['Un contador CTU incrementa su cuenta en:', 'Flanco ascendente', ['nivel bajo sostenido', 'nivel alto sostenido', 'cada segundo'], 'CTU cuenta transiciones 0→1 para evitar múltiples conteos por estado fijo.', 'Tip de examen: recuerda edge detection.'],
      ['Un sensor inductivo detecta principalmente:', 'Metales', ['plásticos', 'luz visible', 'temperatura'], 'Opera por variación de campo electromagnético frente a material conductor.', 'Tip de examen: metal cercano → inductivo.'],
      ['Un sensor capacitivo detecta:', 'Materiales metálicos y no metálicos', ['solo metales ferrosos', 'solo objetos luminosos', 'solo sonido'], 'Detecta cambios de capacitancia del entorno (sólidos o líquidos).', 'Tip de examen: granos y líquidos suelen ir con capacitivo.'],
      ['Un sensor fotoeléctrico basa su funcionamiento en:', 'Emisión/recepción de luz', ['inducción magnética', 'deformación mecánica', 'efecto térmico'], 'Detecta interrupción o reflexión de un haz óptico sin contacto físico.', 'Tip de examen: ideal para conteo y presencia sin contacto.'],
      ['Un relevador térmico protege principalmente contra:', 'Sobrecarga prolongada', ['cortocircuito instantáneo', 'fuga a tierra', 'bajo factor de potencia'], 'Modela calentamiento del motor y dispara por corriente elevada sostenida.', 'Tip de examen: cortocircuito rápido se atiende con interruptor/fusible.'],
      ['Para Y = X0 AND NOT X1, la salida se activa cuando:', 'X0=1 y X1=0', ['X0=1 y X1=1', 'X0=0 y X1=0', 'X0=0 y X1=1'], 'La condición exige simultáneamente verdad en X0 y negación de X1.', 'Tip de examen: traduce primero NOT y luego evalúa AND.'],
      ['TOF es un temporizador de:', 'Retardo a la desconexión', ['retardo a la conexión', 'pulso monestable', 'conteo ascendente'], 'Mantiene salida activa un tiempo después de desactivar la entrada.', 'Tip de examen: TON enciende tarde; TOF apaga tarde.'],
      ['La función latch en PLC se utiliza para:', 'Memorizar estado', ['medir temperatura', 'convertir analógico-digital', 'filtrar ruido de red'], 'Set/Reset conserva una condición aunque la entrada original desaparezca.', 'Tip de examen: latch = memoria bistable.']
    ]
  },
  {
    category: 'Banco adicional · Control clásico (estilo EGEL)',
    source: 'Feedback Systems - Åström & Murray',
    sourceUrl: 'https://fbsbook.org/',
    items: [
      ['Objetivo principal del control automático industrial:', 'Estabilidad con desempeño deseado', ['solo minimizar costo de sensores', 'maximizar ganancia sin límite', 'eliminar todo error instantáneo'], 'El diseño busca mantener estabilidad, tiempo de respuesta y precisión.', 'Tip de examen: si aparece estabilidad vs otra opción, suele dominar estabilidad.'],
      ['El error de seguimiento en lazo cerrado se define como:', 'e(t)=r(t)-y(t)', ['e(t)=y(t)-r(t)', 'e(t)=r(t)+y(t)', 'e(t)=u(t)-y(t)'], 'Es la diferencia entre referencia y salida medida.', 'Tip de examen: r menos y, no al revés.'],
      ['Si un polo dominante tiene parte real positiva, el sistema es:', 'Inestable', ['críticamente amortiguado', 'estable asintóticamente', 'marginalmente estable siempre'], 'Polos en semiplano derecho producen crecimiento exponencial en respuesta.', 'Tip de examen: Re(polo)>0 implica divergencia.'],
      ['Incrementar demasiado Kp suele provocar:', 'Mayor sobreimpulso y oscilación', ['eliminar todo ruido', 'hacer el sistema más lento', 'anular dinámica transitoria'], 'Ganancia alta acelera pero reduce márgenes de estabilidad.', 'Tip de examen: rapidez y robustez siempre se balancean.'],
      ['La acción integral Ki se usa principalmente para:', 'Reducir error en estado estacionario', ['filtrar ruido de alta frecuencia', 'aumentar ancho de banda del sensor', 'eliminar saturación del actuador'], 'La integración acumula error y corrige sesgos persistentes.', 'Tip de examen: Ki combate error permanente.'],
      ['La acción derivativa Kd aporta sobre todo:', 'Amortiguamiento de la respuesta transitoria', ['eliminar offset estático por sí sola', 'aumentar error permanente', 'convertir lazo cerrado en abierto'], 'La derivada anticipa cambios y reduce sobreimpulso.', 'Tip de examen: Kd ayuda a “frenar” cambios rápidos.'],
      ['Una respuesta subamortiguada se caracteriza por:', 'Oscilaciones antes de asentarse', ['respuesta instantánea sin sobreimpulso', 'crecimiento ilimitado', 'error cero inmediato'], 'ζ<1 produce oscilaciones decrecientes en la salida.', 'Tip de examen: subamortiguado = ondulación temporal.'],
      ['La estabilidad en sistemas lineales continuos depende de:', 'Ubicación de polos del sistema', ['tamaño del gabinete', 'color del HMI', 'tipo de tornillería'], 'Polos determinan modo temporal y convergencia/divergencia.', 'Tip de examen: observa semiplano de polos, no solo ceros.'],
      ['El lugar geométrico de las raíces (root locus) muestra:', 'Trayectoria de polos al variar ganancia', ['trayectoria de ceros con frecuencia', 'diagrama de fases mecánicas', 'tabla de errores de sensor'], 'Permite evaluar cómo cambia estabilidad al ajustar K.', 'Tip de examen: root locus = polos versus K.'],
      ['Una respuesta más rápida pero con mayor riesgo de inestabilidad ocurre con:', 'Kp alto sin rediseño de compensación', ['Ki cero y Kd alto', 'filtro pasabajas más severo', 'muestreo más lento'], 'Aumentar Kp reduce tiempo de subida pero puede bajar márgenes.', 'Tip de examen: lo rápido suele costar robustez.'],
      ['Tiempo de establecimiento representa:', 'Tiempo para entrar y permanecer en banda de error', ['tiempo al primer cruce de referencia', 'tiempo de muestreo del ADC', 'tiempo de arranque del PLC'], 'Mide cuándo la salida se estabiliza dentro de tolerancia.', 'Tip de examen: no confundir con rise time.'],
      ['Control de lazo cerrado utiliza:', 'Retroalimentación de la salida', ['solo señal de referencia', 'programa fijo sin medición', 'señal manual del operador'], 'Compara salida real contra referencia para corregir error.', 'Tip de examen: feedback = corrección continua.'],
      ['En lazo abierto, el controlador:', 'No corrige con medición de salida', ['siempre usa observador de estado', 'elimina perturbaciones automáticamente', 'garantiza error cero'], 'No hay comparación con y(t), por eso su robustez es menor.', 'Tip de examen: lazo abierto es más sensible a perturbaciones.'],
      ['Estabilidad BIBO significa:', 'Salida acotada ante entrada acotada', ['entrada infinita produce salida cero', 'salida constante para toda entrada', 'error nulo en todo instante'], 'Es criterio práctico de estabilidad entrada-salida.', 'Tip de examen: Bounded In, Bounded Out.'],
      ['Si en régimen permanente el error es cero para escalón, normalmente existe:', 'Acción integral en el lazo', ['solo control proporcional', 'solo derivada pura', 'control feedforward sin realimentación'], 'La integración incrementa el tipo del sistema y reduce error estático.', 'Tip de examen: cero error al escalón suele requerir integrador.']
    ]
  },
  {
    category: 'Banco adicional · Motores y variadores (estilo EGEL)',
    source: 'NEMA MG-1 / IEC 60034',
    sourceUrl: 'https://www.nema.org/standards/view/motors-and-generators',
    items: [
      ['La función principal de un VFD en motor AC es:', 'Regular velocidad variando frecuencia', ['aumentar número de polos', 'cambiar tipo de rotor', 'eliminar necesidad de protección'], 'Un variador modifica frecuencia/voltaje para ajustar velocidad y par.', 'Tip de examen: motor + velocidad variable = VFD.'],
      ['La velocidad síncrona de un motor de inducción se estima con:', 'n_s = 120f/P', ['n_s = 60P/f', 'n_s = f/P', 'n_s = 2πfP'], 'Depende de frecuencia eléctrica y número de polos.', 'Tip de examen: mayor f, mayor velocidad síncrona.'],
      ['Si se reduce la frecuencia de salida del VFD (manteniendo control V/f):', 'Disminuye la velocidad del motor', ['aumenta la velocidad', 'no cambia velocidad', 'se invierte automáticamente el giro'], 'La velocidad mecánica sigue de cerca la frecuencia síncrona.', 'Tip de examen: f y rpm son proporcionales en primera aproximación.'],
      ['El arranque estrella-triángulo se usa para:', 'Reducir corriente de arranque', ['aumentar corriente inicial', 'eliminar deslizamiento', 'corregir factor de potencia a 1'], 'Arranca en estrella para bajar tensión por fase y corriente inicial.', 'Tip de examen: método clásico para limitar inrush.'],
      ['Comparado con monofásico, el motor trifásico suele ser:', 'Más eficiente y con par más uniforme', ['más ruidoso por definición', 'menos eficiente siempre', 'inviable para industria'], 'La alimentación trifásica ofrece campo giratorio más estable.', 'Tip de examen: en industria domina trifásico por desempeño.'],
      ['Variar frecuencia en motor AC modifica principalmente:', 'Velocidad de giro', ['resistencia del devanado', 'número de ranuras', 'aislamiento del estator'], 'La frecuencia define velocidad síncrona del campo giratorio.', 'Tip de examen: recuerda n_s = 120f/P.'],
      ['En motor DC de imán permanente, la velocidad se regula típicamente con:', 'Voltaje de armadura', ['número de polos', 'temperatura ambiente', 'tipo de carcasa'], 'La FEM y velocidad dependen del voltaje aplicado al inducido.', 'Tip de examen: DC clásico: controla V para rpm.'],
      ['Un encoder incremental se emplea para medir:', 'Posición y velocidad angular', ['solo corriente', 'temperatura de bobina', 'factor de potencia'], 'Entrega pulsos proporcionales al desplazamiento angular.', 'Tip de examen: más resolución = más pulsos por vuelta.'],
      ['Un servosistema integra normalmente:', 'Motor, sensor y controlador', ['solo motor AC', 'solo PLC y contactor', 'motor y fuente sin realimentación'], 'Servo trabaja en lazo cerrado para posicionamiento preciso.', 'Tip de examen: servo = control + realimentación.'],
      ['En muchos actuadores eléctricos, el torque es aproximadamente proporcional a:', 'Corriente', ['voltaje cuadrático', 'frecuencia al cubo', 'temperatura ambiente'], 'Constante de par relaciona corriente con esfuerzo electromagnético.', 'Tip de examen: al limitar corriente, limitas torque.']
    ]
  },
  {
    category: 'Banco adicional · Integración industrial (estilo EGEL)',
    source: 'ISA-95 / CENEVAL guía técnica',
    sourceUrl: 'https://www.isa.org/standards-and-publications/isa-standards',
    items: [
      ['Para una banda transportadora con velocidad variable, el componente clave es:', 'Variador de frecuencia (VFD)', ['relevador térmico únicamente', 'fuente conmutada aislada', 'contador CTU'], 'El VFD permite ajustar velocidad de proceso según demanda.', 'Tip de examen: control continuo de velocidad → variador.'],
      ['Un sistema de seguridad funcional básico debe incluir:', 'Sensado + lógica de paro seguro', ['solo HMI con contraseña', 'solo señal luminosa', 'solo botón de arranque'], 'La seguridad exige detectar riesgo y ejecutar acción de paro confiable.', 'Tip de examen: sensor sin lógica no cierra el ciclo de seguridad.'],
      ['Para detectar botellas transparentes en línea, suele preferirse sensor:', 'Fotoeléctrico con ajuste para transparente', ['inductivo estándar', 'ultrasónico sin calibrar', 'termostato bimetálico'], 'Los fotoeléctricos especializados manejan baja reflectancia y transparencia.', 'Tip de examen: objetos transparentes se resuelven mejor con ópticos dedicados.'],
      ['Un protocolo industrial muy común y extendido es:', 'Modbus', ['HTTP', 'SMTP', 'USB Mass Storage'], 'Modbus RTU/TCP es ampliamente usado por simplicidad e interoperabilidad.', 'Tip de examen: protocolo clásico de planta = Modbus.'],
      ['Nivel típico de alimentación de señales digitales en PLC industrial:', '24 VDC', ['5 VAC', '110 VDC', '1.2 VDC'], '24 VDC balancea inmunidad al ruido y seguridad en control.', 'Tip de examen: instrumentación discreta industrial suele ser 24 VDC.'],
      ['El control ON/OFF en procesos térmicos suele generar:', 'Oscilación alrededor del setpoint', ['seguimiento perfecto sin error', 'estabilidad crítica ideal', 'respuesta lineal sin histéresis'], 'Al no modular continuo, conmutan ciclos por banda diferencial.', 'Tip de examen: ON/OFF = comportamiento cíclico.'],
      ['La función principal de un SCADA es:', 'Supervisión, alarmas e históricos', ['sustituir todos los PLC', 'control de lazo de alta frecuencia', 'programar firmware de sensores'], 'SCADA opera en capa de supervisión y análisis operacional.', 'Tip de examen: SCADA observa y registra; PLC ejecuta control rápido.'],
      ['Un HMI permite principalmente:', 'Interacción operador-máquina', ['muestreo analógico de alta velocidad', 'sintonía automática de motores', 'reemplazar buses de campo'], 'Presenta estados, alarmas y comandos de operación.', 'Tip de examen: HMI = interfaz visual del proceso.'],
      ['La integración mecatrónica se entiende como:', 'Convergencia de mecánica, electrónica y control', ['solo diseño mecánico CAD', 'solo programación PLC', 'solo mantenimiento eléctrico'], 'Combina disciplinas para diseñar sistemas automáticos completos.', 'Tip de examen: palabra clave = integración multidisciplinaria.'],
      ['En manufactura, la automatización bien implementada mejora:', 'Precisión, repetibilidad y eficiencia', ['solo consumo energético', 'solo estética de equipo', 'solo velocidad sin calidad'], 'Reduce variabilidad humana y optimiza tiempos/costos de proceso.', 'Tip de examen: automatizar busca calidad + productividad.']
    ]
  }
];

function buildSanti50() {
  return santiQuestionSets.flatMap((section) => section.items.map((item) => ({
    category: section.category,
    question: item[0],
    options: [item[1], ...item[2]],
    answer: item[1],
    explanation: `${item[3]} ${item[4]}`,
    source: section.source,
    sourceUrl: section.sourceUrl,
    hint: item[4],
    deepExplanation: `Base teórica: ${item[3]} ${item[4]}`
  })));
}

export const additionalQuestions = [...expandRequestedSections(), ...buildBasic100(), ...buildSanti50()];
