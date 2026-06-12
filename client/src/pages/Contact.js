import React from 'react'
import Layout from '../components/Layout/Layout.js'
import "./FooterCss/ContactUs.css"

const Contact = () => {
 return (
  <Layout>
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Get in touch with ShopEase anytime.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Have questions about products, orders, or services? Our support
            team is here to help you.
          </p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Pakistan</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>support@shopease.com</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+92 300 1234567</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Enter Your Name" />

            <input type="email" placeholder="Enter Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea
              rows="6"
              placeholder="Write Your Message"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default Contact
