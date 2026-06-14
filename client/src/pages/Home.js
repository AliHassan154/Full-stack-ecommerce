import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout.js'
import axios from 'axios';
import HomeProduct from '../components/HomeProduct/HomeProduct.js';
// import Pagination from '../components/Pagination/Pagination.js';
const Home = () => {
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [photos , setPhotos] = useState([]);


  const handleAllProducts = async () => {
    try {
      const { data } = await axios.get("https://thorough-tranquility-production-dca2.up.railway.app/api/product/get-products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }


  // const handleCategoryProducts = async () => {
  //   try {
  //     const { data } = await axios.get('https://thorough-tranquility-production-dca2.up.railway.app/api/category/get-category');
  //     setCategories(data.category);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    handleAllProducts();
    // handleCategoryProducts();
}, []);
  return (
    <Layout>
      {/* <Pagination  categories={categories} /> */}
      <HomeProduct products={products} />
    </Layout>
  );
};

export default Home;
