import { ArrowRight, Star, Award, Users, Target } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

function About() {
  const teamMembers = [
    {
      name: "Mark Jackson",
      position: "Creative Director",
      description: "A visionary creative designer with over 10 years of experience in brand identity and digital design.",
      image: "mark-jackson"
    },
    {
      name: "Sarah Johnson",
      position: "Brand Strategist",
      description: "Expert in brand strategy and market positioning with a passion for creating meaningful connections.",
      image: "sarah-johnson"
    },
    {
      name: "David Chen",
      position: "Digital Marketing Lead",
      description: "Specialist in digital marketing campaigns and social media strategy for modern brands.",
      image: "david-chen"
    },
    {
      name: "Emily Davis",
      position: "Photography Director",
      description: "Professional photographer with expertise in product and corporate photography.",
      image: "emily-davis"
    }
  ];

  const values = [
    {
      icon: <Star size={24} />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake."
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and client collaboration."
    },
    {
      icon: <Target size={24} />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions."
    },
    {
      icon: <Award size={24} />,
      title: "Quality",
      description: "We deliver high-quality results that exceed expectations."
    }
  ];

  // Count up animations for about stats
  const [yearsExperience, yearsRef] = useCountUp(5, 0, 2000, 500);
  const [projectsCompleted, projectsRef] = useCountUp(100, 0, 2500, 1000);
  const [happyClients, clientsRef] = useCountUp(50, 0, 2000, 1500);
  const [awardsWon, awardsRef] = useCountUp(15, 0, 2000, 2000);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Learn more about our team and our mission to create exceptional brand experiences</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>You Branding was founded with a simple mission: to help businesses create meaningful connections with their audiences through exceptional design and strategic thinking.</p>
              <p>We are a team of passionate creatives, strategists, and technologists who believe that great design has the power to transform businesses and inspire people.</p>
              <p>With over 5 years of experience in the industry, we've helped hundreds of companies establish their brand identity and achieve their marketing goals.</p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <h3>Our Journey</h3>
                <p>Building brands since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The creative minds behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <div className="image-placeholder">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" ref={yearsRef}>
              <h3>{yearsExperience}+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item" ref={projectsRef}>
              <h3>{projectsCompleted}+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item" ref={clientsRef}>
              <h3>{happyClients}+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item" ref={awardsRef}>
              <h3>{awardsWon}+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Let's discuss your project and see how we can help bring your vision to life.</p>
            <button className="btn btn-primary">
              Get in Touch
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 