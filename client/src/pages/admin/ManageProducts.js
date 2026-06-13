import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../context/authContext";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [auth] = useAuth();

  const handleAllProducts = async ()=>{
    const {data} = await axios.get('http://localhost:5000/api/product/get-products');
    if(data.success){
      console.log(data.products);
      setProducts(data.products);
    }
  }
  const handleDelete = async (pId)=>{
    const {data} = await axios.delete(`http://localhost:5000/api/product/delete-product/${pId}`,{
      headers:{
        Authorization: auth?.token
      }
    })
    if(data.success){
      handleAllProducts();
    }
  }
  
  useEffect(()=>{
    handleAllProducts();
  },[]);


  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Products</h2>

        <Link
          to="/dashboard/admin/create-product"
          className="btn btn-primary"
        >
          Create Product
        </Link>
      </div>

      <div className="row">
        { products.length > 0 ?
        (products?.map((p) => (
          <div key={p._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">

              <img
                src={`http://localhost:5000/api/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {p.name}
                </h5>

                <p className="card-text">
                  <strong>Category:</strong>{" "}
                  {p.category?.name}
                </p>

                <p className="card-text">
                  <strong>Price:</strong> Rs. {p.price}
                </p>

                <p className="card-text">
                  <strong>Quantity:</strong>{" "}
                  {p.quantity}
                </p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between">
                <Link
                  to={`/dashboard/admin/update-product/${p.slug}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={()=> handleDelete(p._id)}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))) : (
            <div className="text-center py-5">
              <div className="mb-4">
                <i
                  className="bi bi-box-seam"
                  style={{ fontSize: "5rem" }}
                ></i>
              </div>

              <h2 className="fw-bold text-secondary">
                No Products Found
              </h2>

              <p className="text-muted fs-5">
                Your inventory is currently empty. Start by adding your first product.
              </p>

              <Link
                to="/dashboard/admin/create-product"
                className="btn btn-primary btn-lg mt-3"
              >
                + Create Your First Product
              </Link>
            </div>
        )
        }
      </div>
    </div>
  );
};

export default ManageProducts;