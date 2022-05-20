import { useState } from "react";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
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
            <button type="button" a href="/">Reset Location</button>
          </li>
          <li>
            <LoginButton/>
            <LogoutButton/>
            <Profile/>
          </li>
          <li>
          <button type="button" a href="/">Profile</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
