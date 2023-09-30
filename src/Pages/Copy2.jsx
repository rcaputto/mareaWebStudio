import { Container, Card } from "react-bootstrap";
import studio from '../assets/Images/fotoCard.jpg';
import '../assets/Styles/Copy1.css'
import  {Slide, Fade} from "react-awesome-reveal";

export default function Copy2(){

    return(
       <>
        <Container fluid className="contenedor">
            <div className="copyPrincipal">
            
            <img className="studioImagenCopy2" src={studio} alt='img'/>
           
                <Card.Text className="copy copy-card copy2-card">
                    
                    <h2 className="copySubTitle subtitleCopy2">Ventajas de Nuestros Servicios</h2>
                    <Fade
                    duration={'2500'}>
                    <Card.Text className="copyText">
                    <ul className="beneficios">
                    <li><span className='tituloCopy'>Diseño Web Moderno para Tu Marca:</span> Creamos sitios web funcionales y atractivos que reflejan la esencia de tu marca </li>
                    <li><span className='tituloCopy'>Estrategias de Marketing Digital:</span> Desde SEO y redes sociales hasta campañas de anuncios, maximizamos tu visibilidad en línea. </li>
                    <li><span className='tituloCopy'>Experiencia del Usuario Mejorada:</span> Priorizamos la usabilidad y la interacción para lograr conversiones efectivas </li>
                    <li><span className='tituloCopy'>Datos que Impulsan Decisiones:</span> Utilizamos análisis y métricas para optimizar continuamente tus estrategias en línea </li>
                    <li><span className='tituloCopy'>Crecimiento Medible:</span> Nuestro enfoque integral garantiza que cada paso esté alineado con tus objetivos de negocio. </li>
                    </ul>
                    </Card.Text>
                    </Fade>
                </Card.Text>
                

            </div>
        </Container>
       </> 
    )
}