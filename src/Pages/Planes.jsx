import {Button, Container} from 'react-bootstrap';
import {Row, Col, Card} from 'react-bootstrap';
import '../assets/Styles/Planes.css';
import { Link } from 'react-router-dom';

function Planes() {
  return (
    <>
    <Container fluid id='planes'>
    <div className='planesConteiner'>
    <h1>Planes</h1>
        <Row>
            <Col sm={12} md = {6} lg={3}>
            <Card className='mb-2'>
            <Card.Header as="h4" id='headerCard'>Landing Page</Card.Header>
            <Card.Body>
              <Card.Title className='planesSubtitle'>Tu presentación perfecta</Card.Title>
              <Card.Text>
              <ul className="planes">
              <li> Hasta 8 secciones </li>
              <li>Hosting incluido</li>
              <li> Galería de imágenes </li>
              <li>Iconos redes sociales</li>
              <li> Dominio incluido </li>
              <li>Burbuja de Whatsapp </li>
              <li> Diseño responsive (pc, tablet y celular)</li>
              <li> Correos institucionales</li>
              <li> Certificado SSL incluido</li>
              </ul>
              </Card.Text>
              <Button variant="primary"><Link to='https://wa.me/00543416165987' target='blank' className='linkToWhastapp'> Más info</Link></Button>
            </Card.Body>
          </Card >
            </Col>
            <Col sm={12} md = {6} lg={3}>
            <Card className='mb-2'>
            <Card.Header as="h4" id='headerCard'>Tienda en Línea (E-Commerce)</Card.Header>
            <Card.Body>
              <Card.Title className='planesSubtitle'>Transforma tu negocio y potencia tus ventas</Card.Title>
              <Card.Text>
              <ul className="planes">
              <li> Catálogo de productos </li>
              <li> Carrito de compras</li>
              <li> Diseño responsive (pc, tablet, celular)</li>
              <li> Integración con Mercado Pago</li>
              <li> Mapa de Google</li>
              <li> Pestaña informativa de la empresa</li>
              <li> Cobro con todos los medios de pago</li>
              <li> Base de datos inicial hasta 50 productos</li>
              <li> Clasificación de productos por categoria</li>
              <li> Certificado SST incluido</li>
              </ul>
              </Card.Text>
              <Button variant="primary"><Link to='https://wa.me/00543416165987' target='blank' className='linkToWhastapp'> Más info</Link></Button>
            </Card.Body>
          </Card>
            </Col>
            <Col sm={12} md = {6} lg={3}>
            <Card className='mb-2'>
            <Card.Header as="h4" id='headerCard'>Páginas Institucionales Profesionales</Card.Header>
            <Card.Body>
              <Card.Title className='planesSubtitle'>Presencia en el universo digital</Card.Title>
              <Card.Text>
              <ul className="planes">
              <li> Barra de navegación con menú desplegable de secciones </li>
              <li> Burbuja de Whatsapp</li>
              <li> Diseño responsive</li>
              <li> Mapa de Google</li>
              <li> Correos institucionales</li>
              <li> Redes sociales</li>
              <li> Hosting y dominio</li>
              <li> Certificado SSL incluido</li>
              </ul>
              </Card.Text>
              <Button variant="primary"><Link to='https://wa.me/+543416165987' target='blank' className='linkToWhastapp'> Más info</Link></Button>
            </Card.Body>
          </Card>
            </Col>
            <Col sm={12} md = {6} lg={3}>
            <Card >
            <Card.Header as="h4" id='headerCard'>Marketing Digital</Card.Header>
            <Card.Body>
              <Card.Title className='planesSubtitle'>Potencia tu marca en el mundo digital</Card.Title>
              <Card.Text>
              <ul className="planes">
              <li> Estrategia personalizada</li>
              <li> Publicidad en Redes Sociales</li>
              <li> Optimización SEO</li>
              <li> Publicidad en Google</li>
              <li> Email Marketing</li>
              <li> Análisis de Datos</li>
              <li> Campañas de Contenido</li>
              <li> Gestión de Redes Sociales</li>   
              </ul>
              </Card.Text>
              <Button variant="primary"><Link to='https://wa.me/00543416165987' target='blank' className='linkToWhastapp'> Más info</Link></Button>
            </Card.Body>
          </Card>
            </Col>
        </Row>
        </div>
        </Container>
    </>
  );
}

export default Planes;