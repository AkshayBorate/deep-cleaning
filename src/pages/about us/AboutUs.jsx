import React from "react";
import "./AboutUs.css"; // Ensure your CSS aligns with this structure

function AboutUs() {
  return (
    <div className="about-us-container">

      {/* Header Section */}
      <section className="about-us-header">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-subtitle">
          Welcome to <span className="highlight">Varsha Deep Cleaners</span> — Your Trusted Partner in Professional Deep Cleaning.
        </p>
      </section>

      {/* Main Content */}
      <section className="about-us-content">
        {/* Images */}
        <div className="about-us-images">
          <img
            src="/assests/images/professionalteam.jpg"
            alt="Professional Team"
            className="about-us-image"
          />
          <img
            src="/assests/images/modernequipement.jpg"
            alt="Modern Equipment"
            className="about-us-image"
          />
        </div>

        {/* Company Description */}
        <div className="about-us-text">
          <p className="about-us-paragraph">
            At <span className="highlight">Varsha Deep Cleaners</span>, we are committed to providing exceptional deep cleaning services for residential, commercial, and industrial spaces. Our team of skilled professionals ensures every corner is thoroughly cleaned using advanced tools and eco-friendly products.
          </p>
          <p className="about-us-paragraph">
            Whether it’s a one-time deep clean or regular maintenance, we tailor our services to meet your specific needs — with unmatched attention to detail, punctuality, and professionalism.
          </p>
          <ul className="about-us-list">
            <li className="about-us-list-item">✔️ Experienced & Verified Cleaning Experts</li>
            <li className="about-us-list-item">✔️ Safe & Eco-Friendly Cleaning Products</li>
            <li className="about-us-list-item">✔️ Affordable & Transparent Pricing</li>
            <li className="about-us-list-item">✔️ Customer Satisfaction is Our Priority</li>
          </ul>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-us-mission">
        <h2 className="about-us-section-title">Our Mission</h2>
        <p className="about-us-mission-text">
          To deliver premium deep cleaning services that foster cleaner, safer, and healthier environments for our clients.
        </p>

        <h2 className="about-us-section-title">Our Vision</h2>
        <p className="about-us-mission-text">
          To be the most trusted name in deep cleaning services, known for excellence, integrity, and customer-centric solutions.
        </p>

        <p className="about-us-slogan">✨ Clean Spaces. Happy Faces. ✨</p>
      </section>

      {/* Owner Section */}
      <section className="about-us-owner">
        <h2 className="about-us-section-title text-white">Meet Our Founder</h2>
        <div className="owner-info">
          <p><strong>Name:</strong> Abhijeet Shitole</p>
          <p><strong>Contact:</strong> +91-9307709206</p>
          <p>
            With a passion for cleanliness and customer care, Abhijeet founded Varsha Deep Cleaners with a mission to elevate the standards of hygiene and service in the cleaning industry. Under his leadership, the company has grown into a trusted name, serving countless satisfied clients across the region.
          </p>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
