import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        backgroundColor: "#f7f7f7",
        color: "#333",
        px: isSmallScreen ? 1 : 3, 
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end", mt: 1.5  }}>
        {/* User Profile Icon */}
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <AccountCircle sx={{ fontSize: isSmallScreen ? 36 : 42 }} />
        </IconButton>

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
