export const studySections = [
  {
    title: 'Leyes de Kirchhoff (circuitos) - explicado chill',
    summary: 'KCL: la suma de corrientes que entran a un nodo es igual a la suma de corrientes que salen. KVL: la suma algebraica de voltajes en una malla cerrada es cero.',
    keyEquations: ['ΣI_nodo = 0', 'ΣV_malla = 0', 'V = I·R'],
    tips: ['Primero define polaridades y sentido de corriente.', 'Si te pierdes, arma una tabla nodo por nodo.', 'Al final valida potencia: P=VI.'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kirchhoff.svg'
  },
  {
    title: 'Dinámica',
    summary: 'La base es la segunda ley de Newton: la fuerza neta produce aceleración.',
    keyEquations: ['ΣF = m·a', 'W = ∫F·dr', 'K = 1/2 m v²'],
    tips: ['Haz diagrama de cuerpo libre.', 'Separa ejes y signos.', 'Comprueba unidades N, J, kg·m/s².']
  },
  {
    title: 'Cinemática',
    summary: 'Describe movimiento sin analizar fuerzas.',
    keyEquations: ['v = dr/dt', 'a = dv/dt', 'v_t = ωr', 'a_c = v²/r'],
    tips: ['En rotación separa radial y tangencial.', 'Usa vectorial cuando haya 2D/3D.', 'No mezcles grados y radianes.']
  },
  {
    title: 'Robótica (fundamentos rápidos)',
    summary: 'Un manipulador se modela por cinemática directa/inversa y control de trayectoria.',
    keyEquations: ['x = f(q)', 'q = f⁻¹(x)', 'τ = J(q)^T F', 'v = J(q) q̇'],
    tips: ['Revoluta: giro. Prismática: traslación.', 'Verifica singularidades de Jacobiano.', 'Controla límites articulares.']
  },
  {
    title: 'Control clásico',
    summary: 'Retroalimentación para seguir referencia y rechazar perturbaciones.',
    keyEquations: ['u(t)=Kp e(t)+Ki∫e dt+Kd de/dt', 'G_cl = G/(1+GH)', 'e_ss según tipo del sistema'],
    tips: ['Si hay saturación, usa anti-windup.', 'Mira estabilidad antes de afinar rapidez.', 'No ignores ruido en derivativa.']
  },
  {
    title: 'Esfuerzos y materiales',
    summary: 'Relacionan carga, geometría y comportamiento del material.',
    keyEquations: ['σ = F/A', 'τ = V/A', 'ε = ΔL/L', 'E = σ/ε (zona elástica)'],
    tips: ['Convierte mm² a m² en SI cuando toque.', 'Revisa factores de seguridad.', 'Fatiga ≠ carga estática.']
  },
  {
    title: 'Manufactura CNC',
    summary: 'Calidad final depende de estrategia de corte, herramienta y parámetros.',
    keyEquations: ['n = (1000·Vc)/(πD)', 'f = f_z · z · n', 'MRR ≈ a_p·a_e·v_f'],
    tips: ['Define primero material y herramienta.', 'Balancea avance y rpm para evitar chatter.', 'Valida G-code con simulación previa.']
  }
];
