import { FaGithub, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import the icons you want

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/mohitsatyarthiii" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon-img" size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon-img" size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://instagram.com/mohitsatyarthii" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon-img" size={30} />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://wa.me/7486079506" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon-img" size={30} />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Mohit Satyarthi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;