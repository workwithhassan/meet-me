import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import logout from '../../assets/logout-button.png'

function Header() {
  return (
    <>
    <header>

  <Container>
    <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#explore">Explore</Nav.Link>
      <Nav.Link href="#requests">Requests</Nav.Link>
      <Nav.Link href="#messages">Messages</Nav.Link>
      <Nav.Link href="#friends">Friends</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#logout">
        <img src={logout} alt="" />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Container>
    </header>
    </>
  );
}

export default Header;