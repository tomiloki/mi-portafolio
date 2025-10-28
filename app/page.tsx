// app/page.tsx
import Link from 'next/link'; // Importamos Link para el botón
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main>
      
      {/* ================== */}
      {/* Sección Hero (Sobre Mí) - VERSIÓN ACTUALIZADA */}
      {/* ================== */}
      <section 
        id="sobre-mi" 
        className="min-h-screen flex items-center justify-center bg-zinc-900 text-white text-center p-4"
      >
        <div className="max-w-3xl"> {/* Añadimos un max-width para que el texto no sea tan ancho */}

          {/* Tu foto (opcional, la dejaremos comentada) */}
          {/* <Image src="/mi-foto.jpg" alt="Tomás Escalante" width={150} height={150} className="rounded-full mx-auto mb-6" /> */}

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Tomás Escalante
          </h1>
          <p className="text-xl md:text-2xl text-sky-400 mb-8">
            Estudiante de Ingeniería en Informática & Data Science
          </p>
          
          {/* ================== */}
          {/* NUEVO PÁRRAFO */}
          {/* ================== */}
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
            Soy un desarrollador en formación apasionado por la tecnología y la resolución de problemas. 
            Me gusta la programación, como la idea de armar un "puzzle" con el código y disfruto tanto del frontend como del backend.
            tercer año de Ingeniería Informática en DuocUC.
            Actualmente estoy especializándome en Ciencia de Datos para modelar e integrar Inteligencia Artificial en mis proyectos.
          </p>

          {/* ================== */}
          {/* NUEVOS ENLACES SOCIALES */}
          {/* ================== */}
          <div className="flex justify-center gap-x-6 mb-10">
            <Link 
              href="https://github.com/tomiloki" // <-- ¡Tu GitHub!
              target="_blank" // Para que abra en una pestaña nueva
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub de Tomás"
            >
              <FaGithub size={32} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/tu-usuario/" // <-- ¡Crea tu LinkedIn y ponlo aquí!
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-sky-500 transition-colors"
              aria-label="LinkedIn de Tomás"
            >
              <FaLinkedin size={32} />
            </Link>
          </div>
          
          {/* Botón CTA (se mantiene) */}
          <Link 
            href="#proyectos"
            className="bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors duration-300"
          >
            Ver mis Proyectos
          </Link>
        </div>
      </section>

      {/* ================================== */}
      {/* Sección Habilidades e Intereses (NUEVA VERSIÓN) */}
      {/* ================================== */}
      <section 
        id="habilidades-e-intereses" // <-- ID actualizado
        className="min-h-screen bg-zinc-800 text-white p-8 md:p-16" // Fondo un poco más claro
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Habilidades e Intereses
          </h2>
          
          {/* Usamos un grid de 3 columnas para organizar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Columna 1: Habilidades Blandas */}
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
              {/* <FaBrain className="text-4xl text-sky-400 mb-4" /> */}
              <h3 className="text-2xl font-bold mb-4">Habilidades Blandas</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Resolución de Problemas</li>
                <li>Documentación Técnica</li>
                <li>Comunicación Efectiva</li>
                <li>Adaptabilidad y Aprendizaje Rápido</li>
                <li>Trabajo en equipo</li>
              </ul>
            </div>

            {/* Columna 2: Intereses Principales */}
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
              {/* <FaRocket className="text-4xl text-sky-400 mb-4" /> */}
              <h3 className="text-2xl font-bold mb-4">Intereses Principales</h3>
              <p className="text-zinc-300 mb-2">
                Me apasiona la intersección entre el desarrollo de software y la inteligencia artificial.
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Desarrollo Full-Stack (Web)</li>
                <li>Machine Learning & IA</li>
                <li>Automatización de Procesos</li>
                <li>Arquitectura de Software</li>
              </ul>
            </div>

            {/* Columna 3: Aprendiendo Actualmente */}
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
              {/* <FaBook className="text-4xl text-sky-400 mb-4" /> */}
              <h3 className="text-2xl font-bold mb-4">Aprendiendo</h3>
              <p className="text-zinc-300 mb-2">
                Siempre estoy buscando expandir mi stack. Actualmente estoy enfocado en:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li>Arquitecturas RAG para IA</li>
                <li>Despliegue y Contenedores (Docker)</li>
                <li>Bases de datos vectoriales</li>
                <li>Testing (Pruebas unitarias)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================== */}
      {/* Sección Proyectos (VERSIÓN ACTUALIZADA) */}
      {/* ================== */}
      <section id="proyectos" className="min-h-screen bg-zinc-900 p-8 md:p-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Proyectos
          </h2>
          
          {/* Grilla de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Proyecto 1: Este mismo Portafolio */}
            <ProjectCard
              title="Portafolio Personal"
              description="Mi portafolio web personal donde muestro mis habilidades y proyectos. ¡El mismo que estás viendo ahora!"
              tags={['Next.js', 'React', 'Tailwind CSS', 'TypeScript']}
              linkRepo="https://github.com/tomiloki/mi-portafolio"
              linkDeploy="https://mi-portafolio-tomiloki.vercel.app/" // <-- ¡TU FUTURA URL DE VERCEL!
            />

            {/* Proyecto 2: (Placeholder) */}
            <ProjectCard
              title="Próximo Proyecto (Ej: CRUD)"
              description="Un gestor de tareas o blog con autenticación, API REST y base de datos."
              tags={['React', 'Node.js', 'PostgreSQL', 'JWT']}
              linkRepo="#" // Pones '#' si aún no tienes el link
            />

            {/* Proyecto 3: (Placeholder) */}
            <ProjectCard
              title="Próximo Proyecto (Ej: IA)"
              description="Un asistente de IA o un modelo de predicción servido a través de una API."
              tags={['Python', 'FastAPI', 'Scikit-learn', 'RAG']}
              linkRepo="#"
            />

          </div>
        </div>
      </section>

    </main>
  );
}