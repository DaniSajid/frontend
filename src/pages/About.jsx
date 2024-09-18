import React from "react";
import "../styles/about.css"; // Custom CSS for styling

const About = () => {
  return (
    <main>
      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <p className="about-text">
            At TravelWorld, we believe in making travel a transformative
            experience. From personalized tours to adventurous expeditions, we
            offer a world of opportunities for explorers everywhere.
          </p>
          <p className="about-text">
            Founded with a passion for discovery, TravelWorld has been creating
            unforgettable travel experiences for over a decade. Whether you’re
            seeking adventure, relaxation, or cultural immersion, we’ve got you
            covered!
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h2 className="section-title">Welcome to TravelWorld</h2>
          <p className="welcome-text">
            Experience the best of world travel with our tailored tours. From
            exotic destinations to luxurious stays, TravelWorld is here to make
            your dreams come true.
          </p>
          <div className="stats">
            <div className="stat-box">
              <i className="fas fa-map-marker-alt"></i>
              <h3>500+</h3>
              <p>Destinations</p>
            </div>
            <div className="stat-box">
              <i className="fas fa-users"></i>
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <i className="fas fa-suitcase"></i>
              <h3>250+</h3>
              <p>Tours Offered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            To provide travelers with a seamless and immersive experience, while
            ensuring they discover the hidden gems of every destination.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Our Destinations</h2>
          <div className="gallery-images">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
              alt="City Tour"
            />
            <img
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6"
              alt="Adventure Travel"
            />
            <img
              src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a"
              alt="Luxury Vacation"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
