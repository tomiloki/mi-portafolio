// app/components/Nabvar.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-zinc-900 text-white p-4">
            <div className=" container mx-auto flex justify-between items-center">
                {/* Tu Nombre (A la izquierda) */}
                <Link href="/" className="text-xl font-bold">
                    Mi Portafolio
                </Link>

                {/* Links (a la derecha) */}
                <div className="flex gap-x-6">
                    <Link href="#inicio" className="hover:text-sky-400 transition-colors">
                        Inicio
                    </Link>
                    
                    {/* CAMBIO AQUÍ */}
                    <Link href="#habilidades-e-intereses" className="hover:text-sky-400 transition-colors">
                        Intereses
                    </Link>
                    {/* FIN DEL CAMBIO */}

                    <Link href="#proyectos" className="hover:text-sky-400 transition-colors">
                        Proyectos
                    </Link>
                </div>
            </div>
        </nav>
    )
}