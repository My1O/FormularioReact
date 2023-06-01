
import "./Campo.css"

const Campo = (datoTexto) =>{
   
    const placeholderModificado = `${datoTexto.placeholder}.`

    //Destructuracion

    const {type = "text"} = datoTexto

    console.log(type)
    
    const manejarCambio = (e) =>{
       
        datoTexto.actualizarValor(e.target.value)
    }
    
    return <div className={`campo campo-${type}`}>
        <label>{datoTexto.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={datoTexto.required} 
        value={datoTexto.value}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo