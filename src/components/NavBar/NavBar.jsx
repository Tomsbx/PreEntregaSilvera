import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Gorras</Nav.Link>
          <Nav.Link href="#pricing">Remeras</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><CartWidget/></Nav.Link>          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
