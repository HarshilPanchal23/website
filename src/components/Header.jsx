import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, scrollDirection } = useScrollAnimation();
  const [bulbIntensity, setBulbIntensity] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Calculate bulb glow intensity based on scroll
  useEffect(() => {
    const maxScroll = 500; // Maximum scroll for full glow
    const intensity = Math.min(scrollY / maxScroll, 1);
    setBulbIntensity(intensity);
  }, [scrollY]);

  // Calculate logo scale based on scroll
  const logoScale = Math.max(0.8, 1 - (scrollY * 0.0002));
  const logoOpacity = Math.max(0.7, 1 - (scrollY * 0.0005));

  return (
    <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <div 
                className="logo-container"
                style={{
                  transform: `scale(${logoScale})`,
                  opacity: logoOpacity
                }}
              >
                <div className="logo-text">
                  <span className="logo-you">YOU</span>
                  <div className="logo-bulb">
                    <div 
                      className={`bulb-icon ${scrollDirection === 'down' ? 'bulb-glow' : ''}`}
                      style={{
                        filter: `drop-shadow(0 0 ${8 + bulbIntensity * 12}px #FFD700)`,
                        transform: `scale(${1 + bulbIntensity * 0.2})`,
                        animation: scrollDirection === 'down' ? 'bulbPulse 1s ease-in-out' : 'none'
                      }}
                    >
                      💡
                    </div>
                    <div 
                      className="bulb-glow-effect"
                      style={{
                        opacity: bulbIntensity,
                        transform: `scale(${1 + bulbIntensity * 0.5})`
                      }}
                    ></div>
                  </div>
                  <span className="logo-u">U</span>
                </div>
                <div 
                  className="logo-branding"
                  style={{
                    borderColor: `rgba(255, 215, 0, ${0.5 + bulbIntensity * 0.5})`,
                    boxShadow: `0 0 ${10 + bulbIntensity * 20}px rgba(255, 215, 0, ${0.3 + bulbIntensity * 0.4})`
                  }}
                >
                  BRANDING
                </div>
                <div 
                  className="logo-tagline"
                  style={{
                    opacity: 0.7 + bulbIntensity * 0.3
                  }}
                >
                  Your Vision, Our Creativity
                </div>
              </div>
            </Link>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+91200220002" className="phone-link">
              <Phone size={20} />
              <span>+91 200220002</span>
            </a>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 