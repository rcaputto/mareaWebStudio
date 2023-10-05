import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/Images/logoMarea.png';
import '../assets/Styles/NavBar.css';
import { Link } from 'react-router-dom';

function NavBarNewLink() {
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
            <Nav className='p-2'><Link style={linkStyle} to='/' >Home</Link></Nav>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link style={linkStyle} to='/servicios/desarrollo-web' >Desarrollo Web</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link style={linkStyle} to='/servicios/marketing-digital'>Marketing Digital</Link> </NavDropdown.Item>
              <NavDropdown.Item ><Link style={linkStyle} to='/servicios/landing-page'>Landing Page</Link> </NavDropdown.Item>
              <NavDropdown.Item ><Link style={linkStyle} to='/servicios/tienda-en-linea'>Tienda en Línea</Link> </NavDropdown.Item>
            </NavDropdown>
            <Nav className='p-2'><Link style={linkStyle} to='/blog'>Blog</Link></Nav>
            <Nav className='p-2'><Link style={linkStyle} to='/nosotros' >Quienes somos</Link></Nav>
            <Nav className='p-2'><Link style={linkStyle} to ='/contacto' >Contacto</Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarNewLink;