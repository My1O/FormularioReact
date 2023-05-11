
import "./CampoTexto.css"

const CampoTexto = (datoTexto) =>{
   
    const placeholderModificado = `${datoTexto.placeholder}.`
    
    const manejarCambio = (e) =>{
       
        datoTexto.actualizarValor(e.target.value)
    }
    
    return <div className="campo-texto">
        <label>{datoTexto.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={datoTexto.required} 
        value={datoTexto.value}
        onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto