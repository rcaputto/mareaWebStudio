
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/Images/logoMarea.png';
import '../assets/Styles/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const linkStyle = {
    textDecoration:'none',
    color:'#34495e'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" >
      <Container>
        <Navbar.Brand><img src={logo} alt='img' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto enlaces">
            <Nav className='p-2'><a style={linkStyle} href='#inicio'> Inicio</a></Nav>
            <Nav className='p-2'><Link style={linkStyle} to='/nosotros' >Quienes somos</Link></Nav>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link style={linkStyle} to='/servicios/desarrollo-web' >Desarrollo Web</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Marketing Digital</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Landing Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tienda en Línea</NavDropdown.Item>
            </NavDropdown>
            <Nav className='p-2'><a style={linkStyle} href='#portfolio'> Portfolio</a></Nav>
            <Nav className='p-2'><a style={linkStyle} href='#planes'> Planes</a></Nav>
            <Nav className='p-2'><Link style={linkStyle} to='/blog'>Blog</Link></Nav>
            <Nav className='p-2'><a style={linkStyle} href="http://wa.me/+543416165987" target='blank'  >Contacto</a></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;