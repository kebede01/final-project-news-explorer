import "./Navigation.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logOutWhite from "../../assets/logout_white.svg";
import logOutBlack from "../../assets/logout.svg";
import { currentUserContext } from "../../contexts/currentUserContext";

function Navigation({ onLoginClick, onLogout }) {
  const { currentUser, isLoggedIn } = useContext(currentUserContext);
  const location = useLocation();

  return (
    <nav
      className={`navigation ${
        location.pathname === "/saved-news" ? "navigation__link black" : "navigation__link"
      }`}
    >
      <div className="navigation__container">
        <p
          className={`${
            location.pathname === "/saved-news" ? "navigation__link black " : "navigation__title "
          } `}
        >
          NewsExplorer
        </p>

        <button className="navigation__menu-button">
          <span className="navigation__menu-button-line"></span>
          <span className="navigation__menu-button-line"></span>
        </button>
      </div>

      <div className="navigation__menu ">
        <div className="navigation__menu-content">
          <NavLink
            to="/"
            className={`navigation__link_underline ${
              location.pathname === "/saved-news"
                ? "navigation__link black"
                : "navigation__link"
              } `}
           
          >
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className={
                location.pathname === "/saved-news"
                  ? "navigation__link black"
                  : "navigation__link"
              }
            >
              Saved articles
            </NavLink>
          )}

          {isLoggedIn ? (
            <button
              className="navigation__button navigation__button_logged-in"
              onClick={onLogout}
            >
              <span
                className={`navigation__username ${
                  location.pathname === "/saved-news"
                    ? "navigation__link black"
                    : "navigation__link"
                }  `}
              >
                {currentUser.name}
              </span>
              <img
                src={location.pathname === "/saved-news" ? logOutBlack : logOutWhite}
                alt="logout"
                className={`navigation__logout-icon `}
              />
            </button>
          ) : (
            <button
              className={`navigation__button navigation__button_sign-in ${
                location.pathname === "/saved-news" ? "navigation__saved_black" : ""
              }`}
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
