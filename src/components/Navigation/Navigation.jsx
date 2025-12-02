import "./Navigation.css";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logOutWhite from "../../assets/logout_white.svg";
import logOutBlack from "../../assets/logout_black.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "../MobileMenu/MobileMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
function Navigation({ onLoginClick, onLogout }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const location = useLocation();

  const navTitleClass = `${
    location.pathname === "/saved-news"
      ? "navigation__link black "
      : "navigation__title "
  } `;

  const navClass = `navigation ${
    location.pathname === "/saved-news"
      ? "navigation__link black"
      : "navigation__link"
  }`;
  const closeButtonClass = `navigation__menu-button ${
    isMenuOpen ? "navigation__menu-button_open" : ""
  } ${
    location.pathname === "/saved-news" ? "navigation__menu-button_black" : ""
  }`;

  const navLinkClassUnderline = `navigation__link_underline ${
    location.pathname === "/saved-news"
      ? "navigation__link black "
      : "navigation__link"
  } `;
  return (
    <nav className={navClass}>
      <div className="navigation__container">
        <p className={navTitleClass}>NewsExplorer</p>

        <button className={closeButtonClass} onClick={handleMenuToggle}>
          <span className="navigation__menu-button-line"></span>
          <span className="navigation__menu-button-line"></span>
          <span className="navigation__menu-button-line"></span>
        </button>
      </div>

      <div className="navigation__menu ">
        <div className="navigation__menu-content">
          <NavLink to="/" className={navLinkClassUnderline}>
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className={
                location.pathname === "/saved-news"
                  ? "navigation__link black marked"
                  : "navigation__link navigation__link_logged"
              }
            >
              Saved articles
            </NavLink>
          )}

          {isLoggedIn ? (
            <button
              className={`navigation__button navigation__button_logged-in ${
                location.pathname === "/saved-news"
                  ? "navigation__button_white"
                  : ""
              } ${location.pathname === "/" ? "navigation__button_black" : ""}`}
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
                src={
                  location.pathname === "/saved-news"
                    ? logOutBlack
                    : logOutWhite
                }
                alt="logout"
                className={`navigation__logout-icon `}
              />
            </button>
          ) : (
            <button
              className={`navigation__button navigation__button_sign-in ${
                location.pathname === "/saved-news"
                  ? "navigation__saved_black"
                  : ""
              }`}
              onClick={onLoginClick}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
        onClose={handleMenuClose}
        logOutWhite={logOutWhite}
        logOutBlack={logOutBlack}
      />
    </nav>
  );
}

export default Navigation;
