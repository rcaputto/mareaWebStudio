import { Container } from 'react-bootstrap'
import '../assets/Styles/ServiciosCard.css'
import NavBarNewLink from '../Components/NavBarNewLink'
import FooterWithLogo from '../Pages/FooterWithLogo'
import ButtonContacto from './ButtonContacto'
import ScrollButton from './ScrollButton'
import BurbujaWhatsapp from './BurbujaWhatsapp'

export default function ServiciosCard ({id, imagen1, imagen2, titulo, subtitulo, descripcion, parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, cierre, item1, item2, item3, item4, item5}){
    return(
        <>
        <NavBarNewLink/>
        <div className="serviciosPage" id='inicio'>
        <div className="contentServicios">
        <h1 className='tituloServicios'>{titulo}</h1>
        </div>
        </div>
        <BurbujaWhatsapp/>
        <article className='serviciosContainer'>
            <h2>{subtitulo}</h2>
            <article className = 'parteI'>
            <div className='articleText'>
            <p>{descripcion} </p>
            <p id='parrafo1'>{item1} </p>
            <p>{parrafo1}</p>
            <p id='parrafo1'>{item2} </p>
            <p>{parrafo2} </p>
            <p id='parrafo1'>{item3} </p>
            <p>{parrafo3} </p>
            </div>
            <img className='imagenPrincipal' src={imagen1} alt="img"/>
            </article>
            <p id='parrafo1'>{item4} </p>
            <p>{parrafo4} </p>
            <img className='imagenSecundaria' src={imagen2} alt="img"/>
            <p id='parrafo1'>{item5} </p>
            <p>{parrafo5} </p>
            <p>{cierre} </p>
            </article>
            <ButtonContacto/>
            <ScrollButton/>
            <FooterWithLogo/>
        </>
    )
}