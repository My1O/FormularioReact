import { useState } from 'react';
import './App.css';
import Header from './components/HeaderC/Cabecera';
import Formulario from './components/Formulario/Formulario.js';
import MyOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid';


function App() {

  const [mostrarFormulario, actualizarFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      /* Agregamos fav para validar true or false and if so, show the right icon */
      id: uuid(),
      nombre: "Camilo Castro",
      puesto: "Instructor",
      foto: "https://github.com/harlandlohora.png",
      equipo: "Front-End",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Madison Castro",
      puesto: "Team Lead",
      foto: "https://github.com/genesysaluralatam.png",
      equipo: "Front-End",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Leilani Castro",
      puesto: "CEO",
      foto: "https://github.com/genesysaluralatam.png",
      equipo: "Programacion",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Matias Castro",
      puesto: "Programador",
      foto: "https://github.com/christianpva.png",
      equipo: "Programacion",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Sompopin Castro",
      puesto: "Manager",
      foto: "https://github.com/christianpva.png",
      equipo: "Innovacion y gestion",
      fav: false
    }
  ])

  const [equipos, actualizarEquipos] = useState(
    [
      {
        //agregamos uuid para cada uno de los equipos, genera un id unico
        id: uuid(),
        titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
  
      },
      {
        // genera id unico con libreria uuid -v4
        id: uuid(),
        titulo: "Front-End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
  
      },
      {
        // genera id unico con libreria uuid -v4
        id: uuid(),
        titulo: "Data-Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2",
  
      },
      {
        // genera id unico con libreria uuid -v4
        id: uuid(),
        titulo: "DevOps",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8",
  
      },
      {
        // genera id unico con libreria uuid -v4
        id: uuid(),
        titulo: "UX y Design",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5",
  
      },
      {
        // genera id unico con libreria uuid -v4
        id: uuid(),
        titulo: "Movil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9",
  
      },
      {
        // genera id unico con libreria uuid -v4
        id: uuid(),
        titulo: "Innovacion y gestion",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF",
  
      }
    ]
  )

  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    // spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //actualizar Color
  const actualizarColor = (color, id) =>{
      console.log(color, id)
      const equiposActualizados = equipos.map((equipo) =>{
          if(equipo.id === id){
            equipo.colorPrimario = color
          }
          return equipo
      })
      //asignar a Equipo el nuevo Equipo obtenido
      actualizarEquipos(equiposActualizados)
  }

  //Eliminar colaborador
  //Filtrar por props id el identificador del colaborador
  const eliminarColaborador = (id) =>{
    console.log(eliminarColaborador, id)
    //1. filter - metodo de los arreglos que recibe funcion
    //2. recibe colaboradores como parametro
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id)
    //agregamos la funcion actualizarColaboradores y agregamos el nuevo arreglo optinido anteriormente
    actualizarColaboradores(nuevosColaboradores)
  }

  //funcion Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    //crea un nuevo Item apartir del useState actual, lo agrega y genera un ID unico
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
    console.log(nuevoEquipo )
  }

  // funcion para like de estados en colaboradores
  const gustar = (id)=>{
    console.log(id)
    const colaboradoresActualizados = colaboradores.map( (colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
      actualizarColaboradores(colaboradoresActualizados)
  }

  // Lista de equipos
  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <h1>Form hidden on purpose</h1>*/}

       {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          //agregando props crearEquipo para guardar input en los texbox
          crearEquipo= {crearEquipo}
          
      />}

      <MyOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor= {actualizarColor}
        gustar={gustar}
        />)
      }
      <Footer/>
    </div>
  );
}

export default App
