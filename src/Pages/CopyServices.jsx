import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../assets/Styles/CopyServices.css'
import { Slide } from "react-awesome-reveal";
import ButtonContacto from "../Components/ButtonContacto";
import { Link } from "react-router-dom";


export default function CopyServices() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#34495e',
    color: 'white',

  }
  return (
    <>
      <Container fluid className="nuestrosServicios">
        <Row>
          <Col sm={12}>

            <h1 className="titulo tituloPrincipal" id='servicios'>Nuestros Servicios</h1>
            <Card.Text id="parrafoServices" className="parrafo parrafoPrincipal">Impulsamos tu presencia en línea y potenciamos tu negocio a través de una
              combinación única de innovación y estrategia. En <span className='marca'>Marea Web Studio</span>,
              ofrecemos una gama completa de servicios diseñados para llevar tu marca al siguiente nivel.
            </Card.Text>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm className="fondoServicios">
            <Slide
              direction="up">

              <Col lg  >

                <h1 className="titulo">Desarrollo Web</h1>
                <Card.Text id="parrafoServices" className="parrafo">Desde sitios web cautivadores hasta plataformas interactivas,
                  creamos experiencias en línea que dejan huella. Nuestro equipo de expertos en desarrollo web
                  transformará tu visión en un sitio fluido, responsivo y estéticamente impresionante.
                </Card.Text>

              </Col>
            </Slide>
            <Button><Link style={linkStyle} to='/servicios/desarrollo-web' >Más info</Link></Button>
          </Col>
          <Col sm className="fondoServicios">
            <Slide
              direction="up"
              delay={500}>
              <Col sm><h1 className="titulo">Marketing Digital</h1>
                <Card.Text id="parrafoServices" className="parrafo">Haz que tu voz sea escuchada en el ruido digital. A través de estrategias de marketing digital personalizadas, aumentamos tu visibilidad, generamos leads y construimos relaciones duraderas con tu audiencia. Ya sea SEO,
                  publicidad en redes sociales o marketing de contenidos, estamos aquí para hacer brillar tu marca.
                </Card.Text></Col>
            </Slide></Col>
        </Row>
        <Row>
          <Col sm className="fondoServicios mDigital">
            <Slide
              direction="up">

              <Col sm><h1 className="titulo">E-Commerce</h1>
                <Card.Text id="parrafoServices" className="parrafo">
                  Lleva tu negocio al mundo digital con una tienda en línea que cautiva y convierte. Diseñamos plataformas de comercio electrónico que no solo se ven increíbles, sino que también están optimizadas para el éxito. Desde la navegación
                  fluida hasta el proceso de compra seguro, creamos experiencias de compra en línea excepcionales
                </Card.Text>
                <Card.Text>
                </Card.Text>
              </Col>

            </Slide>
          </Col>
          <Col sm className="fondoServicios">
            <Slide
              direction="up"
              delay={500}>
              <Col sm ><h1 className="titulo">Landing Pages</h1>
                <Card.Text id="parrafoServices" className="parrafo">Cuando se trata de captar la atención y convertir visitantes en clientes, las landing pages son la clave. Diseñamos landing pages persuasivas y enfocadas en la acción que maximizan tus conversiones.
                  Cada elemento está diseñado estratégicamente para guiar a tus visitantes hacia el objetivo final.
                </Card.Text></Col>
            </Slide>
          </Col>
        </Row>
        <Card.Text className="callToAction" >
          ¿Estás listo para impulsar tu marca en el mundo digital?
          ¡Contáctanos hoy mismo y juntos haremos que tus sueños digitales se hagan realidad!
        </Card.Text>
      </Container>

      <ButtonContacto />
    </>
  )
}