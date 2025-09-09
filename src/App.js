import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
        <div className="header-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="btn">En savoir plus</button>
        </div>
      </header>

      <section className="about">
        <div className="card">
          <div className="left">
            <h3>A propos</h3>
            <img src="/hero-bg.jpg" alt="John Doe" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="right">
            <h3>Mes compétences</h3>
            <div className="skill">
              <span>HTML5 90%</span>
              <div className="bar">
                <div className="fill html"></div>
              </div>
            </div>
            <div className="skill">
              <span>CSS3 80%</span>
              <div className="bar">
                <div className="fill css"></div>
              </div>
            </div>
            <div className="skill">
              <span>JAVASCRIPT 70%</span>
              <div className="bar">
                <div className="fill js"></div>
              </div>
            </div>
            <div className="skill">
              <span>PHP 60%</span>
              <div className="bar">
                <div className="fill php"></div>
              </div>
            </div>
            <div className="skill">
              <span>REACT 50%</span>
              <div className="bar">
                <div className="fill react"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-col">
          <h4>John Doe</h4>
          <p>
            40 rue Laure Diebold
            <br />
            69009 Lyon, France
            <br />
            Tél : 10 20 30 40 50
            <br />
            john.doe@gmail.com
          </p>
        </div>
        <div className="footer-col">
          <h4>Liens utiles</h4>
          <ul>
            <li>Accueil</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Me contacter</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien-être</li>
            <li>SEO</li>
            <li>Création d'une API</li>
            <li>Maquette d’un site</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
