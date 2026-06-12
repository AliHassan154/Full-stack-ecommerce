import React from 'react'
import Layout from '../components/Layout/Layout.js'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <Layout>
       <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="text-center p-4">
        <h1
          className="fw-bold text-danger"
          style={{ fontSize: "120px" }}
        >
          404
        </h1>

        <h2 className="fw-bold mb-3">Page Not Found</h2>

        <p className="text-muted mb-4">
          The page you are looking for does not exist.
        </p>

        <Link to="/" className="btn btn-dark px-4 py-2">
          Go Back Home
        </Link>
      </div>
    </div>
    </Layout>
  )
}

export default Pagenotfound
