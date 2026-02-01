import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
          <div className="logo">DemoOne Pharmacy</div>

          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
              <a
                href="https://wa.me/2348146012788"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                WhatsApp
              </a>
            </li>
          </ul>
      </div>
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;