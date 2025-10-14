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
            <a
              className="footer-links__text-content footer-links__text-content_home"
              href="/"
            >
              Home
            </a>
            <a
              className="footer-links__text-content  footer-links__text-content_tripleten"
              href="https://tripleten.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </div>
          <div className="footer-links__icon">
            <a href="https://www.github.com/" rel="noopener noreferrer"   target="_blank">
              <img
                src={vector}
                alt="vector icon"
                className="footer-links__icon-img"
              />
            </a>

            <a  href="https://www.linkedin.com/" rel="noopener noreferrer"   target="_blank">
                <img
              src={union}
              alt="union icon"
              className="footer-links__icon-img"
            />
            </a>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
