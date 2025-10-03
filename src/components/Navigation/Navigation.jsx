import "./Navigation.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

import logoutWhite from "../../assets/logout_white.svg";
import { currentUserContext } from "../../contexts/currentUserContext";
function Navigation({ onLoginClick, onLogout }) {
  const { currentUser, isLoggedIn } = useContext(currentUserContext);

  return (
    <nav className="navigation ">
      <div className="navigation__container">
        <p className="navigation__title">NewsExplorer</p>

        <button className="navigation__menu-button">
          <span className="navigation__menu-button-line"></span>
          <span className="navigation__menu-button-line"></span>
        </button>
      </div>

      <div className="navigation__menu ">
        <div className="navigation__menu-content">
          <Link to="/">
            <button className="navigation__link">Home</button>
          </Link>
          

          {isLoggedIn && (
            <Link to="/saved-news">
               <button className="navigation__link ">Saved articles</button>
            </Link>
           
          )}

          {isLoggedIn ? (
            <button
              className="navigation__button navigation__button_logged-in"
              onClick={onLogout}
            >
              <span className="navigation__username">{currentUser.name}</span>
              <img
                src={logoutWhite}
                alt="logout"
                className="navigation__logout-icon"
              />
            </button>
          ) : (
            <button
              className="navigation__button navigation__button_sign-in"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
