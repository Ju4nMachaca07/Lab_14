export default function LargeComponent() {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#000000', borderRadius: '8px', marginTop: '1rem' }}>
      <h3>¡Hola! Soy un componente cargado con Lazy Loading</h3>
      <p>Fui descargado por el navegador solo cuando la página principal me requirió.</p>
    </div>
  );
}