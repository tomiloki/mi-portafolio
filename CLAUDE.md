# Portafolio — Tomás Escalante

## Contexto
Sitio personal de Tomás Escalante Orellana. Desarrollador Full Stack en LeveraWeb, próximo a titularse de Ingeniería en Informática (Duoc UC). El portafolio existe para demostrar capacidad técnica real a reclutadores y oportunidades técnicas. La fuente de verdad de la narrativa es `cv/CV_Tomas_Escalante.md`.

> Nota (jul 2026): Livio murió (llegó a MVP, no a producción). El framing viejo "CTO de Livio primero" quedó OBSOLETO. Hoy la experiencia principal es LeveraWeb; Livio es un proyecto propio pasado.

El proyecto Next.js está en `mi-portafolio/`. Todos los comandos de desarrollo se ejecutan desde ahí.

## Cómo correr el proyecto
```bash
cd mi-portafolio
npm run dev       # desarrollo en localhost:3000
npm run build     # build de producción
npm run lint      # linting
```

## Stack
- **Framework:** Next.js 16, React 19, TypeScript
- **Estilos:** Tailwind CSS v4 + CSS custom en `globals.css`
- **Animaciones:** Framer Motion (instalado)
- **Íconos:** Lucide React, React Icons
- **Fuentes:** Manrope (body via --font-manrope), Space Grotesk (display via --font-display)
- **Deploy:** Vercel — usar el MCP `mcp__claude_ai_Vercel__deploy_to_vercel`

## Arquitectura de estilos — IMPORTANTE
El proyecto NO usa clases de Tailwind directamente en JSX. Usa clases CSS custom definidas en `globals.css` con CSS variables en `:root`. Seguir ese patrón.

```css
/* Variables disponibles */
--background: #0c1117    /* navy oscuro */
--surface: #111924       /* superficie */
--surface-strong: #162231
--text: #f4f7fb          /* texto principal */
--muted: #a7b5c7         /* texto secundario */
--line: rgba(167,181,199,0.16) /* bordes sutiles */
--accent: #65d6c3        /* teal */
--accent-strong: #b7ff65 /* verde neón */
--warm: #f0c38f          /* dorado/tan */
```

Fuentes: `var(--font-display)` para títulos, `var(--font-body)` para body.

## Archivos clave
```
mi-portafolio/
├── app/
│   ├── page.tsx                   ← TODO el contenido (datos + JSX)
│   ├── layout.tsx                 ← metadata, fuentes, Navbar + Footer
│   ├── globals.css                ← TODO el CSS custom
│   └── components/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── ProjectSpotlight.tsx   ← componente activo
│       └── ProjectCard.tsx        ← LEGACY, no usar, eliminar
```

## Reglas de desarrollo

### Código
- Nuevos estilos: siempre en `globals.css` como clase custom, no inline Tailwind
- Nuevos componentes: solo si se reusan en 2+ lugares
- `ProjectCard.tsx` está marcado para eliminar (no se usa)
- Framer Motion: usar `motion.*` para animaciones de entrada, `useInView` para scroll triggers
- Antes de cerrar cambios de copy o documentación, correr desde `mi-portafolio/`: `npm run check:text`

### Contenido — reglas estrictas
- **Framing:** Tomás es Desarrollador Full Stack. Experiencia principal = LeveraWeb (actual). Livio = proyecto propio pasado que llegó a MVP. Alinear SIEMPRE al CV. Nunca inflar.
- **Hidrovolt:** ELIMINADO. No mencionar, no incluir.
- **Tono:** Casual y seguro. Sin "busco oportunidades", "disponible para", "demos defendibles", "marca pensada para empleo", "Propuesta de valor", "Posicionamiento".
- **Cambios de texto visible:** antes de editar copy de la página, proponer qué se saca y qué se agrega; el usuario decide.
- **Tildes:** El español sin tildes es error. Siempre: autenticación, documentación, etc.
- **Encoding:** si aparecen `?` en lugar de tildes, NO asumir que es CSS/fuente. Revisar primero los literales en `app/page.tsx`, `app/components/*`, `app/layout.tsx`, `AGENTS.md` y `CLAUDE.md`.
- **LinkedIn:** Agregar a nav y contacto cuando se confirme la URL final.

### Mejora continua del agente
- Documento vivo: `docs/agent-continuous-improvement.md`
- Registrar errores corregidos, causa raíz, prevención y archivos afectados.
- Cuando se edite copy en español, verificar integridad de texto con `npm run check:text` antes de commitear o desplegar.
- Si se toca la arquitectura visual, actualizar esta documentación cuando deje una convención nueva.

### Diseño — prioridad #1
- El diseño debe ser distintivo. No usar efectos genéricos de 2023 (blobs borrosos, particles.js, gradientes de colores saturados random).
- Preferir: composición tipográfica fuerte, screenshots reales de proyectos, micro-interacciones precisas.
- Animaciones: sutiles y con propósito. Nada que distraiga del contenido.
- Mobile first en breakpoints.
- Orden narrativo vigente: mantener Experiencia antes que Proyectos. El usuario denegó mover Proyectos antes de Experiencia.
- Backlog para discutir: posible sección/reflexión sobre IA como diferencial personal; no implementarla sin aprobación de enfoque y texto.

## MCPs disponibles
| MCP | Cuándo usarlo |
|-----|--------------|
| `mcp__claude_ai_Vercel__deploy_to_vercel` | Deploy a producción |
| `mcp__claude_ai_Vercel__list_deployments` | Ver historial de deploys |
| `mcp__claude_ai_Vercel__get_deployment_build_logs` | Debuggear build failures |
| `mcp__claude_ai_Figma__get_design_context` | Si hay diseños en Figma como referencia |
| `mcp__claude_ai_Figma__get_screenshot` | Capturar referencia visual de Figma |

## Secciones actuales del portafolio
1. **Hero** (`#inicio`) — presentación + CTA
2. **Sobre mí** (`#sobre-mi`) — stack + fortalezas
3. **Proyectos** (`#proyectos`) — Integracion + MascotaFeliz
4. **Experiencia** (`#experiencia`) — LeveraWeb (actual) + Livio (proyecto propio) + differentiators
5. ~~**Aprendizajes**~~ — ELIMINAR en próxima iteración
6. **Contacto** (`#contacto`)

## Screenshots pendientes (tomar manualmente)
- [ ] MascotaFeliz — pantalla principal (veterinaria-movil.vercel.app)
- [ ] MascotaFeliz — flujo de reserva/farmacia
- [ ] Integracion — tienda pública (correr Docker local)
- [ ] Integracion — backoffice admin

## Plan de redesign activo
Ver `../plan/portafolio_redesign.md` para el plan completo fase por fase.
