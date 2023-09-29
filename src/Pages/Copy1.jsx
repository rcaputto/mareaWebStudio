import { Container, Card } from "react-bootstrap";
import studio from '../assets/Images/studio.jpg';
import '../assets/Styles/Copy1.css';
import  {Slide} from "react-awesome-reveal";

export default function Copy1(){

    return(
       <>
        <Container fluid className="contenedor">
            <div className="copyPrincipal">
            <Slide
            duration={'2500'}
            >
                <Card.Text className="copy copy-card">
                    <h1 className="copyTitleCopy1">Construyendo tu Presencia en Línea </h1>
                    <h2 className="copySubTitleCopy1">Soluciones de Desarrollo Web a Medida</h2>
                    <div className="copyText">
                    En <span className='marca'>Marea Web Studio</span>, entendemos que tu presencia en línea es crucial en el mundo digital actual.
                    Por ello, fusionamos la creatividad del desarrollo web con el poder del marketing digital para llevar tu marca al siguiente nivel en el mundo digital.  
                    Nuestro equipo apasionado de expertos en diseño, desarrollo y estrategia, se dedica a convertir tus visiones en sitios web dinámicos y funcionales.
          Ya sea que necesites una página web personal, un sitio de comercio electrónico o una plataforma interactiva, estamos aquí para transformar tus ideas en realidad.
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
       </> 
    )
}