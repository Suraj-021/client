import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
  const [Count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);

    Count === 0 && navigate("/login", { state: location.pathname });
    return () => clearInterval(interval);
  }, [Count, navigate, location]);
  return (
    <div>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
        <h1>Redirecting you in {Count} seconds</h1>
      </div>
    </div>
  );
};

export default Spinner;
