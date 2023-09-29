import '../assets/Styles/ProcesoTrabajo.css';
import { Slide } from "react-awesome-reveal";




export default function ProcesoTrabajoCard({ indice, titulo, texto }) {
    return (
        <>

                        
                <div className='contenedorProceso' >
                    <div className='primerProceso'>
                        <h1 className='indice'>{indice}</h1>
                        <div className='copyPrimerProceso'>
                            <h2 className='tituloProceso'>{titulo}</h2>
                            <p className='copyProceso'>{texto}</p>
                        </div>
                    </div>
                </div>
            


        </>
    )
}