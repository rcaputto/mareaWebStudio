import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../assets/Styles/CopyServices.css'
import { Slide } from "react-awesome-reveal";
import ButtonContacto from "../Components/ButtonContacto";
import { Link } from "react-router-dom";


export default function CopyServices() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  }
  return (
    <>
      <Container fluid className="nuestrosServicios">
        <Row>
          <Col sm={12}>

            <h1 className="titulo tituloPrincipal" id='servicios'>Nuestros Servicios</h1>
            <Card.Text id="parrafoServices" className="parrafo parrafoPrincipal"> En <span className='marca'>Marea Web Studio</span>,
              ofrecemos una gama completa de servicios pensados potenciar tu marca.
            </Card.Text>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm className="fondoServicios">
            <Slide
              direction="up"
              triggerOnce='true'>

              <Col lg  >

                <h1 className="titulo">Desarrollo Web</h1>
                <Card.Text id="parrafoServices" className="parrafo">Creamos sitios web profesionales y de gran calidad para su negocio, empresa y/o servicio. Landing Page, Tienda On Line, E-Commerce, Catálogo de Productos, Blogs, Sitios Corporativos, Institucionales y Personales...
                </Card.Text>

              </Col>
            </Slide>
            <Button className="button"><Link style={linkStyle} to='/servicios/desarrollo-web' >Más info</Link></Button>
          </Col>
          <Col sm className="fondoServicios">
            <Slide
              direction="up"
              delay={500}
              triggerOnce='true'>
              <Col sm><h1 className="titulo">Marketing Digital</h1>
                <Card.Text id="parrafoServices" className="parrafo">Utilizamos estrategias de marketing digital personalizadas para aumentar tu visibilidad y crear relaciones duraderas con tus clientes. Mediante SEO, publicidad en redes sociales o marketing de contenidos, te ayudamos a promocionar tu página.
                </Card.Text></Col>
            </Slide>
            <Button className="button"><Link style={linkStyle} to='/servicios/marketing-digital' >Más info</Link></Button>
            </Col>
        </Row>
        <Row>
          <Col sm className="fondoServicios mDigital">
            <Slide
              direction="up"
              triggerOnce='true'>

              <Col sm><h1 className="titulo">Tienda en línea</h1>
                <Card.Text id="parrafoServices" className="parrafo">
                   Diseñamos tiendas en línea autogestionables y responsive (adaptadas a distintos dispositivos). Incluye productos ilimitados, carrito de compras, pago con tarjetas, registro y login de usuarios.
                </Card.Text>
                <Card.Text>
                </Card.Text>
              </Col>
              </Slide>
              <Button className="button"><Link style={linkStyle} to='/servicios/tienda-en-linea' >Más info</Link></Button>
          </Col>
          <Col sm className="fondoServicios">
            <Slide
              direction="up"
              delay={500}
              triggerOnce='true'>
              <Col sm ><h1 className="titulo">Landing Page</h1>
                <Card.Text id="parrafoServices" className="parrafo"> Diseñamos landing pages persuasivas y enfocadas en convertir visitantes en clientes, ofrecer información relevante y una llamada a la acción clara y específica.
                </Card.Text></Col>
            </Slide>
            <Button className="button"><Link style={linkStyle} to='/servicios/landing-page' >Más info</Link></Button>
          </Col>
        </Row>
        <Card.Text className="callToAction" >
          ¿Estás listo para impulsar tu marca en el mundo digital?
          ¡Ponte en contacto con nosotros!
        </Card.Text>
      </Container>

      <ButtonContacto />
    </>
  )
}