import { useState } from 'react';
import './App.css';
import Header from './components/HeaderC/Cabecera';
import Formulario from './components/Formulario/Formulario.js';
import MyOrg from './components/MiOrg';


function App() {

  const [mostrarFormulario, actualizarFormulario] = useState(true)

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <h1>Form hidden on purpose</h1>*/}
      {mostrarFormulario && <Formulario/>}
      <MyOrg cambiarMostrar = {cambiarMostrar} />
      
    </div>
  );
}

export default App
