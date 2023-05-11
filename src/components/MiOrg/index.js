import './MiOrg.css'
//import { useState } from 'react';

const MyOrg = (props) =>{
    /*
    const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick  = () =>{
        console.log("Mostrar/Ocultar Elemento", mostrar);
        actualizarMostrar(!mostrar)
    }
    */
    return <section className="orgSection">
        <h3 className='title'>Mi organizacion</h3>
        <img src="/img/plus.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MyOrg