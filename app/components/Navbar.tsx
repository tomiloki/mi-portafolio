"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;

      // Cerca del tope: siempre visible.
      if (y < 80) {
        setHidden(false);
        lastScrollY.current = y;
        return;
      }

      // Umbral pequeño para evitar parpadeo; solo actualizamos el
      // checkpoint al actuar, así el scroll lento igual acumula.
      if (y > lastScrollY.current + 4) {
        setHidden(true);
        lastScrollY.current = y;
      } else if (y < lastScrollY.current - 4) {
        setHidden(false);
        lastScrollY.current = y;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`site-nav${hidden ? " site-nav--hidden" : ""}`}>
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
