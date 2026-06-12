import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout.js'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HomeProduct from '../components/HomeProduct/HomeProduct.js';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [photos , setPhotos] = useState([]);
  const navigate = useNavigate();


  const handleAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/product/get-products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }


  const handleCategoryProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/category/get-category');
      setCategories(data.category);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleAllProducts();
    handleCategoryProducts();
}, []);
  return (
    <Layout>
      <HomeProduct products={products} />
    </Layout>
  );
};

export default Home;
