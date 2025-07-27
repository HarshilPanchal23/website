import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Branding', 'Brand Identity', 'Brand Promotions', 'Photography', 'Video Production', 'Website Design'];

  const projects = [
    {
      title: "Brand Identity Design",
      category: "Brand Identity",
      image: "brand-identity",
      description: "Complete brand identity design for a modern tech company"
    },
    {
      title: "E-commerce Website",
      category: "Website Design",
      image: "ecommerce",
      description: "Responsive e-commerce platform with modern design"
    },
    {
      title: "Product Photography",
      category: "Photography",
      image: "product-photo",
      description: "Professional product photography for online retail"
    },
    {
      title: "Corporate Video",
      category: "Video Production",
      image: "corporate-video",
      description: "Corporate video production for brand storytelling"
    },
    {
      title: "Social Media Campaign",
      category: "Brand Promotions",
      image: "social-campaign",
      description: "Integrated social media marketing campaign"
    },
    {
      title: "Logo Design",
      category: "Branding",
      image: "logo-design",
      description: "Creative logo design for startup companies"
    }
  ];

  // Count up animations for portfolio stats
  const [projectsCompleted, projectsRef] = useCountUp(50, 0, 2500, 500);
  const [happyClients, clientsRef] = useCountUp(25, 0, 2000, 1000);
  const [satisfaction, satisfactionRef] = useCountUp(100, 0, 2000, 1500);
  const [experience, experienceRef] = useCountUp(5, 0, 2000, 2000);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Portfolio</h1>
            <p>Showcasing our creative work and successful projects</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  <div className="project-overlay">
                    <button className="btn btn-primary">
                      View Project
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" ref={projectsRef}>
              <h3>{projectsCompleted}+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item" ref={clientsRef}>
              <h3>{happyClients}+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item" ref={satisfactionRef}>
              <h3>{satisfaction}%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item" ref={experienceRef}>
              <h3>{experience}+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together.</p>
            <button className="btn btn-primary">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio; 