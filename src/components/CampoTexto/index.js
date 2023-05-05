import "./CampoTexto.css"

const CampoTexto = (datoTexto) =>{
    const placeholderModificado = `${datoTexto.placeholder}...`
    return <div className="campo-texto">
        <label>{datoTexto.titulo}</label>
        <input placeholder={placeholderModificado} required={datoTexto.required}/>
    </div>
}

export default CampoTexto