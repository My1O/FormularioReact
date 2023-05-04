import './Formulario.css'
import CampoTexto from '../CampoTexto'
const Formulario = () =>{
    return <section className='formulario'>
        <form>
            <h2>Registra el formulario para crear colaborador</h2>
            <CampoTexto/>
            <CampoTexto/>
            <CampoTexto/>
        </form>
    </section>
}

export default Formulario