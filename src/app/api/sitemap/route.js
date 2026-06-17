import { NextResponse } from 'next/server';

const BASE_URL = "https://mi-sitio.com";

export async function GET() {
  // Simulación de datos dinámicos provenientes de una base de datos o CMS 
  const listadoDeArticulosDB = [
    { id: "1", slug: "optimizacion-nextjs-2026" },
    { id: "2", slug: "guia-definitiva-seo-frontend" },
    { id: "3", slug: "mejorar-core-web-vitals" }
  ];

  // Rutas estáticas de la aplicación [cite: 83, 91]
  const rutasEstaticas = ["/", "/blog", "/contacto"];
  
  // Mapeo y generación de rutas dinámicas basadas en la base de datos simulada 
  const rutasDinamicas = listadoDeArticulosDB.map(art => `/blog/${art.slug}`);
  
  // Combinamos ambos arreglos
  const todasLasUrls = [...rutasEstaticas, ...rutasDinamicas];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasUrls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}