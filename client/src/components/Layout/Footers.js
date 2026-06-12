import React from 'react'
import { Link } from 'react-router-dom'

const Footers = () => {
  return (
     <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">
          Shop<span>Ease</span>
        </h2>

        <p className="footer-text">
          Quality products with modern shopping experience.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Policy</Link>
        </div>

        <p className="footer-copy">
          © 2026 ShopEase. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footers
