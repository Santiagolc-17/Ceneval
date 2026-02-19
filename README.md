# CENEVAL Mecatrónica (React + Vite)

Simulador tipo CENEVAL para Mecatrónica con banco ampliado, modo juego/estudio y preguntas verificadas con fuentes.

## ¿Qué incluye ahora?

- **410 preguntas en total**:
  - 200 preguntas de nivel difícil (banco principal).
  - 100 preguntas adicionales basadas en tus bloques solicitados.
  - 100 preguntas básicas/chill con retro de repaso.
  - 10 preguntas verificadas con referencias públicas (internet) y explicación extendida.
- Orden aleatorio de preguntas y opciones en cada sesión.
- Modo **Juego** y modo **Estudio** con comportamientos distintos.
- Navegación por reactivos:
  - botón **Marcar duda**,
  - panel de estado (respondida/no respondida/marcada),
  - posibilidad de regresar a cualquier reactivo.
- Examen por bloques (solo Cinemática, solo CNC, solo Energía, etc.).
- Historial local con `localStorage`:
  - puntaje, fecha, modo, tiempo y porcentaje.
- Dashboard de desempeño:
  - top 5 áreas fuertes y 5 áreas débiles.
- Banco adaptativo:
  - mayor probabilidad de preguntas de categorías donde históricamente fallas.

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
