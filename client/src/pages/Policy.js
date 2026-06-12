// Policy.jsx
import React from 'react';
import './FooterCss/Policy.css';
import Layout from '../components/Layout/Layout.js';

const Policy = () => {
  return (
    <Layout>
    <div className="policy-page">

      {/* Hero Section */}
      <section className="policy-hero">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy and security are important to us at ShopEase.
        </p>
      </section>

      {/* Policy Content */}
      <section className="policy-container">

        <div className="policy-card">
          <h2>Information We Collect</h2>
          <p>
            We collect user information such as name, email, address,
            and payment details to process orders and improve services.
          </p>
        </div>

        <div className="policy-card">
          <h2>How We Use Information</h2>
          <p>
            Your information is used for order processing, customer support,
            and improving your shopping experience.
          </p>
        </div>

        <div className="policy-card">
          <h2>Secure Transactions</h2>
          <p>
            ShopEase uses secure technologies and encryption methods to
            protect user data and online payments.
          </p>
        </div>

        <div className="policy-card">
          <h2>Cookies</h2>
          <p>
            Cookies help us improve website functionality and personalize
            your experience on our platform.
          </p>
        </div>

        <div className="policy-card">
          <h2>Third-Party Services</h2>
          <p>
            Payment gateways and shipping providers may access necessary
            information to complete transactions.
          </p>
        </div>

        <div className="policy-card">
          <h2>User Rights</h2>
          <p>
            Users can request access, updates, or deletion of their
            personal data anytime.
          </p>
        </div>

      </section>
    </div>
    </Layout>
  );
};

export default Policy;