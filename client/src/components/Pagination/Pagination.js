// import React from "react";
import "./Pagination.css";

const Filters = ({ categories, setCategory, setPrice }) => {
  return (
    <div className="filters">

      {/* CATEGORY */}
      <div className="filter-section">
        <h4>Categories</h4>

        <div className="chip-container">
          {["All", ...categories].map((cat) => (
            <button
              key={cat._id}
              className="chip"
              onClick={() => setCategory(cat)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="filter-section">
        <h4>Price</h4>

        <div className="chip-container">
          {[
            { label: "All", value: "All" },
            { label: "< 1000", value: "low" },
            { label: "1000 - 5000", value: "mid" },
            { label: "5000+", value: "high" },
          ].map((p, i) => (
            <button
              key={i}
              className="chip"
              onClick={() => setPrice(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Filters;