# CENEVAL Mecatrónica (React + Vite)

Simulador tipo CENEVAL para Mecatrónica con banco ampliado, preguntas verificadas, modo juego/estudio y biblioteca de repaso.

## ¿Qué incluye ahora?

- **660 preguntas en total**:
  - 200 preguntas de nivel difícil (banco principal).
  - 350 preguntas adicionales (incluye +30 por sección solicitada en bloques clave).
  - 100 preguntas EPE verificadas/similares con bibliografía técnica referencial.
  - 10 preguntas verificadas de internet con fuente explícita.
- Orden aleatorio de preguntas y opciones en cada sesión.
- Modo **Juego** y modo **Estudio** con comportamientos distintos.
- Navegación por reactivos:
  - botón **Marcar duda**,
  - panel de estado (respondida/no respondida/marcada),
  - posibilidad de regresar a cualquier reactivo.
- Examen por bloques (solo Cinemática, CNC, Energía, Robótica/Control, etc.).
- Historial local con `localStorage`:
  - puntaje, fecha, modo, tiempo y desempeño por categoría.
- Dashboard de desempeño:
  - top 5 áreas fuertes y 5 áreas débiles.
- Banco adaptativo:
  - mayor probabilidad de preguntas de categorías donde históricamente fallas.
- Biblioteca de estudio:
  - leyes de Kirchhoff,
  - dinámica,
  - cinemática,
  - robótica,
  - control,
  - esfuerzos/materiales,
  - manufactura CNC,
  con ecuaciones y tips de resolución.

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

Abre: `http://localhost:4173`

## Build de producción

```bash
npm run build
npm run preview -- --host 0.0.0.0 --port 4173
```
