import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/index.js"; 
import Navbar from "../../components/common/navbar/index.js";  

const Layout = () => {
  const location = useLocation();

  // Hide Navbar for Login & Register Pages
  const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "auto" }}>
      {/* Sidebar */}
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginLeft: "20px" }}>
        {/* Navbar */}
        {!hideNavbar && <Navbar />}

        {/* Main Content */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          width:"100%"
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
