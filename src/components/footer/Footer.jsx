import React from "react";
import "./footer.css";
import github from '../../assets/github.png'
import linkdin from '../../assets/linkdin.png'
import watsapp from '../../assets/watsapp.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ikramah Ahmed.</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social ">
        <a href="https://github.com/IkramahAhmed" className="social__home-icon" target="_blank">
            <i class="bx bxl-github "><img src={github}   width={30} alt="" /></i>
          </a>

          <a href="https://www.linkedin.com/in/ikramah-ahmed-631096227/" className="social__home-icon" target="_blank"> 
            <i class="bx bxl-linkedin"><img src={linkdin}  width={30} alt="" /></i>
          </a>
          
          <a href="https://api.whatsapp.com/send?phone=9233366200090" className="social__home-icon" target="_blank">
            <i class="bx bxl-whatsapp"><img src={watsapp} width={26} alt="" /></i>
          </a>

        </div>
        <span className="footer__copy">&#169; Ikramahcoder. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
