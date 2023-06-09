import styled from "styled-components"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

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
    //80% - add ID as. Search by ID
    const { colorPrimario, titulo , id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, gustar} = props

    
    return <>
        {
            colaboradores.length > 0 &&
            <EquipoEstilo style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
                
                <ColorInput
                    type="color"
                    value={colorPrimario}
                    onChange={ (evento) => {
                        //buscamos por ID
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <EquipoTexto style={{ borderColor: hexToRgba(colorPrimario, 0.6) }}>{titulo}</EquipoTexto>
                <ColaboradorEstilo>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        gustar={gustar}
                        //agregamos props gustar en los colaboradores
                        />)
                    }
                </ColaboradorEstilo>
            </EquipoEstilo>
        }
    </>
}

export default Equipo