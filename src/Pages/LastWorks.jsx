import { Card, CardGroup, Container } from "react-bootstrap";
import foto1 from '../assets/Images/peliculas.png';
import foto2 from '../assets/Images/dwedding.png';
import foto3 from '../assets/Images/papaane.png';
import '../assets/Styles/LastWorks.css'

export default function LastWorks (){
    return (
      <Container fluid id="portfolio">
           <Card.Title ><h1 className="title" >Ultimos trabajos</h1></Card.Title>
           <CardGroup id="cardLastWork">
      <Card >
        <Card.Img variant="top" src={foto1} />
        <Card.Body>
          <Card.Title><span className="tituloPorfolio"><a href="https://peliculas-two.vercel.app/" target="_blank">Películas</a></span></Card.Title>
          <Card.Text className="parrafo parrafoPorfolio">
          En un trabajo personal, buscamos elevar la experiencia cinematográfica creando una página web dinámica y
          funcional que permite explorar películas en cartelera. 
          Integramos una sólida base de datos para ofrecer sinopsis detalladas, información de actores y
           cautivadoras imágenes. Impulsamos la interacción y la inmersión de los usuarios en el mundo
            del cine a través de una interfaz intuitiva y atractiva.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={foto3} />
        <Card.Body>
        <Card.Title><span className="tituloPorfolio"><a href="https://gustavopapaane.vercel.app/" target="_blank">Gustavo Papaane Art</a> </span></Card.Title>
        <Card.Text className="parrafo parrafoPorfolio">
        A través de una elegante página web, dimos vida a la historia y obra del artista plástico. 
        Detallamos su trayectoria en una cautivadora biografía y presentamos sus creaciones en un entorno virtual único. Fusionamos 
        diseño y narrativa para brindar una experiencia envolvente que resalta la esencia del artista.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={foto2} />
        <Card.Body>
          <Card.Title><span className="tituloPorfolio"><a href="https://dwedding.vercel.app/" target="_blank">Dream Wedding</a> </span></Card.Title>
          <Card.Text className="parrafo parrafoPorfolio">
            Trabajo en desarrollo para una empresa de wedding planner radicada en Málaga, España.
            Construimos una encantadora landing page, presentando sus servicios con elegancia. 
            Mostramos su experiencia a través de imágenes de eventos realizados y descripciones detalladas de sus servicios. 
            Buscamos capturar la esencia de la empresa en un
             diseño fluido, brindando a los visitantes una visión completa de sus ofertas
              excepcionales.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </Container>
    )
}