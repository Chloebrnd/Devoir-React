// src/components/Footer.js
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col>
            <h5>John Doe</h5>
            <p>Adresse - Téléphone - Email</p>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </Col>
          <Col>
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="src/services.jsx">Services</a></li>
              <li><a href="src/portfolio.jsx">Portfolio</a></li>
              <li><a href="src/contact.jsx">Contact</a></li>
            </ul>
          </Col>
          <Col>
            <h5>Dernières réalisations</h5>
            <p>Projet 1</p>
            <p>Projet 2</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
