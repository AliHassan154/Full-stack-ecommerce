import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import ScrollToTop from "./components/scrolToTop.js";
import Register from "./pages/Auth/register.js";
import Login from "./pages/Auth/login.js";
import DashBoard from "./pages/user/DashBoard.js";
import PrivateRoutes from "./components/Routes/PrivateRoutes.js";
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./pages/admin/AdminDashboard.js";
import CreateProduct from "./pages/admin/CreateProduct.js";
import CreateCategory from "./pages/admin/CreateCategory.js";
import Users from "./pages/admin/Users.js";
import "antd/dist/reset.css";
import ManageProducts from "./pages/admin/ManageProducts.js";
import UpdateProduct from "./pages/admin/updateProduct.js";
import ProductDetails from "./components/ProductDetails/ProductDetails.js";
import CategoryPage from "./pages/Category/Category.js";


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails />} />

        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="user" element={<DashBoard />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/update-product/:slug" element={<UpdateProduct />} />
          <Route path="admin/manage-product" element={<ManageProducts />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;