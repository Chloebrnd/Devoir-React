import React, { useState } from "react";
import "./App.css";

export default function navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <div className="logo">JOHN DOE</div>
      <ul className="nav-links">
        <li 
          className={active === "home" ? "active" : ""} 
          onClick={() => setActive("home")}
        >
          HOME
        </li>
        <li 
          className={active === "services" ? "active" : ""} 
          onClick={() => setActive("services")}
        >
          SERVICES
        </li>
        <li 
          className={active === "portfolio" ? "active" : ""} 
          onClick={() => setActive("portfolio")}
        >
          PORTFOLIO
        </li>
        <li 
          className={active === "contact" ? "active" : ""} 
          onClick={() => setActive("contact")}
        >
          CONTACT
        </li>
        <li 
          className={active === "legal" ? "active" : ""} 
          onClick={() => setActive("legal")}
        >
          MENTIONS LÉGALES
        </li>
      </ul>
    </nav>
  );
}
