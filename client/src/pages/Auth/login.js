import React from "react";
import { useState } from "react";
import "./register.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Layout from "../../components/Layout/Layout.js";
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useAuth();
    const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyloginData = { ...loginData };
    copyloginData[name] = value;
    setloginData(copyloginData);
  };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if(!loginData.email || !loginData.password){
            alert("Please fill all the fields");
            return;
        }
        const url  = "https://thorough-tranquility-production-dca2.up.railway.app/api/auth/login";
         const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });
        const result = await response.json();
        if(result.success){
            setAuth({
                ...auth,
                user: result.user,
                token: result.token,
            });
            alert(result.message);
            console.log(result);
            localStorage.setItem("auth", JSON.stringify({
                user: result.user,
                token: result.token,
            }));
            setTimeout(() => {
                navigate( location.state || "/");
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
        <h1>Login</h1>

        <input
          name="email"
          value={loginData.email}
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <input
          name="password"
          value={loginData.password}
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default Login;