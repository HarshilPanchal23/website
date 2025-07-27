import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Footer() {
  const { scrollY } = useScrollAnimation();
  
  // Calculate footer logo animation based on scroll
  const footerLogoScale = Math.max(0.9, 1 - (scrollY * 0.0001));
  const footerLogoOpacity = Math.max(0.8, 1 - (scrollY * 0.0003));

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div 
                className="logo-container"
                style={{
                  transform: `scale(${footerLogoScale})`,
                  opacity: footerLogoOpacity
                }}
              >
                <div className="logo-text">
                  <span className="logo-you">YOU</span>
                  <div className="logo-bulb">
                    <div 
                      className="bulb-icon footer-bulb"
                      style={{
                        filter: 'drop-shadow(0 0 6px #FFD700)',
                        animation: 'footerBulbGlow 3s ease-in-out infinite'
                      }}
                    >
                      💡
                    </div>
                  </div>
                  <span className="logo-u">U</span>
                </div>
                <div className="logo-branding">BRANDING</div>
                <div className="logo-tagline">Your Vision, Our Creativity</div>
              </div>
            </div>
            <p>GSAP, or the GreenSock Animation Platform services for valued clients.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Brand Identity</li>
              <li>Brand Strategy</li>
              <li>Digital Marketing</li>
              <li>Website Design</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Call 24/7: +91 200220002</p>
            <p>Email: info@youbranding.in</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; Copyrights 2025 - You Branding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 