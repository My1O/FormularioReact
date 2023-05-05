import "./ListaOpciones.css"

const equipos = [
    "Programacion",
    "Front-End",
    "Data-Science",
    "DevOps",
    "UX y Design",
    "Movil",
    "Innovacion y gestion"
]
const ListaOpciones = () =>{
    return <div className="lista-opcion">
        <label>Equipos</label>
        <select>
        {equipos.map( (equipo, index) => <option key={index}>{equipo}</option>
        )}
        </select>
    </div>
}

export default ListaOpciones