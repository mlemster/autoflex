
import './footer.scss';
import * as Icon from 'react-bootstrap-icons';


function Footer() {
  return (
    <div className="footer">
      <div className="contact">
          <h3>Legal information</h3>
        <a href="/eula">End User License Agreement</a>
        <a href="/tos">Terms of Service</a>
        <a href="/privacypolicy">Privacy Policy</a>
        </div>
      <div className="footer-socials">
        <h3>Socials</h3>
        <a href="/"><Icon.Instagram className='footer-icon'/></a>
        <a href="/"><Icon.Twitter className='footer-icon'/></a>
        <a href=""><Icon.Facebook className='footer-icon'/></a>
      </div>

      <div className="footer-links">
        <h3>Site links</h3>
        <a href="#">Home</a>
        <a href="#">Car rental</a>
        <a href="#">Services</a>
        <a href="#">Contacts</a>
        {/* Add more links as needed */}
      </div>


        <div className="contact">
          <h3>Contact</h3>
          <p>Contact: AutoFlex@gmail.com</p>
          <p>+050 4235676</p>
          <img className="footer-logo" src="/images/logo.svg" alt="" />
          {/* Add more contact information as needed */}
        </div>
    </div>
  );
}

export default Footer;
