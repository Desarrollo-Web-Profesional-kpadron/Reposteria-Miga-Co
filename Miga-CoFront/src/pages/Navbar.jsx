import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-logo">
          Miga<span>-Co</span>
        </div>

        <ul className="nav-links">
          <li>Productos</li>
          <li>Sucursales</li>
          <li>Creaciones</li>
        </ul>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menú Móvil */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={closeMenu}>Productos</li>
        <li onClick={closeMenu}>Sucursales</li>
        <li onClick={closeMenu}>Creaciones</li>
      </ul>
    </div>
  );
}