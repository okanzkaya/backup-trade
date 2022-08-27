import "./footer.css";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="line"></div>
      <div className="footer-logo">
        <img src={logo} />
        <h3>Trader's Lounge</h3>
      </div>
      <div className="footer-items">
        <div className="footer-item">
          <div id="a" className="footer-content">
            <h2>Business</h2>
            <a href="#">Collaboration</a>
            <a href="#">Our Partners</a>
            <a href="#">Our Goals</a>
          </div>
          <div id="b" className="footer-content">
            <h2>Privacy</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Your Data</a>
          </div>
          <div id="c" className="footer-content">
            <h2>Community</h2>
            <a href="#">Rules</a>
            <a href="#">Join Us</a>
            <a href="#">Social Media</a>
          </div>
          <div id="d" className="footer-content">
            <h2>Help</h2>
            <a href="#">General Support</a>
            <a href="#">User Interface</a>
            <a href="#">Community Support</a>
          </div>
        </div>
      </div>
      <div className="footnote">Trader’s Lounge &copy; 2019 - 2022</div>
    </footer>
  );
};

export default Footer;
