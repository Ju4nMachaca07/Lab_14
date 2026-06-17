import { NextResponse } from 'next/server';

const BASE_URL = "https://lab-14-hol7.onrender.com/";

export async function GET() {
  // TAREA: Simulación de datos dinámicos provenientes de una base de datos o CMS (Requisito)
  const listadoDeArticulosDB = [
    { id: "1", slug: "optimizacion-nextjs-2026" },
    { id: "2", slug: "guia-definitiva-seo-frontend" },
    { id: "3", slug: "mejorar-core-web-vitals" }
  ];

  // 1. Definimos las rutas estáticas base de nuestra aplicación
  const rutasEstaticas = ["/", "/blog", "/contacto"];
  
  // 2. Mapeamos los datos dinámicos del CMS para generar rutas completas de artículos
  const rutasDinamicas = listadoDeArticulosDB.map(art => `/blog/${art.slug}`);
  
  // 3. Combinamos ambos arreglos en una sola lista única de texto
  const todasLasUrls = [...rutasEstaticas, ...rutasDinamicas];
  
  // 4. Construimos el cuerpo del documento estrictamente en formato XML (No HTML)
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasUrls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
  </urlset>`;

  // 5. Enviamos la respuesta configurando los encabezados como 'text/xml'
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}