import "./Navigation.css";

import logoutWhite from "../../assets/logout_white.svg";
function Navigation({isLoggedIn, onLoginClick, onLogout, currentUser}) {




  return (
    <nav
      className="navigation " >
      <div className="navigation__container">
        
          <p className="navigation__logo">
            
        NewsExplorer
          </p>
          
            <button
          className="navigation__menu-button"
          >
          <span className="navigation__menu-button-line"></span>
          <span className="navigation__menu-button-line"></span>
        </button>
      </div>

      <div
        className="navigation__menu "
>
        <div className="navigation__menu-content">
          <button
          
            className="navigation__link" >
            Home
          </button>

          {isLoggedIn && (
            <button className="navigation__link "
              
              >
              Saved articles
            </button>
          )}

          {isLoggedIn ? (
            <button
              className="navigation__button navigation__button--logged-in"
            onClick={onLogout}>
              <span className="navigation__username">{ currentUser.name}</span>
              <img
                src={ logoutWhite}
                alt="logout"
                className="navigation__logout-icon"
              />
            </button>
          ) : (
            <button
                className="navigation__button navigation__button--sign-in"
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
