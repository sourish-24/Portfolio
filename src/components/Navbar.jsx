import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        &lt;S<span>M</span>/&gt;
      </a>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
