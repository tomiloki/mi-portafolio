# Mejora continua del agente

Este documento registra errores, decisiones operativas y convenciones para que el agente no repita fallas y sepa qué revisar antes de tocar el portafolio.

## Archivos que el agente debe revisar

- `AGENTS.md` y `CLAUDE.md`: reglas activas del proyecto, tono, restricciones y documentación viva.
- `mi-portafolio/app/page.tsx`: fuente principal del contenido, datos y JSX de secciones.
- `mi-portafolio/app/globals.css`: arquitectura visual y clases CSS custom.
- `mi-portafolio/app/layout.tsx`: metadata, fuentes y estructura base.
- `mi-portafolio/app/components/*`: Navbar, Footer, animaciones y componentes reutilizados.
- `mi-portafolio/scripts/check-text-integrity.mjs`: chequeo de integridad de texto para evitar tildes rotas.

## Incidente 2026-07-04 — tildes convertidas en `?`

### Qué pasó

Varios textos de `mi-portafolio/app/page.tsx` quedaron escritos con signos de pregunta en lugar de caracteres acentuados. El patrón afectó palabras como "Sobre mí", "producción", "construí", "logístico", "código", "documentación" y "Tomás".

### Causa raíz

El cambio anterior escribió texto con tildes mediante un script ejecutado desde PowerShell hacia Python. En ese paso, parte del contenido llegó al proceso con caracteres ya reemplazados por `?`. El archivo no tenía `U+FFFD`; tenía signos `?` literales, por eso el problema se veía directamente en el navegador.

### Corrección aplicada

- Se corrigieron los literales dañados en `mi-portafolio/app/page.tsx`.
- Se agregó `mi-portafolio/scripts/check-text-integrity.mjs`.
- Se agregó el script `npm run check:text`.
- Se documentó la regla en `AGENTS.md` y `CLAUDE.md`.

### Prevención

Antes de cerrar cambios de copy o documentación:

```bash
cd mi-portafolio
npm run check:text
```

Si el chequeo falla, revisar primero los literales en:

1. `app/page.tsx`
2. `app/components/*`
3. `app/layout.tsx`
4. `../AGENTS.md`
5. `../CLAUDE.md`

No asumir que el problema viene de fuentes, CSS o render del navegador hasta verificar el contenido del archivo.

## Convenciones de diseño vigentes

- Copy sobrio, descriptivo y sencillo.
- Evitar chamuyo, claims inflados, frases vendidas y sobreexplicación.
- Usar CSS custom en `globals.css`; no usar Tailwind directo en JSX.
- No mover Proyectos antes de Experiencia: el usuario lo denegó explícitamente.
- Antes de cambiar textos visibles de la página, proponer primero qué se saca y qué se agrega para que el usuario decida.
- Reutilizar primitivas existentes antes de crear estilos nuevos:
  - `content-card`
  - `split-layout`
  - `section-copy-column`
  - `copy-stack`
  - `section-heading--compact`

## Backlog de discusión

- Evaluar una sección o bloque de reflexión sobre IA. El usuario la considera una idea potencialmente diferencial porque tiene una postura formada al respecto. No implementarla sin discutir enfoque, ubicación y texto.

## Convención para errores del agente

Cuando el agente cometa un error:

1. Verificar el problema en código o documentación.
2. Explicar causa raíz con evidencia.
3. Corregir el problema.
4. Documentar prevención en este archivo.
5. Guardar aprendizaje en Engram.
