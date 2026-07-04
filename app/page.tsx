import Image from "next/image";
import ProjectSpotlight from "./components/ProjectSpotlight";
import { AnimatedSection } from "./components/AnimatedSection";

const CORE_STRENGTHS = [
  "Frontend y backend web, con integración de APIs.",
  "Servidores con Docker, migraciones y backups.",
  "Orden, documentación y aprendizaje rápido.",
];

const EXPERIENCE = [
  {
    role: "Desarrollador Full Stack — LeveraWeb",
    period: "Mayo 2026 — actualidad",
    points: [
      "Desarrollo y mantención de sitios web en producción, principalmente sobre WordPress.",
      "Gestión de servidores con Docker: despliegue, mantención y estabilidad de los entornos.",
      "Migraciones y políticas de backup, incluyendo respaldos en Cloudflare R2.",
    ],
    tech: ["WordPress", "Docker", "Cloudflare R2", "Git"],
  },
  {
    role: "Desarrollador — Livio (proyecto propio)",
    period: "2025 · SaaS logístico B2B, etapa MVP",
    points: [
      "Programé la app de un SaaS logístico B2B: backend en Laravel con autenticación y multi-tenant.",
      "Alcanzó etapa MVP pero no llegó a producción; me sirvió para construir una aplicación de cero y tomar decisiones técnicas.",
    ],
    tech: ["Laravel", "PHP", "JWT", "REST"],
  },
];

export default function Home() {
  return (
    <main className="portfolio-shell">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <div className="hero-copy hero-copy-enter">
            <p className="hero-kicker">Tomás Escalante · Full Stack · Ing. Informática</p>
            <h1>
              Desarrollo aplicaciones web,
              <br />front y back.
            </h1>
            <p className="hero-summary">
              Trabajo sobre sitios en producción y me manejo en el ciclo completo:
              web front y back, integración de APIs y gestión de servidores con
              Docker, migraciones y backups.
            </p>

            <div className="hero-actions">
              <a href="#proyectos" className="button-primary">
                Ver proyectos
              </a>
              <a
                href="https://github.com/tomiloki"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                GitHub
              </a>
            </div>

            <p className="hero-meta">
              Santiago, Chile · Ingeniería en Informática (Duoc UC)
            </p>
          </div>

          <aside className="hero-panel">
            <div className="spec-card content-card">
              <div className="spec-row">
                <span className="spec-k">rol</span>
                <span className="spec-v">Desarrollador Full Stack</span>
              </div>
              <div className="spec-row">
                <span className="spec-k">base</span>
                <span className="spec-v">Santiago, Chile</span>
              </div>
              <div className="spec-row">
                <span className="spec-k">estudia</span>
                <span className="spec-v">Ing. Informática · Duoc UC</span>
              </div>
              <div className="spec-sep" />
              <div className="spec-row">
                <span className="spec-k">trabajo</span>
                <span className="spec-v">LeveraWeb · 2026—</span>
              </div>
              <div className="spec-row">
                <span className="spec-k">foco</span>
                <span className="spec-v">backend · APIs · servidores</span>
              </div>
              <div className="spec-row">
                <span className="spec-k">stack</span>
                <span className="spec-v">docker · laravel · django · react · postgres</span>
              </div>
              <span className="spec-caret" aria-hidden="true" />
            </div>
          </aside>
        </div>
      </section>

      {/* ── SOBRE MÍ ─────────────────────────────────────── */}
      <section id="sobre-mi" className="section-block">
        <AnimatedSection>
          <div className="split-layout split-layout--about">
            <div className="section-copy-column">
              <div className="section-heading section-heading--compact">
                <p className="section-kicker">Sobre mí</p>
                <h2>Perfil y trabajo actual.</h2>
              </div>

              <article className="about-story copy-stack">
                <p>
                  Estudio Ingeniería en Informática y trabajo como desarrollador
                  full-stack. Me interesa entender el sistema completo: datos,
                  backend, frontend y entorno donde corre.
                </p>
                <p>
                  Hoy trabajo en LeveraWeb con sitios en producción, servidores
                  Docker, migraciones y backups. Antes construí Livio, un SaaS
                  logístico B2B propio que llegó a etapa MVP.
                </p>
                <div className="statement-box content-card">
                  <strong>
                    Cuido el orden del código, la documentación y la trazabilidad de
                    las decisiones.
                  </strong>
                </div>
              </article>
            </div>

            <aside className="about-card content-card">
              <Image
                src="/foto.png"
                alt="Tomás Escalante"
                width={380}
                height={380}
                className="about-photo"
                priority
              />
              <div className="about-identity">
                <p className="id-name">Tomás Escalante</p>
                <p className="id-meta">Full Stack · Santiago, Chile</p>
              </div>
              <div>
                <p className="list-title">Fortalezas</p>
                <ul className="bullet-list">
                  {CORE_STRENGTHS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </AnimatedSection>
      </section>

      {/* ── EXPERIENCIA ──────────────────────────────────── */}
      <section id="experiencia" className="section-block">
        <AnimatedSection>
          <div className="section-heading">
            <p className="section-kicker">Experiencia</p>
            <h2>Dónde trabajo y qué hice.</h2>
          </div>

          <div className="detail-grid">
            {EXPERIENCE.map((item) => (
              <article key={item.role} className="detail-card content-card">
                <h3>{item.role}</h3>
                <p className="detail-period">{item.period}</p>
                <ul className="bullet-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chip-cloud">
                  {item.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── PROYECTOS ────────────────────────────────────── */}
      <section id="proyectos" className="section-block">
        <AnimatedSection>
          <div className="section-heading">
            <p className="section-kicker">Proyectos</p>
            <h2>Dos proyectos full-stack que construí.</h2>
            <p className="section-note">
              Proyectos desarrollados durante mi formación. Son funcionales y
              demuestran el stack de punta a punta, pero no están en producción.
            </p>
          </div>

          <div className="project-stack">
            <ProjectSpotlight
              imageUrl="/screenshots/integracion-home.png"
              title="E-commerce Automotriz"
              tagline="E-commerce automotriz full-stack: catálogo B2C, canal mayorista B2B y panel de administración."
              status="Demo local (Docker)"
              repoUrl="https://github.com/tomiloki/Integracion"
              stack={["Django", "DRF", "PostgreSQL", "React", "Docker", "JWT", "Webpay"]}
              highlights={[
                "Auth JWT con roles: cliente, distribuidor y admin.",
                "Flujo carrito → orden → pago con Webpay (sandbox).",
                "Backoffice de productos, órdenes, pagos y usuarios.",
              ]}
            />

            <ProjectSpotlight
              imageUrl="/screenshots/mascotafeliz-home.png"
              title="MascotaFeliz"
              tagline="Plataforma veterinaria full-stack: reserva de horas, farmacia online y pagos, con demo pública."
              status="Demo en vivo"
              repoUrl="https://github.com/tomiloki/VeterinariaMovil"
              liveUrl="https://veterinaria-movil.vercel.app"
              stack={["Django", "DRF", "React", "Vite", "Render", "Vercel", "Webpay"]}
              highlights={[
                "Reserva de horas y perfiles de mascotas.",
                "Farmacia online con catálogo, carrito y pagos.",
                "Frontend en Vercel + backend en Render.",
              ]}
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────── */}
      <section id="contacto" className="section-block">
        <AnimatedSection>
          <div className="split-layout split-layout--contact">
            <div className="section-copy-column contact-copy">
              <div className="section-heading section-heading--compact">
                <p className="section-kicker">Contacto</p>
                <h2>Canales de contacto.</h2>
              </div>

              <p>
                Email, GitHub y LinkedIn. El código y la demo pública están
                disponibles para revisión.
              </p>
              <div className="contact-links">
                <a href="mailto:tomiescalantte@gmail.com" className="button-primary">
                  Escribirme
                </a>
                <a
                  href="https://github.com/tomiloki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/tomas-escalante-o/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="contact-panel content-card">
              <div>
                <span>Email</span>
                <strong>tomiescalantte@gmail.com</strong>
              </div>
              <div>
                <span>GitHub</span>
                <strong>github.com/tomiloki</strong>
              </div>
              <div>
                <span>LinkedIn</span>
                <strong>linkedin.com/in/tomas-escalante-o</strong>
              </div>
              <div>
                <span>Demo</span>
                <strong>veterinaria-movil.vercel.app</strong>
              </div>
            </aside>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
