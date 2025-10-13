import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onLoginClick, onLogout, handleSearch }) {
  return (
    <>
      <header className="header">
        <div className="header__nav-container">
          <Navigation onLoginClick={onLoginClick} onLogout={onLogout} />
        </div>
        <div className="header__text-container">
          <h1 className="header__title">What&#39;s going on in the world?</h1>
          <h2 className="header__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </h2>
        </div>
        <SearchForm handleSearch={handleSearch} />
      </header>
    </>
  );
}

export default Header;
