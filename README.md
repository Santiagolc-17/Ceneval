# CENEVAL Mecatrónica (React + Vite)

Simulador tipo CENEVAL para Mecatrónica con banco ampliado y enfoque técnico.

## ¿Qué incluye ahora?

- **400 preguntas en total**:
  - 200 preguntas de nivel difícil (banco principal).
  - 100 preguntas adicionales basadas en tus temas de:
    - Materiales y manufactura CNC.
    - Cinemática y dinámica.
    - Energía y trabajo.
    - Automatización y programación.
    - Problemas integradores con datos reales.
  - 100 preguntas extra de repaso **básico/chill** con retroalimentación.
- Orden aleatorio de preguntas y opciones en cada sesión.
- Dos modos:
  - **Modo juego** (puntaje clásico).
  - **Modo estudio** (repaso con retroalimentación inmediata).

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
