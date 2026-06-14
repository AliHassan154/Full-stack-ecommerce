import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout.js";

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const params = useParams();

    const fetchProductDetails = async () => {
        try {
            const {data } = await axios.get(`https://thorough-tranquility-production-dca2.up.railway.app/api/product/get-product/${params.slug}`);
            setProduct(data.product);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [params.slug]);

    return (
        <Layout>
        <div className="single-product">
            <div className="product-image-section">
                <img
                    src={`https://thorough-tranquility-production-dca2.up.railway.app/api/product/product-photo/${product?._id}`}
          alt={product?.name}
        />
      </div>

      <div className="product-content">
        <h1>{product?.name}</h1>

        <p className="product-price">
          Rs. {product?.price}
        </p>

        <p className="product-description">
          {product?.description}
        </p>

        <div className="product-actions">
          <button className="cart-btn">
            Add To Cart
          </button>

          <button className="buy-btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ProductDetails;