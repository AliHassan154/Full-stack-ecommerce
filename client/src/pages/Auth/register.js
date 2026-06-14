import React from "react";
import { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyFormData = { ...formData };
    copyFormData[name] = value;
    setFormData(copyFormData);
  };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if(!formData.name || !formData.email || !formData.password || !formData.phone || !formData.address){
            alert("Please fill all the fields");
            return;
        }
        const url  = "https://thorough-tranquility-production-dca2.up.railway.app/api/auth/register";
         const response = await  fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        if(result.success){
            alert(result.message);
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } else if(!result.success){
            alert(result.message);
        } else {
            alert("Something went wrong");
        }
    };

  return (
    <Layout>
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          name="name"
          value={formData.name}
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />

        <input
          name="email"
          value={formData.email}
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <input
          name="password"
          value={formData.password}
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />

        <input
          name="phone"
          value={formData.phone}
          type="phone"
          placeholder="Enter your phone number"
          onChange={handleChange}
        />

        <textarea
          name="address"
          value={formData.address}
          rows="4"
          placeholder="Enter your address"
          onChange={handleChange}
        ></textarea>
        <button type="submit">
          Register
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default Register;