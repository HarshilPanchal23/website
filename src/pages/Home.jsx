import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

function Home() {
  const services = [
    {
      title: "Brand Identity",
      description: "Brand Positioning, Logo & Brand Identity Design, Graphics Design, Brochure Design, Packaging Design",
      icon: "🎨"
    },
    {
      title: "Brand Strategy",
      description: "Brand Personality, Brand Tone of Voice",
      icon: "📊"
    },
    {
      title: "Brand Promotions",
      description: "Integrated marketing, Advertising Campaign, SEO, SEM, Social Media Marketing, Digital Marketing",
      icon: "📈"
    },
    {
      title: "Photography",
      description: "Industrial Photography, E-commerce Photography, Food Photography, Product Video, TVC Ads",
      icon: "📷"
    },
    {
      title: "Video Editing",
      description: "Documentaries Shoot, Video for Social Media, Food and Beverage Video, Corporate Video",
      icon: "🎬"
    },
    {
      title: "Website Design & Development",
      description: "E-commerce Website, Informative Website",
      icon: "💻"
    }
  ];

  const testimonials = [
    {
      text: "Photo a visionary creative designer, known for my ability to turn concepts into captivating visual narratives. My deep passion for the world of design allows creative designer, known content",
      author: "Dominik Hert",
      position: "CEO Founder"
    },
    {
      text: "Photo a visionary creative designer, known for my ability to turn concepts into captivating visual narratives. My deep passion for the world of design allows creative designer, known content",
      author: "Dominik Hert",
      position: "CEO Founder"
    },
    {
      text: "Photo a visionary creative designer, known for my ability to turn concepts into captivating visual narratives. My deep passion for the world of design allows creative designer, known content",
      author: "Dominik Hert",
      position: "CEO Founder"
    }
  ];

  // Count up animations for stats
  const [designCount, designRef] = useCountUp(540, 0, 2500, 500);
  const [experienceCount, experienceRef] = useCountUp(1, 0, 2000, 1000);
  const [clientCount, clientRef] = useCountUp(1, 0, 2000, 1500);
  const [projectCount, projectRef] = useCountUp(1, 0, 2000, 2000);

  const stats = [
    { number: `${designCount}K+`, label: "MAKE DESIGN", ref: designRef },
    { number: `${experienceCount}+`, label: "YEAR EXPERIENCE", ref: experienceRef },
    { number: `${clientCount}+`, label: "TOTAL CLIENT", ref: clientRef },
    { number: `${projectCount}+`, label: "Total Projects", ref: projectRef }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Welcome to You!</h1>
              <h2>You Branding</h2>
              <p>We are a creative digital agency specializing in brand identity, strategy, and digital solutions.</p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary">
                  Our Services
                  <ArrowRight size={20} />
                </Link>
                <button className="btn btn-secondary">
                  <Play size={20} />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-placeholder">
                <h3>Creative Design</h3>
                <p>Visual Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Our digital website agency solutions</p>
          </div>
          <div className="services-floating-container">
            <div className="services-floating-grid">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-floating-card"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="service-floating-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-floating-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                  <div className="floating-card-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" ref={stat.ref}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Mark Jackson</h2>
              <h3>Music Experiences</h3>
              <p>Photo a visionary creative designer, known for my music ability to turn concepts into captivating visual narratives. My deep passion for the world of design allows me.</p>
              <div className="about-features">
                <div className="feature">
                  <Star size={20} />
                  <span>Visionary creative designer</span>
                </div>
                <div className="feature">
                  <Star size={20} />
                  <span>Web and mobile design</span>
                </div>
                <div className="feature">
                  <Star size={20} />
                  <span>Unlimited design</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                About Me
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <h3>Creative Designer</h3>
                <p>Passionate about design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Our Clients Say?</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Let's talk</h2>
            <p>Ready to start your next project? Get in touch with us today.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 