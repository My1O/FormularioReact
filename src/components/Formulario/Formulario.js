import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo} = props

    //Manejar el compartamiento onclick por defecto
    const manejarEnvio = (e) => {
        //console.log("Manejar el envio");
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    //Handler: ONclick behavior by default
    const ManejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo( {titulo, colorPrimario: color} )
        //se crear el equipo con los valores de titulo y color. titulo: titulo = no longer needed
        //valores del use State
        
    }

    //se agrego segundo formulario para crear equipo
    //boton registrar equipo agregado
    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Registra el formulario para crear colaborador</h2>
            <CampoTexto
                titulo='Nombre'
                placeholder="Ingrese Nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo='Puesto'
                placeholder="Ingrese Puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto
                titulo='Foto'
                placeholder="Ingrese Foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear" />
        </form>
        
        <form onSubmit={ManejarNuevoEquipo}>
            <h2>Registra el formulario para crear el equipo</h2>
            <CampoTexto
                titulo='Titulo'
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto
                titulo='Color'
                placeholder="Ingresar color en Hexadecimal"
                required
                valor={color}
                actualizarValor={actualizarColor}
            />
            <Boton texto="Registrar Equipo">
            </Boton>
        </form>
    </section>
}

export default Formulario