import React from 'react'
import Layout from '../components/Layout/Layout.js'
import "./FooterCss/About.css";

const About = () => {

  return (
    <Layout>
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About ShopEase</h1>
          <p>
            ShopEase is a modern ecommerce platform designed to provide a fast,
            secure, and smooth shopping experience for everyone.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-section container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="About ShopEase"
          />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            ShopEase was created with the goal of making online shopping easier
            and more reliable. We focus on providing quality products,
            responsive design, secure payments, and excellent customer support.
          </p>

          <p>
            Our platform combines modern technology with user-friendly design to
            create the best ecommerce experience possible.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose Us</h2>

        <div className="feature-cards container">
          <div className="card">
            <h3>🚚 Fast Delivery</h3>
            <p>
              We ensure quick and reliable delivery for all your orders.
            </p>
          </div>

          <div className="card">
            <h3>🔒 Secure Payments</h3>
            <p>
              Your transactions are protected with secure payment systems.
            </p>
          </div>

          <div className="card">
            <h3>⭐ Premium Quality</h3>
            <p>
              We provide high-quality products at affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a trusted ecommerce platform where users
            can shop confidently with convenience, speed, and satisfaction.
          </p>
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default About
