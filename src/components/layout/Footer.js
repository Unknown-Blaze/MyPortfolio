import {
  faTelegram,
  faLinkedin,
  faWhatsapp,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';  
import pages from '../../utils/pages';

const contacts = [
  { icon: faPhone, info: '+65 8178 0206', },
  { icon: faEnvelope, info: 'rudrapra001@e.ntu.edu.sg', },
];

const socials = [
  { icon: faTelegram, href: "https://t.me/unknown_blaze", },
  { icon: faLinkedin, href: "https://www.linkedin.com/in/rudra-prasadh-ganesh-70376494/", },
  { icon: faWhatsapp, href: "https://wa.me/6581780206", },
  { icon: faGithub, href: "https://github.com/Unknown-Blaze", },
  { icon: faEnvelope, href: "mailto:rudrapra001@e.ntu.edu.sg,grudraprasadh@gmail.com"}
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <div className="site-footer-contact">
          <h4>Get in Touch</h4>
          <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with me</h4>
          {
            socials.map((social, index) => 
            <a  
            key = {index}
            href={social.href} 
            target="_blank" 
            rel="noreferrer" 
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
            )
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
