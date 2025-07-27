import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Award, Zap } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState('');
  const { scrollY } = useScrollAnimation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFieldFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleFieldBlur = () => {
    setActiveField('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      info: "+91 200220002",
      description: "Call us 24/7",
      color: "#FFD700",
      delay: 0
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "info@youbranding.in",
      description: "Send us an email",
      color: "#FF6B6B",
      delay: 0.2
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      info: "Mumbai, India",
      description: "Visit our office",
      color: "#4ECDC4",
      delay: 0.4
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      info: "Mon - Fri: 9AM - 6PM",
      description: "Weekend: 10AM - 4PM",
      color: "#45B7D1",
      delay: 0.6
    }
  ];

  const floatingStats = [
    { icon: <Users size={20} />, number: "500+", label: "Happy Clients", color: "#FFD700" },
    { icon: <Award size={20} />, number: "50+", label: "Awards Won", color: "#FF6B6B" },
    { icon: <Zap size={20} />, number: "24/7", label: "Support", color: "#4ECDC4" }
  ];

  return (
    <div className="contact-page">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-square square-1"></div>
        <div className="floating-square square-2"></div>
      </div>

      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="container">
          <div className="hero-content">
            {/* Hero section is now empty - just for spacing */}
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Tell us about your project and we'll craft the perfect solution for you.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <div className={`input-wrapper ${activeField === 'name' ? 'active' : ''}`}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('name')}
                        onBlur={handleFieldBlur}
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className={`input-wrapper ${activeField === 'email' ? 'active' : ''}`}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('email')}
                        onBlur={handleFieldBlur}
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <div className={`input-wrapper ${activeField === 'phone' ? 'active' : ''}`}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('phone')}
                        onBlur={handleFieldBlur}
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className={`input-wrapper ${activeField === 'company' ? 'active' : ''}`}>
                      <label htmlFor="company">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus('company')}
                        onBlur={handleFieldBlur}
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <div className={`input-wrapper ${activeField === 'message' ? 'active' : ''}`}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => handleFieldFocus('message')}
                      onBlur={handleFieldBlur}
                      required
                      placeholder="Tell us about your project..."
                    ></textarea>
                    <div className="input-border"></div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>

              {/* Statistics Cards */}
              <div className="contact-stats">
                <div className="stats-grid">
                  {floatingStats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="stat-card"
                      style={{
                        animationDelay: `${index * 0.3}s`,
                        '--stat-color': stat.color
                      }}
                    >
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you. Here's how you can reach us.</p>
              </div>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="contact-info-card"
                    style={{
                      animationDelay: `${info.delay}s`,
                      '--card-color': info.color
                    }}
                  >
                    <div className="info-icon" style={{ color: info.color }}>
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p className="info-main">{info.info}</p>
                      <p className="info-description">{info.description}</p>
                    </div>
                    <div className="card-glow"></div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <span>📷</span>
                    <div className="icon-glow"></div>
                  </a>
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <span>📘</span>
                    <div className="icon-glow"></div>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <span>🐦</span>
                    <div className="icon-glow"></div>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <span>💼</span>
                    <div className="icon-glow"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <div className="map-header">
              <h2>Our Location</h2>
              <p>Visit us in the heart of Mumbai</p>
            </div>
            <div className="map-container">
              <div className="map-frame">
                <div className="map-overlay">
                  <div className="location-marker">
                    <MapPin size={24} />
                  </div>
                  <div className="location-info">
                    <h3>You Branding Studio</h3>
                    <p>Mumbai, Maharashtra, India</p>
                    <span className="status-badge">Open Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about working with us</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-icon">❓</div>
              <div className="faq-content">
                <h3>What services do you offer?</h3>
                <p>We offer comprehensive branding services including brand identity design, digital marketing, photography, video production, and website development.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-icon">⏱️</div>
              <div className="faq-content">
                <h3>How long does a typical project take?</h3>
                <p>Project timelines vary depending on scope and complexity. A typical brand identity project takes 4-6 weeks, while website development can take 6-12 weeks.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-icon">🌍</div>
              <div className="faq-content">
                <h3>Do you work with international clients?</h3>
                <p>Yes, we work with clients from around the world. We use modern communication tools to ensure smooth collaboration regardless of location.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-icon">💰</div>
              <div className="faq-content">
                <h3>What is your pricing structure?</h3>
                <p>We offer custom pricing based on project requirements. Contact us for a detailed quote tailored to your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 