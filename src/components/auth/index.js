import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "./login/index.js";
import Register from "./register/index.js";
import Logo from "../../assets/images/logo.png"; // Import the logo

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use location to track current path
  const isLogin = location.pathname === "/"; // Check current route

  const toggleAuth = () => {
    navigate(isLogin ? "/register" : "/"); // Toggle between Login and Register
  };

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on large
      }}
    >
      {/* Left Side - Logo Display */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          padding: "20px",
          height: { xs: "40vh", md: "90vh" }, // Adjust height for mobile
        }}
      >
        <img
          src={Logo}
          alt="Company Logo"
          style={{ maxWidth: "60%", height: "auto" }}
        />
      </Box>

      {/* Right Side - Login/Register Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          height: "90vh",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          {isLogin ? <Login toggleAuth={toggleAuth} /> : <Register toggleAuth={toggleAuth} />}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
