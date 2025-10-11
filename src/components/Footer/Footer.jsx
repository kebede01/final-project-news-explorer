import "./Footer.css";
import vector from "../../assets/github.svg";
import union from "../../assets/union.png";
function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-year">
          © 2024 Supersite, Powered by News API
        </div>
        <div className="footer-links">
          <div className="footer-links__main">
              <p className="footer-link footer-link_home">Home</p>
          <p className="footer-link footer-link_tripleten">TripleTen</p>
          </div>
          <div className="footer-links__icon">
             <img src={ vector} alt="vector icon" className="footer-links__icon_img"/>
          <img src={ union} alt="union icon" className="footer-links__icon_img"/>
         </div>
         
        </div>
      </div>
</section>
  )
}
export default Footer;