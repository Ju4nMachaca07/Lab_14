"use client";

import dynamic from "next/dynamic";

// Paso 4: Importamos el componente pesado usando Lazy Loading de forma segura
const DynamicComponent = dynamic(() => import("./LargeComponent"), { 
  ssr: false,
  loading: () => <p>Cargando componente pesado...</p> 
});

export default function ClientHomeWrapper() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Demostración de Lazy Loading:</h2>
      <DynamicComponent />
    </div>
  );
}