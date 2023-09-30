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
            <Nav className='p-2'><Link style={linkStyle} to='/nosotros' >Quienes somos</Link></Nav>
            <Nav className='p-2'><a style={linkStyle} href="http://wa.me/+543416165987" >Contacto</a></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarNewLink;