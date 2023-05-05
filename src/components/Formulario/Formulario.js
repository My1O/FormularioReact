import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
const Formulario = () =>{

    const manejarEnvio = (e) => {
        //console.log("Manejar el envio");
        e.preventDefault();
    }
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Registra el formulario para crear colaborador</h2>
            <CampoTexto titulo='Nombre' placeholder="Ingrese Nombre" required/>
            <CampoTexto titulo='Puesto' placeholder="Ingrese Puesto" required/>
            <CampoTexto titulo='Foto' placeholder="Ingrese Foto" required/>
            <ListaOpciones/>
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario