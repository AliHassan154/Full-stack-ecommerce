import React from 'react'
import Layout from '../../components/Layout/Layout.js'
import {useAuth} from '../../context/authContext.js'
import "./DashBoard.css"

const DashBoard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">{auth?.user?.name}'s Dashboard</h1>

        <p className="text-muted">
          Manage your profile and orders easily.
        </p>
      </div>

      <div className="row g-4">

        {/* Profile Section */}
        <div className="col-lg-4">

          <div className="card shadow border-0 profile-card">

            <div className="card-body">

              <div className="text-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="auth"
                  className="profile-img"
                />

                <h3 className="mt-3">{auth?.user?.name}</h3>

                <p className="text-muted">
                  Customer
                </p>
              </div>

              <hr />

              <p>
                <strong>Email :</strong> {auth?.user?.email}
              </p>

              <p>
                <strong>Phone :</strong> {auth?.user?.phone}
              </p>

              <p>
                <strong>Address :</strong> {auth?.user?.address}
              </p>

              <button className="btn btn-dark w-100 mt-3">
                Edit Profile
              </button>

            </div>

          </div>

        </div>

        {/* Orders Section */}
        <div className="col-lg-8">

          <div className="card shadow border-0 orders-card">

            <div className="card-body">

              <h3 className="mb-4">
                My Orders
              </h3>

              <div className="table-responsive">

                <table className="table table-bordered align-middle">

                  <thead className="table-dark">

                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Status</th>
                      <th>Price</th>
                    </tr>

                  </thead>

                  <tbody>

                    <tr>
                      <td>1</td>
                      <td>Wireless Headphones</td>
                      <td>
                        <span className="badge bg-success">
                          Delivered
                        </span>
                      </td>
                      <td>$120</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Gaming Mouse</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Pending
                        </span>
                      </td>
                      <td>$60</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Smart Watch</td>
                      <td>
                        <span className="badge bg-primary">
                          Shipping
                        </span>
                      </td>
                      <td>$200</td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
    </Layout>
  );
}

export default DashBoard
