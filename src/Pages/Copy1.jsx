import { Container, Card } from "react-bootstrap";
import studio from '../assets/Images/studio.jpg';
import '../assets/Styles/Copy1.css';
import  {Slide} from "react-awesome-reveal";
import BurbujaWhatsapp from "../Components/BurbujaWhatsapp";

export default function Copy1(){

    return(
       <>
        <Container fluid className="contenedor">
            <div className="copyPrincipal">
            <Slide
            
            >
                <Card.Text className="copy copy-card">
                    <h1 className="copyTitleCopy1">Potenciando tu Presencia en Línea </h1>
                    <h2 className="copySubTitleCopy1">Desarrollo Web a Medida para Tu Éxito Digital</h2>
                    <div className="copyText">
                    En <span className='marca'>Marea Web Studio</span>, reconocemos la importancia de tu presencia en línea en el mundo digital actual. Ofrecemos soluciones de comunicación personalizada a través de proyectos enfocados en la web (diseño de Sitios Web, Catálogos en Línea y Tiendas On Line, Landing Page, Blogs y Portales Web). Tenemos com objetivo comprender las ideas y brindar asesoramientos a nuestros clientes sobre la implementación de las tecnologías necesarias para su proyecto. Valoramos la importancia de proporsionar un rápido y eficiente soporte post-venta.
                    </div>
                    
                </Card.Text>
                </Slide>
                <Slide
                direction="right"
                duration={'2500'}
                delay={'70'}>
                <img className="studioImagen" src={studio} alt='img'/>
                </Slide>

            </div>
        </Container>
        <BurbujaWhatsapp/>
       </> 
    )
}