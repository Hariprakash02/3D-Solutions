import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle Sign Out
  const handleSignOut = () => {
    handleMenuClose();
    navigate("/"); // Redirect to login page
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Glassy effect
        backdropFilter: "blur(10px)", // Blur effect
        WebkitBackdropFilter: "blur(10px)", // Safari compatibility
        color: "#333",
        paddingX: "2rem",
        boxShadow: "none",
        fontFamily: "Montserrat",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
        {/* Display Current Route */}
        <Typography variant="h6" sx={{ fontFamily: "Montserrat", fontWeight: 600 }}>
          {location.pathname === "/"
            ? "Home"
            : location.pathname
                .replace(/\//g, " / ") // Add spaces around slashes
                .replace(/([A-Z])/g, " $1") // Add spaces before capital letters
                .replace(/\s+/g, " ") // Remove extra spaces
                .trim()}
        </Typography>

        {/* User Profile Icon */}
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <AccountCircle sx={{ fontSize: "2.5rem" }} />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
