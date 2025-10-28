// app/components/ProjectCard.tsx
import Link from 'next/link';
import { FaGithub, FaPlay } from 'react-icons/fa'; // Iconos para los enlaces

// 1. Definimos los "props" que recibirá el componente
// Usamos TypeScript (que vino con tu instalación) para definir la "forma" de los datos
type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];       // Un array de strings (ej: ['React', 'Node.js'])
  linkRepo?: string;    // '?' significa que es opcional
  linkDeploy?: string;  // '?' significa que es opcional
};

// 2. Creamos el componente
export default function ProjectCard({ title, description, tags, linkRepo, linkDeploy }: ProjectCardProps) {
  return (
    // Tarjeta principal
    <div className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      
      {/* (Opcional) Imagen del proyecto. Por ahora la omitimos para simplicidad */}
      {/* <img src="/ruta/a/la-imagen.jpg" alt={title} className="w-full h-48 object-cover" /> */}
      
      {/* Contenido de texto */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-300 mb-4 flex-grow">{description}</p>

        {/* 3. Mapeo de las "píldoras" de tecnología */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-sky-900 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* 4. Enlaces (Repo y Deploy) */}
        <div className="flex gap-x-4 mt-auto">
          {/* Mostramos el botón de GitHub SOLO si existe linkRepo */}
          {linkRepo && (
            <Link 
              href={linkRepo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
              Código
            </Link>
          )}

          {/* Mostramos el botón de Deploy/Ver SOLO si existe linkDeploy */}
          {linkDeploy && (
            <Link 
              href={linkDeploy} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <FaPlay size={18} />
              Ver Deploy
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}