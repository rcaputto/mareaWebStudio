import ProcesoTrabajoCard from '../Components/ProcesoTrabajoCard'
import DataProceso from '../assets/Data/ProcesoTrabajoData'
import {Container} from 'react-bootstrap'


export default function ProcesoTrabajo() {
    return (
        <>
        <Container fluid>
            <h2 className="copySubTitle subtitleCopy2 tituloProcesoTrabajo">Inicio del proceso Creativo</h2>
            {DataProceso.map((data) => (
                <ProcesoTrabajoCard
                    indice={data.indice}
                    titulo={data.titulo}
                    texto={data.texto}
                />
            ))}
            </Container>

        </>
    )
}