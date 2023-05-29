import { useState } from 'react';
import './App.css';
import Header from './components/HeaderC/Cabecera';
import Formulario from './components/Formulario/Formulario.js';
import MyOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';


function App() {

  const [mostrarFormulario, actualizarFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      nombre: "Camilo Castro",
      puesto: "Instructor",
      foto: "https://github.com/harlandlohora.png",
      equipo: "Front-End"
    },
    {
      nombre: "Madison Castro",
      puesto: "Team Lead",
      foto: "https://github.com/genesysaluralatam.png",
      equipo: "Front-End"
    },
    {
      nombre: "Leilani Castro",
      puesto: "CEO",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      equipo: "UX y Diseño"
    },
    {
      nombre: "Matias Castro",
      puesto: "Programador",
      foto: "https://github.com/christianpva.png",
      equipo: "Programacion"
    },
    {
      nombre: "Sompopin Castro",
      puesto: "Manager",
      foto: "https://github.com/christianpva.png",
      equipo: "Innovacion y gestion"
    }
  ])

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
  const actualizarEquipo = (color, titulo) =>{
      console.log(color, titulo)
  }

  //Eliminar colaborador
  const eliminarColaborador = () =>{
    console.log(eliminarColaborador)
  }

  // Lista de equipos

  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",

    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",

    },
    {
      titulo: "Data-Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",

    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",

    },
    {
      titulo: "UX y Design",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",

    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",

    },
    {
      titulo: "Innovacion y gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",

    }
  ]
  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <h1>Form hidden on purpose</h1>*/}

       {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
      />}

      <MyOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarEquipo= {actualizarEquipo}
        />)
      }
      <Footer/>
    </div>
  );
}

export default App
