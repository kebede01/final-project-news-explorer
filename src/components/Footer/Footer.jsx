import "./Footer.css";
import vector from "../../assets/github.svg";
import union from "../../assets/union.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">© 2024 Supersite, Powered by News API</div>
        <div className="footer-links">
          <div className="footer-links__text">
            <p className="footer-links__text-content footer-links__text-content_home">Home</p>
            <p className="footer-links__text-content  footer-links__text-content_tripleten">TripleTen</p>
          </div>
          <div className="footer-links__icon">
            <img
              src={vector}
              alt="vector icon"
              className="footer-links__icon-img"
            />
            <img
              src={union}
              alt="union icon"
              className="footer-links__icon-img"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
