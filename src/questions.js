const examBlueprint = [
  {
    category: 'Diseño de sistemas mecatrónicos',
    subcategory: 'Sistemas mecánicos',
    count: 10,
    items: [
      ['fatiga en eje con carga alternante', 'criterio de Goodman modificado', ['criterio de Tresca estático', 'ley de Hooke simple', 'criterio de Coulomb para fricción'], 'Goodman integra esfuerzo medio y alternante en diseño a fatiga.'],
      ['selección de relación de transmisión en reductor', 'igualar velocidad nominal con zona de mayor eficiencia del motor', ['maximizar par sin revisar eficiencia', 'usar la menor relación posible', 'seleccionar por costo sin curva'], 'La relación se elige para operar cerca del punto eficiente del accionamiento.'],
      ['diseño de unión atornillada sometida a vibración', 'precarga controlada y método de bloqueo', ['aumentar únicamente diámetro', 'reducir longitud del tornillo', 'usar tornillo sin arandela siempre'], 'La vibración afloja uniones si no hay precarga adecuada y seguro mecánico/químico.'],
      ['análisis modal de estructura de robot', 'separar frecuencia natural de la frecuencia de excitación', ['igualarlas para resonancia útil', 'aumentar masa sin cálculo', 'usar material más blando'], 'El objetivo es evitar resonancia en operación.'],
      ['diseño de leva para minimizar impacto', 'perfil con continuidad de aceleración', ['perfil triangular de velocidad', 'alzada máxima instantánea', 'contacto puntual sin radio'], 'Suavizar jerk reduce impacto y vibración.'],
      ['dimensionamiento de guía lineal', 'capacidad dinámica y vida L10', ['solo carga estática máxima', 'longitud del riel', 'peso del carro sin factor'], 'Las guías se seleccionan por vida útil bajo carga equivalente dinámica.'],
      ['selección de rodamientos en ambiente contaminado', 'sello adecuado y lubricación compatible', ['rodamiento abierto por menor fricción', 'el mayor diámetro disponible', 'jaula plástica sin validar temperatura'], 'El sellado y lubricación dominan la confiabilidad en ambientes severos.'],
      ['evaluación de rigidez de bastidor', 'deflexión máxima en punto de herramienta', ['masa total del bastidor', 'solo resistencia última', 'coeficiente de Poisson aislado'], 'En máquina-herramienta la rigidez funcional es clave para precisión.'],
      ['diseño de mecanismo de cuatro barras', 'satisfacer condición de Grashof según función', ['maximizar solo longitud de acoplador', 'fijar barras iguales siempre', 'usar pivotes sin tolerancias'], 'Grashof define posibilidad de rotación completa y tipo de mecanismo.'],
      ['compensación térmica en sistema mecánico de precisión', 'considerar expansión diferencial de materiales', ['incrementar torque del actuador', 'aumentar velocidad de avance', 'eliminar lubricante'], 'La deriva térmica altera holguras y posicionamiento.']
    ]
  },
  {
    category: 'Sistemas electrónicos, analógicos, digitales y de potencia',
    subcategory: 'Dispositivos electrónicos',
    count: 24,
    items: [
      ['diseño de fuente conmutada buck', 'selección de inductor por rizado de corriente', ['solo tensión de salida', 'valor mínimo de ESR del capacitor', 'frecuencia sin ciclo de trabajo'], 'El inductor define rizado, estabilidad y respuesta dinámica.'],
      ['etapa MOSFET en conmutación rápida', 'minimizar pérdidas de conmutación y conducción', ['operar siempre en región lineal', 'aumentar resistencia de compuerta sin criterio', 'reducir disipador a cero'], 'En potencia se balancean pérdidas dinámicas y estáticas.'],
      ['aislamiento galvánico en control de potencia', 'optoacoplador o driver aislado', ['divisor resistivo', 'diodo zener en serie', 'filtro RC simple'], 'El aislamiento protege control y usuario de transientes de potencia.'],
      ['diseño de filtro anti-aliasing', 'frecuencia de corte menor a Nyquist', ['corte por encima de Nyquist', 'eliminar filtro y promediar', 'usar solo software después'], 'El anti-aliasing debe actuar antes del ADC.'],
      ['amplificador instrumental para sensor de puente', 'alto CMRR', ['ganancia unitaria fija', 'baja impedancia de entrada', 'respuesta no lineal intencional'], 'CMRR alto rechaza modo común en señales de bajo nivel.'],
      ['protección contra sobretensión en entrada', 'TVS y coordinación de fusible', ['solo resistencia serie', 'solo capacitor a tierra', 'aumentar ganancia del op-amp'], 'TVS sujeta picos y el fusible limita energía de falla.'],
      ['diseño de PCB para potencia', 'retornos de corriente y plano de tierra controlado', ['pistas largas para disipar', 'separar tierras sin estrategia', 'vías aleatorias'], 'Lazo de corriente pequeño reduce EMI y sobrepicos.'],
      ['selección de ADC para control fino', 'resolución efectiva (ENOB) y ruido', ['solo número de bits nominal', 'solo velocidad máxima', 'encapsulado más pequeño'], 'ENOB refleja rendimiento real bajo ruido.'],
      ['modulación PWM de inversor trifásico', 'índice de modulación dentro de región lineal', ['sobre-modular siempre', 'fijar 50% en todas fases', 'usar frecuencia de red en PWM'], 'Controlar el índice evita distorsión excesiva.'],
      ['medición de corriente en puente H', 'shunt de baja resistencia con amplificación diferencial', ['resistencia alta en serie', 'medición de voltaje de compuerta', 'NTC en disipador'], 'El shunt permite sensado preciso con mínima pérdida.'],
      ['convertidor boost en arranque', 'limitar corriente de irrupción', ['elevar duty al máximo desde t=0', 'quitar diodo de salida', 'usar inductor saturable a propósito'], 'El inrush puede destruir semiconductores y capacitores.'],
      ['ruido en señal analógica de baja amplitud', 'blindaje y referencia limpia', ['subir solo ganancia', 'mover cable cerca de variador', 'usar tierra flotante sin retorno'], 'Ruido de modo común y acoplamiento electromagnético deben mitigarse.']
    ]
  },
  {
    category: 'Sistemas de automatización y control analógico y digital',
    subcategory: 'Sistemas de control',
    count: 14,
    items: [
      ['sintonía PID en planta con retardo', 'iniciar con método robusto y validar márgenes', ['incrementar Kp al máximo', 'anular derivativa siempre', 'usar solo integral grande'], 'Retardo reduce fase disponible, se requiere robustez.'],
      ['estabilidad en lazo cerrado', 'todos los polos en semiplano izquierdo', ['cero en origen obligatorio', 'ganancia infinita', 'fase mayor de 360°'], 'La ubicación de polos determina estabilidad BIBO.'],
      ['control cascada en accionamiento', 'lazo interno rápido de corriente/velocidad', ['lazo externo más rápido', 'un solo lazo integral', 'desacoplar sin medición'], 'La estructura cascada mejora rechazo de perturbaciones.'],
      ['implementación digital de controlador continuo', 'discretización con periodo de muestreo adecuado', ['usar Ts muy grande', 'ignorar retención ZOH', 'copiar ecuación continua directa'], 'Ts afecta fase y desempeño del controlador discreto.'],
      ['observador de estados', 'estimación de variables no medidas', ['medición directa de todas las variables', 'eliminación del modelo', 'aumento de ruido blanco'], 'El observador reconstruye estados a partir de entradas y salidas.'],
      ['compensador adelanto', 'incrementar margen de fase', ['eliminar ruido de alta frecuencia totalmente', 'hacer sistema más lento siempre', 'aumentar error estacionario'], 'Lead mejora velocidad y estabilidad relativa.'],
      ['control feedforward', 'compensar perturbación medible antes del error', ['sustituir retroalimentación', 'usar solo saturación', 'filtrar referencia con retardo'], 'Feedforward reduce error por perturbaciones conocidas.'],
      ['anti-windup en PID', 'limitar acumulación integral en saturación', ['aumentar Ki en saturación', 'eliminar saturación física', 'bloquear medición'], 'Evita sobreimpulso y recuperación lenta tras saturación.'],
      ['control por espacio de estados', 'ubicación de polos y realimentación de estados', ['respuesta solo en frecuencia', 'análisis con tabla verdad', 'filtro pasivo'], 'Permite diseñar dinámica multivariable explícita.'],
      ['criterio Nyquist', 'evaluar envolvimiento del punto -1', ['cruce de 0 dB únicamente', 'magnitud DC', 'solo polos de lazo cerrado'], 'Nyquist define estabilidad con polos de lazo abierto.']
    ]
  },
  {
    category: 'Modelado y simulación de sistemas mecatrónicos',
    subcategory: 'Sistemas de control',
    count: 14,
    items: [
      ['modelo de motor DC con carga variable', 'incluir dinámica eléctrica y mecánica acoplada', ['modelo estático de par', 'solo ecuación eléctrica', 'solo fricción seca'], 'La interacción electro-mecánica define transitorios reales.'],
      ['linealización de sistema no lineal', 'alrededor de punto de operación', ['en cualquier punto sin referencia', 'promedio temporal simple', 'integración numérica directa'], 'La linealización local depende del equilibrio seleccionado.'],
      ['validación de modelo', 'comparar simulación con datos experimentales', ['aumentar complejidad hasta converger', 'evitar mediciones', 'ajustar a ojo sin métricas'], 'El ajuste requiere evidencia cuantitativa de error.'],
      ['modelo en espacio de estados', 'representar sistema MIMO de forma compacta', ['usar solo función escalón', 'tabla de verdad', 'ecuación algebraica única'], 'Estado facilita análisis y diseño moderno.'],
      ['simulación de vibraciones', 'considerar amortiguamiento y excitación externa', ['asumir amortiguamiento cero siempre', 'ignorar condiciones iniciales', 'usar paso muy grande'], 'Respuesta transitoria depende de amortiguamiento y muestreo.'],
      ['identificación paramétrica', 'estimar parámetros minimizando error', ['ajustar manual sin criterio', 'usar valores de catálogo', 'ignorar ruido'], 'Métodos de identificación cuantifican incertidumbre paramétrica.'],
      ['co-simulación mecánica-electrónica', 'sincronizar solver y pasos de integración', ['solvers independientes sin acople', 'mismo paso sin estabilidad', 'anular eventos discretos'], 'La co-simulación exige coordinación temporal consistente.'],
      ['modelo de fricción de Coulomb+viscosa', 'captura zona de baja velocidad mejor que modelo lineal puro', ['es idéntico al modelo lineal', 'sirve solo en alta velocidad', 'elimina histéresis totalmente'], 'La fricción no lineal domina en inversión de movimiento.'],
      ['análisis de sensibilidad', 'evalúa impacto de parámetros en desempeño', ['sustituye diseño de control', 'elimina necesidad de medición', 'no depende del modelo'], 'Permite priorizar tolerancias y calibraciones críticas.'],
      ['simulación en tiempo real (HIL)', 'cumplir restricciones de latencia y determinismo', ['usar PC sin reloj determinista', 'priorizar solo gráficos', 'omitir modelo de planta'], 'En HIL el tiempo de cómputo debe ser menor al paso de control.']
    ]
  },
  {
    category: 'Implementación de sistemas mecatrónicos',
    subcategory: 'Tecnologías CAD, CAM y CAE',
    count: 10,
    items: [
      ['diseño paramétrico CAD', 'facilita cambios controlados por relaciones', ['solo edición directa de mallas', 'elimina tolerancias', 'evita historial de operaciones'], 'Parametrización acelera iteraciones de diseño.'],
      ['análisis FEA de componente', 'definir condiciones de frontera realistas', ['mallar muy fino sin restricciones', 'aplicar cargas arbitrarias', 'usar material genérico'], 'Resultados dependen críticamente de fronteras y cargas.'],
      ['CAM para mecanizado de cavidad', 'estrategia de desbaste y acabado diferenciada', ['una sola pasada final', 'avance máximo constante', 'sin compensación de herramienta'], 'Rugosidad y tiempo dependen de estrategia de trayectorias.'],
      ['tolerancias geométricas (GD&T)', 'controlan funcionalidad de ensamble', ['solo mejoran estética', 'reemplazan material', 'eliminan inspección'], 'GD&T comunica requisitos funcionales de fabricación y metrología.'],
      ['postprocesador CAM', 'adapta trayectorias al control CNC específico', ['convierte CAD a STL', 'calibra husillo', 'mide dureza'], 'Sin postprocesado correcto el código no es ejecutable en máquina.'],
      ['optimización topológica', 'reduce masa manteniendo rigidez objetivo', ['aumenta masa para seguridad', 'sustituye análisis modal', 'evita manufactura aditiva'], 'Define distribución de material según función objetivo y restricciones.'],
      ['análisis térmico CAE', 'evalúa expansión y gradientes de temperatura', ['solo color de superficie', 'únicamente flujo másico', 'ignora conducción'], 'Cambios térmicos afectan precisión dimensional y vida útil.'],
      ['simulación cinemática CAD', 'verifica interferencias y rangos de movimiento', ['calcula solo masa', 'sustituye control PID', 'elimina necesidad de prototipo'], 'Detecta colisiones antes de fabricación.'],
      ['DFM en etapa CAD', 'reduce costo al considerar procesos de manufactura', ['aumenta complejidad geométrica', 'prohíbe estandarización', 'evita radios internos'], 'Diseñar para manufactura mejora producibilidad.'],
      ['CAE multifísica', 'acopla fenómenos estructurales, térmicos y fluidos', ['se limita a estática lineal', 'solo usa hojas de cálculo', 'ignora materiales'], 'La interacción de dominios describe mejor sistemas mecatrónicos reales.']
    ]
  },
  {
    category: 'Implementación de sistemas mecatrónicos',
    subcategory: 'Sensores y actuadores',
    count: 21,
    items: [
      ['selección de encoder para eje rápido', 'resolver velocidad máxima y resolución efectiva', ['solo número de canales', 'únicamente costo', 'color del cable'], 'La resolución útil depende de frecuencia de conteo y ruido.'],
      ['LVDT en ambiente industrial', 'excitación AC y demodulación adecuada', ['alimentación DC directa', 'conexión sin blindaje', 'lectura con comparador digital'], 'El LVDT requiere acondicionamiento específico.'],
      ['actuador neumático de doble efecto', 'dimensionar por fuerza útil y presión mínima', ['solo diámetro de manguera', 'carrera más larga posible', 'válvula de mayor voltaje'], 'La fuerza efectiva depende del área y presión real disponible.'],
      ['motor paso a paso en lazo abierto', 'evitar pérdida de pasos con perfil de aceleración', ['arranque a frecuencia máxima', 'eliminar rampa', 'reducir corriente a cero'], 'La inercia carga-motor limita aceleración inicial.'],
      ['sensor Hall para corriente', 'aislamiento y ancho de banda según aplicación', ['medir solo DC con shunt', 'usar NTC en serie', 'alimentarlo con PWM directo'], 'Hall permite sensado aislado AC/DC según diseño.'],
      ['válvula proporcional hidráulica', 'control de caudal por señal analógica calibrada', ['funciona solo ON/OFF', 'no requiere filtración', 'ignora histéresis'], 'Estas válvulas exigen calibración y aceite limpio.'],
      ['galgas extensométricas', 'puente Wheatstone para sensibilidad y compensación', ['conexión serie simple', 'medición por amperímetro', 'alimentación variable no regulada'], 'Puente mejora linealidad y rechazo térmico.'],
      ['servoaccionamiento brushless', 'control vectorial con realimentación de posición', ['conmutación manual', 'inversor monofásico', 'control por relé'], 'BLDC/PMAC de precisión requiere estrategia de control cerrada.'],
      ['sensor inductivo de proximidad', 'detecta metales por cambio de campo electromagnético', ['mide temperatura', 'detecta color', 'funciona por ultrasonido'], 'Su principio se basa en corrientes parásitas en metales.'],
      ['actuador piezoeléctrico', 'alta resolución y carrera corta', ['gran carrera sin amplificación', 'respuesta lenta', 'alto par rotacional'], 'Piezo destaca en microposicionamiento rápido.'],
      ['selección de reductor para servomotor', 'relación y holgura (backlash) compatibles con precisión', ['solo tamaño físico', 'relación máxima siempre', 'material del eje secundario'], 'Backlash impacta exactitud en inversión de movimiento.']
    ]
  },
  {
    category: 'Instrumentación de sistemas mecatrónicos',
    subcategory: 'Sensores y actuadores',
    count: 21,
    items: [
      ['trazabilidad metrológica en planta', 'calibración con patrones certificados', ['comparación visual del operador', 'ajuste por promedio', 'reinicio del sensor'], 'La trazabilidad asegura comparabilidad de mediciones.'],
      ['incertidumbre de medición', 'combinar componentes tipo A y tipo B', ['usar solo repetibilidad', 'tomar valor nominal', 'descartar resolución'], 'La incertidumbre expandida integra fuentes estadísticas y sistemáticas.'],
      ['adquisición de señal ruidosa', 'filtrado y apantallamiento antes de digitalizar', ['aumentar ganancia sin filtro', 'usar cable no trenzado', 'conectar tierra en estrella múltiple'], 'El ruido debe mitigarse en hardware y topología de cableado.'],
      ['muestreo de vibración en maquinaria', 'frecuencia de muestreo > 2.5 veces componente de interés', ['igual a frecuencia de interés', 'menor que banda útil', 'muestra aleatoria'], 'Se requiere margen sobre Nyquist para análisis confiable.'],
      ['instrumentación 4-20 mA', 'alta inmunidad al ruido y detección de falla de lazo', ['máxima velocidad de datos', 'no requiere alimentación', 'solo para laboratorio'], '4-20 mA es robusto para transmisión industrial.'],
      ['termopar tipo K', 'requiere compensación de unión fría', ['medición directa sin referencia', 'solo amplificador operacional', 'excitación por puente'], 'El termopar mide diferencia de temperatura.'],
      ['sensor RTD PT100', 'linealidad superior frente a termopar en rango moderado', ['respuesta digital nativa', 'no requiere corriente de excitación', 'alta deriva por diseño'], 'PT100 ofrece precisión con acondicionamiento correcto.'],
      ['DAQ multicanal', 'sincronización temporal entre canales críticos', ['lectura secuencial sin timestamp', 'mismo cable para todo', 'eliminar reloj'], 'El desfase entre canales altera cálculos dinámicos.'],
      ['diagnóstico de instrumento saturado', 'verificar rango, offset y condición de señal', ['reducir resolución ADC', 'cambiar color de gráfica', 'aumentar baudrate'], 'La saturación invalida medición y control.'],
      ['calibración in situ de transmisor de presión', 'aplicar puntos ascendentes y descendentes para histéresis', ['un solo punto nominal', 'solo cero', 'prueba sin patrón'], 'La histéresis se detecta con barridos bidireccionales.'],
      ['instrumentación virtual', 'integrar adquisición, procesamiento y visualización en software', ['reemplaza sensores físicos', 'elimina calibración', 'evita protocolos'], 'Permite flexibilidad de pruebas y trazabilidad digital.']
    ]
  },
  {
    category: 'Programación de sistemas electrónicos',
    subcategory: 'Dispositivos electrónicos',
    count: 24,
    items: [
      ['firmware en tiempo real para control', 'tareas periódicas con temporizador determinista', ['while infinito con delays variables', 'prioridad aleatoria', 'polling sin límite'], 'El control requiere jitter bajo y periodos constantes.'],
      ['interrupciones en microcontrolador', 'rutinas ISR cortas y no bloqueantes', ['usar printf largo en ISR', 'esperar por UART', 'hacer cálculo pesado completo'], 'ISR extensas degradan latencia global.'],
      ['máquina de estados para secuencia industrial', 'transiciones explícitas por eventos', ['condiciones implícitas dispersas', 'saltos goto múltiples', 'variables globales sin control'], 'FSM mejora trazabilidad y depuración.'],
      ['comunicación SPI con ADC externo', 'sincronizar reloj y fase CPOL/CPHA', ['usar baudrate serial UART', 'ignorar chip select', 'leer sin reloj'], 'Parámetros de fase/polaridad determinan validez de datos.'],
      ['comunicación I2C robusta', 'manejar ACK/NACK y recuperación de bus', ['suponer ACK siempre', 'sin resistencias pull-up', 'una sola dirección fija'], 'I2C requiere manejo de fallos de arbitraje y bloqueo.'],
      ['optimización de memoria embebida', 'usar buffers estáticos y perfilado de RAM', ['reservas dinámicas continuas', 'copias innecesarias', 'string sin límites'], 'Memoria limitada exige diseño predecible.'],
      ['control de versión para firmware', 'ramas y revisión de cambios trazable', ['sobrescribir archivo final', 'nombres v1final2', 'sin historial'], 'Versionado reduce errores de integración.'],
      ['RTOS en sistema mecatrónico', 'prioridades y mutex para recursos compartidos', ['todas tareas misma prioridad', 'sin exclusión mutua', 'polling bloqueante'], 'Sincronización evita condiciones de carrera.'],
      ['DMA para adquisición rápida', 'descargar CPU en transferencia de datos', ['copiar byte por byte en bucle', 'usar interrupción por bit', 'desactivar reloj periférico'], 'DMA mejora rendimiento en muestreo continuo.'],
      ['seguridad en bootloader', 'verificación de integridad/firmado de firmware', ['actualizar sin validación', 'usar contraseña fija en texto', 'ignorar rollback'], 'Evita carga de firmware corrupto o malicioso.'],
      ['depuración JTAG/SWD', 'breakpoints y watchpoints en variables críticas', ['depurar con mensajes aleatorios', 'desactivar optimización siempre', 'reiniciar sin traza'], 'Herramientas de depuración reducen tiempo de diagnóstico.'],
      ['programación defensiva en C embebido', 'validar límites y estados inválidos', ['asumir entradas perfectas', 'omitir manejo de errores', 'usar casts inseguros'], 'Entradas no válidas son comunes en entorno industrial.']
    ]
  },
  {
    category: 'Integración de tecnologías para sistemas mecatrónicos',
    subcategory: 'Planeación y evaluación de proyectos',
    count: 28,
    items: [
      ['ruta crítica en proyecto mecatrónico', 'actividades con holgura cero', ['tareas más costosas', 'actividades con más personal', 'etapas de compras'], 'La ruta crítica determina duración mínima del proyecto.'],
      ['gestión de riesgos técnicos', 'matriz probabilidad-impacto con plan de mitigación', ['solo lista de riesgos', 'eliminar riesgos menores sin análisis', 'transferir todos al cliente'], 'Gestionar riesgo implica priorizar y actuar preventivamente.'],
      ['WBS en ingeniería', 'descomposición jerárquica del alcance', ['cronograma diario', 'lista de compras', 'organigrama de empresa'], 'La EDT/WBS estructura entregables y paquetes de trabajo.'],
      ['valor ganado (EVM)', 'comparar PV, EV y AC para desempeño', ['solo costo real', 'solo avance físico', 'solo presupuesto aprobado'], 'EVM integra costo y avance para control del proyecto.'],
      ['análisis de factibilidad técnica', 'validar disponibilidad tecnológica y capacidades', ['solo retorno financiero', 'solo opinión comercial', 'solo benchmark de marketing'], 'Factibilidad técnica evita compromisos inviables.'],
      ['gestión de cambios de alcance', 'control formal con impacto en costo-tiempo', ['aceptar cambios sin registro', 'bloquear todos los cambios', 'modificar planos al final'], 'El control de cambios mantiene trazabilidad contractual.'],
      ['documentación de requisitos', 'especificaciones verificables y medibles', ['requisitos ambiguos', 'enunciados sin criterio de aceptación', 'copia de catálogos'], 'Requisitos medibles facilitan validación y pruebas.'],
      ['FMEA de sistema mecatrónico', 'priorizar por severidad, ocurrencia y detección', ['ordenar por costo de componente', 'usar solo severidad', 'omitir acciones correctivas'], 'FMEA identifica modos de falla y acciones preventivas.'],
      ['puesta en marcha (commissioning)', 'plan de pruebas SAT/FAT con criterios', ['prueba única final', 'arranque sin checklist', 'validación verbal'], 'SAT/FAT aseguran cumplimiento técnico antes de entrega.'],
      ['ROI de automatización', 'considerar CAPEX, OPEX y productividad', ['solo costo inicial', 'solo consumo eléctrico', 'solo depreciación contable'], 'El retorno depende de ahorros y mejoras operativas.'],
      ['gestión de stakeholders', 'mapa de interesados y estrategia de comunicación', ['enviar correos masivos', 'informar solo al patrocinador', 'evitar reportes'], 'Alinear interesados reduce retrabajos y bloqueos.'],
      ['madurez tecnológica (TRL)', 'evaluar nivel de preparación de la solución', ['medir solo calidad del proveedor', 'estimar por intuición', 'ignorar pruebas piloto'], 'TRL ayuda a estimar riesgo de adopción tecnológica.'],
      ['procura de componentes críticos', 'estrategia de abastecimiento y obsolescencia', ['comprar solo por menor precio', 'proveedor único sin respaldo', 'sin inventario de seguridad'], 'Electrónica y actuadores sufren lead times largos.'],
      ['KPIs de proyecto de automatización', 'OTD, cumplimiento técnico y desviación de costo', ['solo horas-hombre', 'solo satisfacción interna', 'solo consumo de café'], 'KPIs deben reflejar resultados de negocio y técnicos.']
    ]
  },
  {
    category: 'Integración de tecnologías para sistemas mecatrónicos',
    subcategory: 'Redes industriales',
    count: 17,
    items: [
      ['selección de protocolo industrial', 'latencia, determinismo y topología requerida', ['color del cable', 'marca del PLC', 'idioma del software'], 'El protocolo se elige por requisitos de desempeño y compatibilidad.'],
      ['PROFINET IRT', 'comunicación en tiempo real isócrono para motion', ['mensajería no determinista', 'solo diagnóstico web', 'protocolo serie RS-232'], 'IRT está orientado a control de movimiento sincronizado.'],
      ['EtherCAT', 'procesamiento on-the-fly con baja latencia', ['token passing clásico', 'maestro-maestro sin sincronía', 'solo capa aplicación'], 'EtherCAT optimiza ciclo en redes de servodrives.'],
      ['Modbus RTU', 'protocolo maestro-esclavo sobre RS-485', ['topología anillo óptico', 'sin direccionamiento de nodo', 'transmisión TCP nativa'], 'RTU usa serial diferencial y CRC.'],
      ['segmentación de red OT', 'aislar celdas y controlar tráfico entre zonas', ['red plana única', 'acceso abierto desde internet', 'broadcast sin filtros'], 'Segmentar mejora ciberseguridad y disponibilidad.'],
      ['sincronización temporal IEEE 1588', 'alinear reloj para eventos distribuidos', ['usar reloj local sin ajuste', 'sin timestamp de paquetes', 'aumentar solo ancho de banda'], 'PTP habilita coordinación temporal precisa.'],
      ['redundancia en red industrial', 'anillos MRP/PRP según criticidad', ['un solo switch sin respaldo', 'redundancia solo eléctrica', 'backup manual semanal'], 'La redundancia reduce tiempo de indisponibilidad.'],
      ['diagnóstico de red OT', 'monitorear jitter, pérdida y utilización', ['solo ping es suficiente', 'revisar temperatura ambiente', 'reiniciar PLC siempre'], 'Indicadores de red explican fallos intermitentes de control.'],
      ['seguridad en protocolos industriales', 'listas de control, VLAN y autenticación', ['contraseña por defecto', 'sin firewall interno', 'acceso remoto abierto'], 'OT requiere hardening específico de comunicaciones.']
    ]
  },
  {
    category: 'Integración de tecnologías para sistemas mecatrónicos',
    subcategory: 'Automatización y control industrial',
    count: 17,
    items: [
      ['arquitectura de celda automatizada', 'separar niveles campo-control-supervisión', ['un único controlador para todo', 'SCADA como PLC', 'sin bus de campo'], 'La jerarquía mejora escalabilidad y mantenimiento.'],
      ['interlocks de seguridad', 'lógica cableada o safety PLC certificada', ['interlock solo en HMI', 'deshabilitar en arranque', 'reset automático sin validación'], 'Funciones de seguridad deben cumplir normas funcionales.'],
      ['control secuencial en PLC', 'SFC/GRAFCET para etapas y transiciones', ['solo lazo PID', 'tabla Excel en operador', 'script sin estados'], 'SFC facilita diagnóstico y operación de secuencias.'],
      ['SCADA en planta', 'supervisión, alarmas y trazabilidad histórica', ['control de alta velocidad', 'reemplazo de sensores', 'cálculo FEM'], 'SCADA complementa al PLC para capa de supervisión.'],
      ['OEE en automatización', 'disponibilidad x rendimiento x calidad', ['solo tiempo de ciclo', 'solo piezas buenas', 'solo consumo'], 'OEE evalúa efectividad global del equipo.'],
      ['lazo de control de temperatura industrial', 'estrategia PID con anti-windup y filtrado', ['control ON/OFF en proceso lento crítico', 'sin realimentación', 'solo feedforward'], 'Procesos térmicos requieren robustez ante retardos.'],
      ['integración robot-PLC', 'handshake determinista y gestión de fallas', ['arranque por señal única', 'sin estados de error', 'comunicación manual'], 'El handshake evita colisiones y secuencias inseguras.'],
      ['arranque de motor en línea de producción', 'considerar corriente de arranque y protección', ['activar sin protección térmica', 'eliminar contactor', 'solo fusible ultrarrápido'], 'Protección adecuada preserva equipo y continuidad operativa.'],
      ['mantenimiento predictivo en automatización', 'usar datos de condición para anticipar fallas', ['mantenimiento solo correctivo', 'cambiar piezas por calendario fijo', 'sin registro histórico'], 'La analítica de condición reduce paros no programados.']
    ]
  }
];

const templates = [
  ({ concept, category, subcategory }) => `En el contexto de ${category.toLowerCase()} (${subcategory.toLowerCase()}), ¿qué enfoque es más adecuado para ${concept}?`,
  ({ concept }) => `En una evaluación CENEVAL de nivel difícil, ¿cuál afirmación técnica describe mejor la decisión de ingeniería para ${concept}?`,
  ({ concept }) => `Al validar un diseño mecatrónico, ¿qué criterio profesional aplica específicamente para ${concept}?`
];

function buildQuestionsFromTopic(topic) {
  const generated = [];
  let idx = 0;

  while (generated.length < topic.count) {
    const [concept, answer, distractors, explanation] = topic.items[idx % topic.items.length];
    const template = templates[idx % templates.length];

    generated.push({
      category: `${topic.category} · ${topic.subcategory}`,
      question: template({ concept, category: topic.category, subcategory: topic.subcategory }),
      options: [answer, ...distractors],
      answer,
      explanation: `${explanation} [Área: ${topic.category}]`
    });

    idx += 1;
  }

  return generated;
}

export const questions = examBlueprint.flatMap(buildQuestionsFromTopic);
