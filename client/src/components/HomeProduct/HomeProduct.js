import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeProduct.css';

const HomeProduct = ({ products }) => {
    const navigate = useNavigate();
  return (
    <>
      <div className="products-grid">
        {products?.map((p) => (
            <div className="product-card" key={p._id}>
            <div className="product-image">
                <img
                src={`http://localhost:5000/api/product/product-photo/${p._id}`}
                alt={p.name}
                />
            </div>
            <div className="product-info">
                <h3>{p.name}</h3>

                <p className="product-price">
                Rs. {p.price}
                </p>

                <button
                className="product-btn"
                onClick={() => navigate(`/product/${p.slug}`)}
                >
                View Details
                </button>
            </div>
            </div>
        ))}
        </div>
    </>
  )
}

export default HomeProduct
