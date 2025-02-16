import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "../../components/sidebar/index.js"; 
import Navbar from "../../components/common/navbar/index.js";  

const Layout = () => {
  const location = useLocation();
  
  // Hide Navbar for Login & Register Pages
  const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#F2F2F2", width: "100vw", overflowX: "hidden", scrollbarWidth: "none", 
      "&::-webkit-scrollbar": { display: "none" } }}>
      <CssBaseline />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", width: "100%", overflowX: "hidden", scrollbarWidth: "none", 
        "&::-webkit-scrollbar": { display: "none" } }}>
        {/* Navbar */}
        {!hideNavbar && <Navbar />}

        {/* Page Content */}
        <Box sx={{ flex: 1, padding: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
