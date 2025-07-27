import { ArrowRight, Check } from 'lucide-react';

function Services() {
  const services = [
    {
      title: "Brand Identity",
      icon: "🎨",
      description: "Complete brand identity solutions including positioning, logo design, and visual elements.",
      features: [
        "Brand Positioning",
        "Logo & Brand Identity Design",
        "Graphics Design",
        "Brochure Design",
        "Packaging Design"
      ]
    },
    {
      title: "Brand Strategy",
      icon: "📊",
      description: "Strategic brand development to create lasting impressions and market presence.",
      features: [
        "Brand Personality",
        "Brand Tone of Voice",
        "Market Research",
        "Competitive Analysis"
      ]
    },
    {
      title: "Brand Promotions",
      icon: "📈",
      description: "Comprehensive digital marketing and promotional strategies for brand growth.",
      features: [
        "Integrated Marketing",
        "Advertising Campaign",
        "Search Engine Optimisation (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Marketing",
        "Digital Marketing",
        "Product Photography"
      ]
    },
    {
      title: "Photography",
      icon: "📷",
      description: "Professional photography services for all your visual content needs.",
      features: [
        "Industrial Photography",
        "E-commerce Photography",
        "Food Photography",
        "Product Video",
        "TVC Ads"
      ]
    },
    {
      title: "Video Production",
      icon: "🎬",
      description: "High-quality video production services for various platforms and purposes.",
      features: [
        "Documentaries Shoot",
        "Video for Social Media",
        "Food and Beverage Video",
        "Corporate Video"
      ]
    },
    {
      title: "Website Design & Development",
      icon: "💻",
      description: "Modern, responsive websites that drive engagement and conversions.",
      features: [
        "E-commerce Website",
        "Informative Website",
        "Responsive Design",
        "SEO Optimization"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive digital solutions for your brand's success</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-detail">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we deliver exceptional results</p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>We start by understanding your brand, goals, and target audience.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Strategy</h3>
              <p>Develop a comprehensive strategy tailored to your specific needs.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Design</h3>
              <p>Create stunning visuals and engaging content that resonates.</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Delivery</h3>
              <p>Implement and launch your project with ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and create something amazing together.</p>
            <button className="btn btn-primary">
              Contact Us
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services; 