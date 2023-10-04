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
            "Muchas gracias por el servicio. Cumplieron con lo que necesitaba en el tiempo pactado. Súper recomendable" <span className='autorOpinion'> Gustavo Papaane Art</span>
            </Card.Text>
            </Slide>
           </Card> 
           <Card className='cardOpiniones'>
           <img className='estrellas' src={estrellas} alt='img'/>
           <Slide
           direction='right'>
            <Card.Text className='copyOpiniones'>
            "Excelente! Entendieron muy bien la idea que queríamos plasmar en nuestra web"<span className='autorOpinion'> The Dream Wedding</span>
            </Card.Text>
            </Slide>
           </Card> 
           
           </div>
           <ButtonContacto/>
           </Container> 
 
        </>
    )
}