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
      <img className="brand-name" src={require("./flashers.png")} />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      ></button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="nav-buttons">
          <li>
            <button type="button" >
              Reset Location
            </button>
          </li>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <li>
              <LoginButton />
              <LogoutButton />
              <Profile />
            </li>
          )}
          <li>
            <button type="button" >
              Profile
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
