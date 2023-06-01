import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    //agregamos fav para validar y mostrar
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, gustar} = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={ () => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
            {/* https://github.com/harlandlohora.png */}
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            
            {fav ? <AiFillHeart color="red" onClick={ ()=> gustar(id)}/> : <AiOutlineHeart onClick={ ()=> gustar(id)}/>}
            
            
        </div>
        
    </div>
}
// agregamos fav to a ternary operator to show true or false status
export default Colaborador