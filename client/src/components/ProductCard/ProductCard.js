import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
      <img
        src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
        alt={product.name}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h6 className="fw-bold text-truncate">
          {product.name}
        </h6>

        <p
          className="text-muted small"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-5">
            ${product.price}
          </span>

          <button
            className="btn btn-dark btn-sm rounded-pill px-3"
            onClick={() =>
              navigate(`/product/${product.slug}`)
            }
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;