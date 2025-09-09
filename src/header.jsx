// src/components/Header.js
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">John Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="Navbar-nav" />
        <Navbar.Collapse id="Navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <NavLink to="/" className="nav-link">Accueil</NavLink>
            <NavLink to="src/services.jsx" className="nav-link">Services</NavLink>
            <NavLink to="src/portfolio.jsx" className="nav-link">Réalisations</NavLink>
            <NavLink to="src/contact.jsx" className="nav-link">Contact</NavLink>
            <NavLink to="src/mentions legales.jsx" className="nav-link">Mentions légales</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
