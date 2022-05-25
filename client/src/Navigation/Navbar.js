import { useContext, useState } from "react";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";

export default function Navbar({ setShowProfileModal }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { isAuthenticated } = useAuth0();
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
            <button 
            class="button-17" 
            type="button">
              <span class="text">Reset Location</span>
              
            </button>
          </li>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <li>
              <LoginButton />
              <LogoutButton />
            </li>
          )}
          <li>
            {isAuthenticated && (
              <button
                class="button-17"
                type="button"
                onClick={setShowProfileModal(true)}
              >
                Profile
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
