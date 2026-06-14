import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import axios from "axios";
import Layout from "../../components/Layout/Layout.js";
const CategoryPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState([]);
  
  const getAllCategory = async () => {
    try {
      const {data} = await axios.get("https://thorough-tranquility-production-dca2.up.railway.app/api/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  React.useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout>
    <div className="categories-section">
        <h2 className="categories-heading">Shop By Category</h2>

        <div className="categories-grid">
            {categories?.map((cat) => (
            <div
                key={cat._id}
                className="category-card"
                onClick={() => navigate(`/category/${cat.slug}`)}
            >
                <h3>{cat.name}</h3>
            </div>
            ))}
        </div>
        </div>
        </Layout>
  );
};

export default CategoryPage;