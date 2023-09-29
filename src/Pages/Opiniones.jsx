import {Card, Container} from 'react-bootstrap';
import estrellas from '../assets/Images/estrellas.png'
import '../assets/Styles/Opiniones.css';
import ButtonContacto from "../Components/ButtonContacto";
import  {Slide} from "react-awesome-reveal";



export default function Opiniones(){
    return (
        <>
        <Container fluid>
           <h1 className='tituloOpiniones'>Dicen de nuestro trabajo</h1>
           <div className='opinionesCards'>
           
           <Card className='cardOpiniones papaane'>
           <img className='estrellas' src={estrellas} alt='img'/>
           <Slide>
            <Card.Text className='copyOpiniones'>
            "Estoy agradecido con la increíble landing page que han creado para mí. 
            Lograron capturar mi biografía y mis obras de una manera auténtica y visualmente atractiva.
            ¡Gracias por su talento y dedicación!" <span className='autorOpinion'> Gustavo Papaane Art</span>
            </Card.Text>
            </Slide>
           </Card> 
           <Card className='cardOpiniones'>
           <img className='estrellas' src={estrellas} alt='img'/>
           <Slide
           direction='right'>
            <Card.Text className='copyOpiniones'>
            "Estamos felices con la landing page que has creado para nuestro negocio de wedding planner
            Las imágenes y descripciones que incorporaste reflejan perfectamente la calidad y atención al detalle que ofrezco a mis clientes. 
            Tu habilidad para traducir mi visión en una página web hermosa y funcional es asombrosa.
             ¡Gracias por tu dedicación y por hacer que mi negocio brille en línea!"<span className='autorOpinion'> The Dream Wedding</span>
            </Card.Text>
            </Slide>
           </Card> 
           
           </div>
           <ButtonContacto/>
           </Container> 
 
        </>
    )
}