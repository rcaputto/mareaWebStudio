import { Button, Card, CardGroup, Container } from "react-bootstrap";
import foto1 from '../assets/Images/peliculas.png';
import foto2 from '../assets/Images/dwedding.png';
import foto3 from '../assets/Images/papaane.png';
import '../assets/Styles/LastWorks.css'

export default function LastWorks (){
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  }
    return (
      <Container fluid id="portfolio">
           <Card.Title ><h1 className="title" >Ultimos trabajos</h1></Card.Title>
           <CardGroup id="cardLastWork">
      <Card >
        <Card.Img variant="top" src={foto1} />
        <Card.Body>
          <Card.Title><span className="tituloPorfolio"><a href="https://peliculas-two.vercel.app/" target="_blank">Películas</a></span></Card.Title>
          <Card.Text className="parrafo parrafoPorfolio">
          En un trabajo personal, desarrollamos una página web dinámica y
          funcional que permite explorar películas en cartelera. 
          Mediante la integración a una base de datos ofrecemos sinopsis detalladas, información de actores e  imágenes.
          </Card.Text>
          <Button ><a href="https://peliculas-two.vercel.app/" target="_blank" style={linkStyle}>Visitar sitio web</a></Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={foto3} />
        <Card.Body>
        <Card.Title><span className="tituloPorfolio"><a href="https://gustavopapaane.vercel.app/" target="_blank">Gustavo Papaane Art</a> </span></Card.Title>
        <Card.Text className="parrafo parrafoPorfolio">
        Desarrollamos una Landing Page para mostrar la historia y obra del artista plástico. 
        Detallamos su trayectoria, biografía y presentamos sus creaciones en un sitio web. 
          </Card.Text>
          <Button ><a href="https://gustavopapaane.vercel.app/" target="_blank" style={linkStyle}>Visitar sitio web</a></Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={foto2} />
        <Card.Body>
          <Card.Title><span className="tituloPorfolio"><a href="https://dwedding.vercel.app/" target="_blank">Dream Wedding</a> </span></Card.Title>
          <Card.Text className="parrafo parrafoPorfolio">
            Trabajo en desarrollo para una empresa de wedding planner radicada en Málaga, España.
            Construimos un Sitio Web orientado a presentar sus servicios. 
            Mostramos su experiencia a través de imágenes de eventos realizados y descripciones detalladas de sus servicios.
          </Card.Text>
          <Button ><a href="https://dwedding.vercel.app/" target="_blank" style={linkStyle}>Visitar sitio web</a></Button>
        </Card.Body>
      </Card>
    </CardGroup>
  </Container>
    )
}