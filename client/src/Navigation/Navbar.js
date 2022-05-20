import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
    <img className="brand-name" src={require('./flashers.png')} />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="nav-buttons">
          <li>
            <a href="/">Reset Location</a>
          </li>
          <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
