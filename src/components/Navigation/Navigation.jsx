import "./Navigation.css";
import { useContext } from "react";
import { Link , NavLink} from "react-router-dom";

import logOutWhite from "../../assets/logout_white.svg";
import logOutBlack from "../../assets/logout.svg"
import { currentUserContext } from "../../contexts/currentUserContext";
import { currentPageContext } from "../../contexts/currentPageContext";
function Navigation({ onLoginClick, onLogout }) {
  const { currentUser, isLoggedIn } = useContext(currentUserContext);
    const { currentPage} = useContext(currentPageContext);
  console.log(onLogout);
  return (
    <nav className={`navigation ${currentPage === "/saved-news" ? "navigation-saved" : null}`}>
      <div className="navigation__container">
        <p className={` ${currentPage === "/saved-news" ? "navigation__saved_black" : "navigation__title"} ${
          currentPage === "/" ? "navigation__title" : ""}
        }`} >NewsExplorer</p>

        <button className="navigation__menu-button">
          <span className="navigation__menu-button-line"></span>
          <span className="navigation__menu-button-line"></span>
        </button>
      </div>

      <div className="navigation__menu ">
        <div className="navigation__menu-content">
          <NavLink to="/" 
             className={`navigation__link_underline ${currentPage === "/saved-news" ? "navigation__saved_black navigation__saved_white" : "navigation__link "} ${currentPage === "/" ? "navigation__link" : ""}`}>Home
          </NavLink>
        

          {isLoggedIn && (
            <NavLink to="/saved-news"
               className={` ${currentPage === "/saved-news" ? "navigation__saved_black" : "navigation__link"} ${currentPage === "/" ? "navigation__link" : ""}`}>Saved articles
            </NavLink>
           
          )}

          {isLoggedIn ? (
            <button
              className="navigation__button navigation__button_logged-in"
              onClick={onLogout}
            >
              <span className={` ${currentPage === "/saved-news" ? "navigation__saved_black" : "navigation__username"}  ${currentPage === "/" ? "navigation__link" : ""}`}>{currentUser.name}</span>
              <img
                src={currentPage === "/saved-news" ? logOutBlack : logOutWhite}
                alt="logout"
                className={`navigation__logout-icon ${
              currentPage === "/"
                ? "navigation__logo_white"
                : "navigation__logo_black"
            }`}
              />
            </button>
          ) : (
            <button
                className={`navigation__button  ${currentPage === "/saved-news" ? "navigation__saved_black" : "navigation__button_sign-in" } ${currentPage === "/" ? "navigation__button_sign-in" : "navigation__button_sign-in"}`}
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
