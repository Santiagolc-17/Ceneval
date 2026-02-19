# CENEVAL Mecatrónica (React + Vite)

Simulador tipo CENEVAL para Mecatrónica orientado a preparación real (EPE + EGEL).

## ¿Qué incluye ahora?

- **Banco unificado y depurado** (base + adicionales + verificadas + EPE + 200 de circuitos/automatización).
- Eliminación de reactivos repetidos por normalización de texto/categoría.
- Enriquecimiento automático por reactivo:
  - `hint` (pista),
  - `deepExplanation` (explicación extendida),
  - `source` y `sourceUrl` (fuente),
  - `optionExplanations` (por qué sí / por qué no cada opción).
- Modo **Juego** (intento único) y **Estudio** (pista + reintento hasta acertar).
- Longitud configurable de sesión (el usuario decide cuántas preguntas resolver).
- Opción de estudio mixto (teoría + preguntas durante la misma sesión).
- Navegación por reactivos con:
  - marcar duda,
  - panel de estado,
  - salto directo a cualquier reactivo,
  - botón para volver al menú principal.
- Examen por bloques (cinemática, CNC/materiales, energía, robótica/control, bits/electrónica, económica/proyectos, verificadas).
- Historial local (`localStorage`) con desempeño por categoría.
- Banco adaptativo (prioriza áreas débiles).
- Biblioteca de estudio integrada con formulario:
  - significado de cada letra en las fórmulas,
  - 3 preguntas teóricas por sección,
  - 3 ejercicios resueltos por sección,
  - tips de resolución.

## Secciones de estudio incluidas

- Cinemática
- Dinámica
- Esfuerzos y materiales
- Electrónica digital (bits, MOSFET, flip-flops, ADC)
- Control clásico/moderno + Laplace/Z
- PERT/decisión/ingeniería económica

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
