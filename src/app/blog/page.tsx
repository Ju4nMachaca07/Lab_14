import { Metadata } from "next";
import Link from "next/link";

// Requisito: Meta tags optimizados para Blog [cite: 85, 86]
export const metadata: Metadata = {
  title: "Blog de Optimización y SEO | Artículos Técnicos",
  description: "Lee los últimos artículos sobre Core Web Vitals, indexación y rendimiento frontend.",
  keywords: ["Blog SEO", "Core Web Vitals", "Posicionamiento Web"],
  openGraph: {
    title: "Blog de Optimización y SEO",
    description: "Artículos técnicos de calidad sobre rendimiento web.",
    type: "article",
  }
};

export default function BlogPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/">← Volver al Inicio</Link>
      <h1>Nuestro Blog Tecnológico</h1>
      <article style={{ marginTop: "1rem" }}>
        <h3>Artículo 1: ¿Qué es el SEO Técnico?</h3>
        <p>El SEO técnico asegura que los motores de búsqueda puedan rastrear e indexar tu sitio web de manera eficiente...</p>
      </article>
    </main>
  );
}