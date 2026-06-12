import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';


const Spinner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [count , setCount] = React.useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    count === 0 && navigate("/login",{state: location.pathname});
    return () => clearInterval(interval);
  }, [count, navigate, location]);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default Spinner
