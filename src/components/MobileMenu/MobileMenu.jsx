import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import headerWhiteLogo from "../../assets/headerWhiteLogo.svg";
import headerBlackLogo from "../../assets/headerBlackLogo.svg";
import { useLocation } from "react-router-dom";
function MobileMenu({
  isOpen,
  isLoggedIn,
  currentUser,
  onLoginClick,
  onLogout,
  onClose,
  logOutWhite,
  logOutBlack,
}) {
  const location = useLocation();
  const menuContentClass = `mobile-menu__content ${
    isLoggedIn && location.pathname === "/saved-news"
      ? "mobile-menu__content_logged-in"
      : ""
  }`;

  const menuHeaderClass = `mobile-menu__header ${
    isLoggedIn && location.pathname === "/saved-news"
      ? "mobile-menu__header_logged-in"
      : ""
  }`;
  const menuCloseClass = `mobile-menu__close-button ${
    isLoggedIn && location.pathname === "/saved-news"
      ? "mobile-menu__close-button_logged-in"
      : ""
  }`;

  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu_open" : ""}`}>
      <div className={menuContentClass}>
        <div className={menuHeaderClass}>
          <NavLink to="/" className="mobile-menu__logo-link" onClick={onClose}>
            <img
              src={
                isLoggedIn && location.pathname === "/saved-news"
                  ? headerBlackLogo
                  : headerWhiteLogo
              }
              alt="NewsExplorer Logo"
              className="mobile-menu__logo"
            />
          </NavLink>
          <button className={menuCloseClass} onClick={onClose}>
            <span className="mobile-menu__close-button-line"></span>
            <span className="mobile-menu__close-button-line"></span>
          </button>
        </div>

        <div className="mobile-menu__nav">
          <NavLink
            to="/"
            className={`mobile-menu__link ${
              location.pathname === "/" ? "mobile-menu__link_active" : ""
            } ${
              isLoggedIn && location.pathname === "/saved-news"
                ? "mobile-menu__link_logged-in"
                : ""
            }`}
            onClick={onClose}
          >
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink
              to="/saved-news"
              className={`mobile-menu__link ${
                location.pathname === "/saved-news"
                  ? "mobile-menu__link_active"
                  : ""
              } ${
                isLoggedIn && location.pathname === "/saved-news"
                  ? "mobile-menu__link_logged-in"
                  : ""
              }`}
              onClick={onClose}
            >
              Saved articles
            </NavLink>
          )}

          {isLoggedIn ? (
            <button
              className={`mobile-menu__button mobile-menu__button_logged-in ${
                location.pathname === "/saved-news"
                  ? "mobile-menu__button_black"
                  : "mobile-menu__button_white"
              }`}
              onClick={() => {
                onLogout();
                onClose();
              }}
            >
              <span className="mobile-menu__username">{currentUser.name}</span>
              <img
                src={
                  location.pathname === "/saved-news"
                    ? logOutBlack
                    : logOutWhite
                }
                alt="logout"
                className="mobile-menu__logout-icon"
              />
            </button>
          ) : (
            <button
              className="mobile-menu__button mobile-menu__button_sign-in"
              onClick={() => {
                onLoginClick();
                onClose();
              }}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
