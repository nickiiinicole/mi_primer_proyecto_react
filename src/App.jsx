
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const manejarCambio = (event) => (setNombre(event.target.value)); 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡HOLA CON REACT!</h1>
      <input type="text" placeholder='Escribe tu nombre' value={nombre} onChange={manejarCambio}/>
      <h2>{nombre ? `Hola, ${nombre} !` : 'Escribí tu nombre arriba'}</h2>
    </div>
  );
}
export default App;
