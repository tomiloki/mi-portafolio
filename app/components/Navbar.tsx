import Link from "next/link";

const NAV_ITEMS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="#inicio" className="brand-mark">
          <span className="brand-mark-dot" />
          <span>
            Tomás Escalante
            <small>Desarrollador Full Stack</small>
          </span>
        </Link>

        <div className="site-nav-links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/tomas-escalante-o/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-subtle"
          >
            LinkedIn
          </a>
        </div>

        <a
          href="https://github.com/tomiloki"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
