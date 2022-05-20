import { useState } from "react";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isLoading } = useAuth0();
  

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Flasher - The App for Boulderers
      </a>
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
        <ul>
          <li>
            <a href="/">Reset Location</a>
          </li>
          { isLoading ? 
          <div>Loading...</div> :
          <li>
          <LoginButton/>
          <LogoutButton/>
          <Profile/>
        </li>
          } 
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
