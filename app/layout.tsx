import type { Metadata } from "next";
import { Manrope, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomás Escalante — Desarrollador Full Stack",
  description:
    "Portafolio de Tomás Escalante: desarrollador full-stack con foco en web front y back, integración de APIs y gestión de servidores. Próximo a titularse de Ingeniería en Informática (Duoc UC).",
  openGraph: {
    title: "Tomás Escalante — Desarrollador Full Stack",
    description:
      "Desarrollador full-stack: web front y back, integración de APIs, Docker y despliegue. Proyectos con autenticación JWT, Webpay y demos técnicas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
