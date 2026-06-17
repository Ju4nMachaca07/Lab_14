import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ClientHomeWrapper from "../app/components/ClientHomeWrapper";

// TAREA: Meta tags optimizados para Home de forma nativa [cite: 85, 86]
export const metadata: Metadata = {
  title: "Inicio | Mi Portal Web Optimizado",
  description: "Aprende sobre optimización SEO y rendimiento avanzado con Next.js.",
  keywords: ["Next.js", "SEO", "optimización web", "tecnología"],
  openGraph: {
    title: "Inicio | Mi Portal Web Optimizado",
    description: "Descubre técnicas avanzadas para mejorar tu web.",
    images: [{ url: "/images/seo-image.png" }],
    type: "website",
  },
};

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Bienvenido a la Página de Inicio</h1>
      <nav style={{ marginBottom: "2rem" }}>
        <Link href="/blog" style={{ marginRight: "1rem" }}>Ir al Blog</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
      
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
      
      {/* Paso 3: Optimización de Imágenes [cite: 57] */}
      <div style={{ marginTop: "2rem" }}>
        <Image 
          src="/images/seo-image.png" 
          width={600} 
          height={300} 
          alt="Imagen optimizada" 
          priority 
        />
      </div>

      {/* Paso 4: Llamamos al contenedor que maneja el Lazy Loading de manera segura */}
      <ClientHomeWrapper />
    </main>
  );
}