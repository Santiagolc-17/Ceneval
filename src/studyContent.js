export const studySections = [
  {
    id: 'cinematica',
    title: 'Cinemática',
    keywords: ['cinemática', 'movimiento', 'robot', 'integradores'],
    summary: 'Modela posición, velocidad y aceleración. Aquí se concentran errores de radianes y signos.',
    formulaSheet: [
      {
        formula: 'v = dr/dt',
        variables: { v: 'velocidad lineal (m/s)', r: 'posición (m)', t: 'tiempo (s)' }
      },
      {
        formula: 'a = dv/dt',
        variables: { a: 'aceleración (m/s²)', v: 'velocidad (m/s)', t: 'tiempo (s)' }
      },
      {
        formula: 'v_t = ω·r',
        variables: { v_t: 'velocidad tangencial (m/s)', ω: 'velocidad angular (rad/s)', r: 'radio (m)' }
      },
      {
        formula: 'a_c = v²/r = ω²·r',
        variables: { a_c: 'aceleración centrípeta (m/s²)', v: 'velocidad tangencial', ω: 'velocidad angular', r: 'radio' }
      }
    ],
    theoryQuestions: [
      { question: '¿Por qué siempre debemos usar radianes al aplicar v_t = ωr?', answer: 'Porque 1 rad es una razón geométrica directa arco/radio; con grados debes convertir a rad/s.' },
      { question: '¿Qué diferencia conceptual hay entre desplazamiento y distancia?', answer: 'Desplazamiento es vector entre inicio-fin; distancia es longitud total recorrida (escalar).' },
      { question: '¿Cuándo usar a_c = v²/r y cuándo a_t = αr?', answer: 'a_c para cambio de dirección; a_t para cambio de rapidez angular.' }
    ],
    exercises: [
      { problem: 'Un brazo de r=1.2 m gira a ω=3 rad/s. Calcula v_t.', solution: 'v_t = ωr = 3·1.2 = 3.6 m/s.' },
      { problem: 'Si v=4 m/s y r=0.5 m, calcula a_c.', solution: 'a_c = v²/r = 16/0.5 = 32 m/s².' },
      { problem: 'θ(t)=2t², r=0.8 m. Calcula v_t en t=1 s.', solution: 'ω=dθ/dt=4t ⇒ ω(1)=4 rad/s. v_t=ωr=4·0.8=3.2 m/s.' }
    ],
    tips: ['Checklist: unidades SI, radianes, signo vectorial.', 'Si hay brazo telescópico, separa componente radial y tangencial.', 'En dudas, dibuja la trayectoria.']
  },
  {
    id: 'dinamica',
    title: 'Dinámica',
    keywords: ['dinámica', 'fuerza', 'trabajo', 'energía'],
    summary: 'Conecta fuerzas con movimiento. Mucho CENEVAL mezcla Newton + trabajo/energía.',
    formulaSheet: [
      { formula: 'ΣF = m·a', variables: { 'ΣF': 'fuerza neta (N)', m: 'masa (kg)', a: 'aceleración (m/s²)' } },
      { formula: 'W = ∫F·dr', variables: { W: 'trabajo (J)', F: 'fuerza (N)', r: 'desplazamiento (m)' } },
      { formula: 'K = 1/2·m·v²', variables: { K: 'energía cinética (J)', m: 'masa', v: 'velocidad' } },
      { formula: 'P = W/t = τ·ω', variables: { P: 'potencia (W)', W: 'trabajo', t: 'tiempo', 'τ': 'torque (N·m)', ω: 'rad/s' } }
    ],
    theoryQuestions: [
      { question: '¿Qué indica trabajo negativo?', answer: 'Que la fuerza se opone al desplazamiento y extrae energía mecánica del sistema.' },
      { question: '¿Qué une el teorema trabajo-energía?', answer: 'El trabajo neto realizado sobre un cuerpo es igual al cambio en energía cinética.' },
      { question: '¿Por qué potencia y torque aparecen juntos en motores?', answer: 'Porque la potencia rotacional se expresa como P=τω y define capacidad de hacer trabajo por unidad de tiempo.' }
    ],
    exercises: [
      { problem: 'm=5 kg, a=2 m/s². ¿Fuerza neta?', solution: 'ΣF=ma=5·2=10 N.' },
      { problem: 'F=120 N constante y d=0.4 m. ¿Trabajo?', solution: 'W=F·d=48 J.' },
      { problem: 'τ=6 N·m y ω=50 rad/s. ¿Potencia?', solution: 'P=τω=300 W.' }
    ],
    tips: ['Dibuja diagrama de cuerpo libre.', 'No mezcles N·m (trabajo) con N·m de torque sin contexto.', 'Verifica magnitud final con estimación mental.']
  },
  {
    id: 'esfuerzos',
    title: 'Esfuerzo normal, cortante y deformaciones',
    keywords: ['esfuerzo', 'materiales', 'torsión', 'poisson', 'hooke'],
    summary: 'Base para diseño mecánico: factor de seguridad, deformaciones y torsión.',
    formulaSheet: [
      { formula: 'σ = F/A', variables: { 'σ': 'esfuerzo normal (Pa)', F: 'fuerza axial (N)', A: 'área (m²)' } },
      { formula: 'τ = V/A', variables: { 'τ': 'esfuerzo cortante (Pa)', V: 'fuerza cortante (N)', A: 'área cortante (m²)' } },
      { formula: 'ε = ΔL/L', variables: { 'ε': 'deformación unitaria', 'ΔL': 'cambio de longitud', L: 'longitud original' } },
      { formula: 'γ = τ/G', variables: { 'γ': 'deformación angular', 'τ': 'esfuerzo cortante', G: 'módulo de corte' } },
      { formula: 'ν = -ε_trans/ε_long', variables: { 'ν': 'razón de Poisson', 'ε_trans': 'deformación transversal', 'ε_long': 'deformación longitudinal' } }
    ],
    theoryQuestions: [
      { question: '¿Qué significa factor de seguridad?', answer: 'Relación entre capacidad resistente y carga de trabajo; margen ante incertidumbre.' },
      { question: '¿Cuándo aplicar Hooke generalizada?', answer: 'En régimen elástico lineal y materiales homogéneos/isotrópicos.' },
      { question: '¿Por qué importa Poisson en ejes y vigas?', answer: 'Porque alargar/acortar en una dirección deforma transversalmente y afecta ajuste y rigidez.' }
    ],
    exercises: [
      { problem: 'F=8,000 N y A=200 mm². Calcula σ.', solution: 'A=200e-6 m²; σ=8000/200e-6=40 MPa.' },
      { problem: 'V=3000 N y A=150 mm². Calcula τ.', solution: 'A=150e-6 m²; τ=3000/150e-6=20 MPa.' },
      { problem: 'ε_long=0.002 y ε_trans=-0.0006. Calcula ν.', solution: 'ν= -(-0.0006/0.002)=0.30.' }
    ],
    tips: ['Error típico: olvidar convertir mm² a m².', 'Siempre declara unidades en cada paso.', 'Si resultado sale enorme, revisa área.']
  },
  {
    id: 'electronica',
    title: 'MOSFET, flip-flops y bits',
    keywords: ['mosfet', 'flip-flop', 'bits', 'digital', 'adc'],
    summary: 'Bloque de electrónica digital/analógica frecuente en EPE y CENEVAL.',
    formulaSheet: [
      { formula: 'Niveles ADC = 2^n - 1', variables: { n: 'número de bits del ADC' } },
      { formula: 'Resolución = Rango/(2^n - 1)', variables: { Rango: 'máximo - mínimo de variable física', n: 'bits' } },
      { formula: 'P = V·I', variables: { P: 'potencia (W)', V: 'voltaje (V)', I: 'corriente (A)' } }
    ],
    theoryQuestions: [
      { question: '¿Qué controla Vgs en un MOSFET?', answer: 'La conducción del canal entre drenador y fuente.' },
      { question: '¿Qué hace un flip-flop D?', answer: 'Almacena 1 bit y captura entrada D con el flanco de reloj.' },
      { question: '¿Por qué un bit flotante en digital es peligroso?', answer: 'Porque toma valores indeterminados por ruido y provoca lecturas erráticas.' }
    ],
    exercises: [
      { problem: 'ADC de 10 bits para 0–5 V. Resolución en V/bit.', solution: '5/(2^10-1)=5/1023≈4.89 mV/bit.' },
      { problem: 'ADC 8 bits para -25 a 100°C. Resolución °C/bit.', solution: 'Rango 125°C, niveles 255: 125/255≈0.49°C/bit.' },
      { problem: 'Si V=24 V e I=1.8 A, potencia consumida.', solution: 'P=VI=43.2 W.' }
    ],
    tips: ['Recuerda: 1 byte = 8 bits.', 'Para binario↔decimal, usa pesos 2^k.', 'Nunca dejes entradas digitales sin referencia pull-up/pull-down.']
  },
  {
    id: 'control',
    title: 'Control clásico, moderno, Laplace y Z',
    keywords: ['control', 'laplace', 'transformada', 'z', 'respuesta'],
    summary: 'Tema pesado del examen. Requiere interpretar respuesta temporal y estabilidad.',
    formulaSheet: [
      { formula: 'G_cl(s) = G(s)/(1 + G(s)H(s))', variables: { G: 'planta', H: 'retroalimentación' } },
      { formula: 'u(t)=Kp e(t)+Ki∫e dt+Kd de/dt', variables: { u: 'señal de control', e: 'error', Kp: 'ganancia proporcional', Ki: 'integral', Kd: 'derivativa' } },
      { formula: 'z = e^{sT}', variables: { z: 'variable discreta', s: 'variable de Laplace', T: 'periodo de muestreo (s)' } }
    ],
    theoryQuestions: [
      { question: '¿Qué mejora la acción integral?', answer: 'Reduce/elimina error en estado estacionario en muchos sistemas.' },
      { question: '¿Qué riesgo tiene derivativa sin filtro?', answer: 'Amplifica ruido de medición.' },
      { question: '¿Qué diferencia básica hay entre control clásico y moderno?', answer: 'Clásico usa funciones de transferencia/frecuencia; moderno trabaja fuertemente en espacio de estados.' }
    ],
    exercises: [
      { problem: 'Para G=5 y H=1, calcula Gcl.', solution: 'Gcl=5/(1+5)=5/6≈0.833.' },
      { problem: 'Si θ(t)=3t², obtiene ω(t).', solution: 'ω=dθ/dt=6t.' },
      { problem: 'Con T=0.1 s y s=-2, calcula z.', solution: 'z=e^{sT}=e^{-0.2}≈0.8187.' }
    ],
    tips: ['Siempre identifica tipo de sistema antes de hablar de error estacionario.', 'Si hay saturación, piensa en anti-windup.', 'No memorices solo tabla: entiende propiedades de Laplace/Z.']
  },
  {
    id: 'economica',
    title: 'PERT, decisión e ingeniería económica',
    keywords: ['pert', 'económica', 'tmar', 'vpn', 'tir', 'equilibrio', 'deuda', 'liquidez', 'rentabilidad'],
    summary: 'Bloque de integración tecnológica/proyectos: muy puntuable si dominas fórmulas.',
    formulaSheet: [
      { formula: 'VPN = Σ(V_t/(1+i)^t) - I_0', variables: { 'V_t': 'flujo neto en periodo t', i: 'tasa (TMAR)', t: 'periodo', I_0: 'inversión inicial' } },
      { formula: 'Punto equilibrio (unidades)= CF/(P-CV_u)', variables: { CF: 'costos fijos', P: 'precio unitario', CV_u: 'costo variable unitario' } },
      { formula: 'Interés simple: I = P·i·n', variables: { P: 'principal', i: 'tasa por periodo', n: 'número de periodos' } }
    ],
    theoryQuestions: [
      { question: '¿Qué significa TMAR?', answer: 'Tasa mínima aceptable de rendimiento para decidir inversión.' },
      { question: '¿Cuándo un proyecto es aceptable por VPN?', answer: 'Cuando VPN > 0 a la TMAR definida.' },
      { question: '¿Qué diferencia hay entre TIR y periodo de recuperación?', answer: 'TIR mide rentabilidad porcentual; payback mide tiempo para recuperar inversión.' }
    ],
    exercises: [
      { problem: 'CF=50,000; P=12; CVu=7. Punto de equilibrio.', solution: 'Q*=CF/(P-CVu)=50,000/5=10,000 unidades.' },
      { problem: 'P=1000, i=2% mensual, n=8 meses. Interés simple.', solution: 'I=1000·0.02·8=160.' },
      { problem: 'Flujos: 40k, 40k, 40k; i=10%; I0=100k. VPN.', solution: 'VPN=40k/(1.1)+40k/(1.1²)+40k/(1.1³)-100k≈ -525.9 (casi equilibrio).' }
    ],
    tips: ['No mezcles tasa anual con periodos mensuales.', 'En árboles de decisión, define probabilidades explícitas.', 'En PERT revisa ruta crítica antes de costos.']
  }
];
