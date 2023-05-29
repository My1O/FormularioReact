import styled from "styled-components"
import Colaborador from "../Colaborador"
const EquipoEstilo = styled.section`
    width: 100%;
    position: relative;
    padding: 32px;
    box-sizing: border-box;
    text-align: center;
    font-size: 32px;
`
const EquipoTexto = styled.h3`
    font-weight: 400;
    color: #212121;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
`
const ColaboradorEstilo = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const ColorInput = styled.input`
    position: absolute;
    top:20px;
    right: 50px;
`

const Equipo = (props) => {
    //Destructuration
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores, eliminarColaborador } = props

    
    return <>
        {
            colaboradores.length > 0 &&
            <EquipoEstilo style={{ backgroundColor: colorSecundario }}>
                <ColorInput
                    type="color"
                    value={colorSecundario}
                    onChange={ (evento) => {
                        console.log(evento.target.value)
                    }}
                />
                <EquipoTexto style={{ borderColor: colorPrimario }}>{titulo}</EquipoTexto>
                <ColaboradorEstilo>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        
                        />)
                    }
                </ColaboradorEstilo>
            </EquipoEstilo>
        }
    </>
}

export default Equipo