import { Inter } from "next/font/google";
import "./globals.css";

// Configuración de la fuente optimizada de Google
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Opcional, por si usas Tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Aplicamos la clase de la fuente al body para que afecte a toda la app */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}