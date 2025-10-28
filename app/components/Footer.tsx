// app/components/Footer.tsx
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 p-8 text-center">
      <div className="flex justify-center gap-x-6 mb-4">
        <Link 
          href="https://github.com/tomiloki" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </Link>
        <Link 
          href="https://www.linkedin.com/in/tu-usuario/" // <-- ¡Recuerda cambiar esto!
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition-colors" // <-- Aquí está nuestro color de acento
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Tomás Escalante. Todos los derechos reservados.</p>
      <p className="text-sm mt-2">
        Hecho con <span className="text-sky-400">Next.js</span> y <span className="text-sky-400">Tailwind CSS</span>
      </p>
    </footer>
  );
}