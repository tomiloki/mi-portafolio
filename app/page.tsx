// app/page.tsx
import ProjectCard from './components/ProjectCard';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

// Listas para evitar repetición
const SOFT_SKILLS: string[] = [
  'Resolución de Problemas',
  'Documentación Técnica',
  'Comunicación Efectiva',
  'Adaptabilidad y Aprendizaje Rápido',
  'Trabajo en equipo',
];

const INTERESTS: string[] = [
  'Desarrollo Full-Stack (Web)',
  'Machine Learning & IA',
  'Automatización de Procesos',
  'Arquitectura de Software',
];

const LEARNING: string[] = [
  'Arquitecturas RAG para IA',
  'Despliegue y Contenedores (Docker)',
  'Bases de datos vectoriales',
  'Testing (Pruebas unitarias)',
];

export default function Home() {
  return (
    <main>
      
      {/* ================================== */}
      {/* Sección HERO (SOBRE MÍ) - ARREGLADA */}
      {/* ================================== */}
      <section 
        id="sobre-mi" 
        // CAMBIO 1: Volvemos a 'min-h-screen' y usamos el grisáceo 'bg-zinc-800'
        className="min-h-screen bg-zinc-800 text-white flex flex-col justify-center items-center text-center px-4"
      >
        
        {/* CAMBIO 2: Título más pequeño */}
        <h1 className="text-5xl md:text-6xl font-bold mb-3">
          Tomás Escalante
        </h1>
        
        {/* CAMBIO 3: Subtítulo más pequeño y menos margen */}
        <h2 className="text-xl md:text-2xl font-light text-sky-400 mb-5">
          Estudiante de Ingeniería en Informática y Ciencia de Datos
        </h2>

        {/* CAMBIO 4: Párrafos más pequeños y menos margen */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-3">
          Soy un desarrollador en formación apasionado por la tecnología y la resolución de problemas. Me gusta la programación, como la idea de armar un "puzzle" con el código, y disfruto tanto del frontend como del backend.
        </p>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Tercer año de Ingeniería Informática en DuocUC, actualmente especializándome en Ciencia de Datos para modelar e integrar Inteligencia Artificial en mis proyectos.
        </p>
        
        {/* CAMBIO 5: Menos margen sobre los íconos */}
        <nav className="flex justify-center space-x-6 mt-6" aria-label="Redes sociales">
          <a 
            href="https://github.com/tu-usuario" // <-- corrige 'httpsg'
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-7 w-7" />
          </a>
          <a 
            href="https://linkedin.com/in/tu-usuario" // <-- corrige 'httpsg'
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-7 w-7" />
          </a>
        </nav>

        {/* CAMBIO 6: Menos margen sobre el botón */}
        <a 
          href="#proyectos" 
          className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Ver mis Proyectos
        </a>
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
              
              {/* === CÓDIGO ACTUALIZADO AQUÍ === */}
              <ul className="space-y-3 text-zinc-300">
                {SOFT_SKILLS.map(item => (
                  <li key={item} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-sky-400 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* === FIN DE LA ACTUALIZACIÓN === */}
            </div>

            {/* Columna 2: Intereses Principales */}
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
              {/* <FaRocket className="text-4xl text-sky-400 mb-4" /> */}
              <h3 className="text-2xl font-bold mb-4">Intereses Principales</h3>
              <p className="text-zinc-300 mb-4">
                Me apasiona todo lo que tiene que ver con el desarrollo de software y la inteligencia artificial.
              </p>
              
              {/* === CÓDIGO ACTUALIZADO AQUÍ === */}
              <ul className="space-y-3 text-zinc-300">
                {INTERESTS.map(item => (
                  <li key={item} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-sky-400 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* === FIN DE LA ACTUALIZACIÓN === */}
            </div>

            {/* Columna 3: Aprendiendo Actualmente */}
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
              {/* <FaBook className="text-4xl text-sky-400 mb-4" /> */}
              <h3 className="text-2xl font-bold mb-4">Aprendiendo</h3>
              <p className="text-zinc-300 mb-4">
                Siempre estoy buscando expandir mi stack. Actualmente estoy enfocado en:
              </p>
              
              {/* === CÓDIGO ACTUALIZADO AQUÍ === */}
              <ul className="space-y-3 text-zinc-300">
                {LEARNING.map(item => (
                  <li key={item} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-sky-400 mr-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* === FIN DE LA ACTUALIZACIÓN === */}
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

      {/* --- SECCIÓN DE CONTACTO --- */}

      <section id="contacto" className="bg-zinc-800 text-white py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hablemos
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Actualmente estoy abierto a nuevas oportunidades y colaboraciones.
            Si tienes un proyecto en mente o simplemente quieres conectar, 
            no dudes en enviarme un mensaje.
          </p>

          {/* Botón de email con correo e ícono */}
          <a 
            href="mailto:tomiescalantte@gmail.com"
            className="inline-flex items-center justify-center bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <Mail className="h-5 w-5 mr-2" />
            Enviar un Correo
          </a>

          {/* Iconos sociales con enlaces reales */}
          <nav className="flex justify-center space-x-8 mt-12" aria-label="Redes sociales">
            <a 
              href="https://github.com/tu-usuario"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://linkedin.com/in/tu-usuario"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </nav>

        </div>
      </section>

{/* --- FIN SECCIÓN DE CONTACTO --- */}

      {/* --- FIN SECCIÓN DE CONTACTO --- */}

      {/* Aquí vendría tu <Footer /> */}

    </main>
  );
}