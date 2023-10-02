import { Container } from 'react-bootstrap'
import '../assets/Styles/ServiciosCard.css'
import NavBarNewLink from '../Components/NavBarNewLink'
import FooterWithLogo from '../Pages/FooterWithLogo'

export default function ServiciosCard ({id, imagen1, imagen2, titulo, subtitulo, descripcion, parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, cierre}){
    return(
        <>
        <NavBarNewLink/>
        <Container className='serviciosContainer'>
        <h1 className='tituloServicios'>{titulo}</h1>
        <h2>{subtitulo}</h2>
            <img className='imagenPrincipal' src={imagen1} alt="img"/>
            <p>{descripcion} </p>
            <p id='parrafo1'>{parrafo1} </p>
            <p>{parrafo2} </p>
            <p>{parrafo3} </p>
            <img className='imagenSecundaria' src={imagen2} alt="img"/>
            <p>{parrafo4} </p>
            <p>{parrafo5} </p>
            <p>{cierre} </p>
            </Container>
            <FooterWithLogo/>
        </>
    )
}