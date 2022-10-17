import React from "react";
import SocialIcon from "../SocialIcon";

const d = new Date();
const year = d.getFullYear();

const Footer = () => (
  <footer className='footer'>
    <div className="container">
      <div className='footer__social'>
        <SocialIcon
          link="https://www.facebook.com/codinglatam/"
          name="facebook"
        />
        <SocialIcon
          link="https://www.instagram.com/codinglatam/"
          name="instagram"
        />
        <SocialIcon link="https://discord.gg/7bpGcDT" name="discord" />
        <SocialIcon link="https://twitter.com/codinglatam" name="twitter" />
        <SocialIcon
          link="https://www.youtube.com/channel/UCS0emIw9cgv9RIMowHlq3ng"
          name="youtube"
        />
      </div>
      <div className='footer__content'>
        <p>© Coding Latam {year} - Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;
