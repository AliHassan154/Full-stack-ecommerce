import React from 'react'
import Layout from '../../components/Layout/Layout.js'
import { useAuth } from '../../context/authContext.js'
import {useNavigate} from 'react-router-dom'

const AdminDashboard = () => {
  const [auth] = useAuth()
  const navigate = useNavigate()

  return (
    <Layout>
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Admin Dashboard</h1>
        <p className="text-muted">
          Manage categories, products, and users easily.
        </p>
      </div>

      {/* auth Info */}
      <div className="card shadow border-0 mb-5 auth-card">
        <div className="card-body">
          <h3 className="mb-4">Admin Information</h3>

          <p>
            <strong>Name :</strong> {auth?.user?.name}
          </p>

          <p>
            <strong>Email :</strong> {auth?.user?.email}
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="row g-4">

        {/* Category */}
        <div className="col-md-4">
          <div className="card dashboard-card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h2 className="mb-3">📂</h2>

              <h4>Create Category</h4>

              <p className="text-muted">
                Add and manage product categories.
              </p>

              <button onClick={() => navigate('/dashboard/admin/create-category')} className="btn btn-dark w-100">
                Create Category
              </button>
            </div>
          </div>
        </div>

        {/* Product */}
        <div className="col-md-4">
          <div className="card dashboard-card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h2 className="mb-3">🛒</h2>

              <h4>Manage Products</h4>

              <p className="text-muted">
                Add new products to your store.
              </p>

              <button onClick={() => navigate('/dashboard/admin/manage-product')} className="btn btn-dark w-100">
                Manage Product
              </button>
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="col-md-4">
          <div className="card dashboard-card shadow-sm border-0 h-100">
            <div className="card-body text-center">
              <h2 className="mb-3">👤</h2>

              <h4>Users</h4>

              <p className="text-muted">
                View and manage registered users.
              </p>

              <button onClick={() => navigate('/dashboard/admin/users')} className="btn btn-dark w-100">
                Manage Users
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </Layout>
  );
}

export default AdminDashboard

