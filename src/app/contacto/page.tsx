import { Metadata } from "next";
import Link from "next/link";

// Requisito: Meta tags optimizados para Contacto [cite: 85, 86]
export const metadata: Metadata = {
  title: "Contacto | Desarrolladores Web Expertos",
  description: "Ponte en contacto con nuestro equipo de desarrollo para optimizar tu aplicación web.",
  openGraph: {
    title: "Contacto | Desarrolladores Web Expertos",
    description: "Comunícate con nosotros y lleva tu SEO al siguiente nivel.",
  }
};

export default function ContactoPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <Link href="/">← Volver al Inicio</Link>
      <h1>Página de Contacto</h1>
      <p>Envíanos un correo electrónico a: <strong>contacto@mi-sitio.com</strong></p>
    </main>
  );
}