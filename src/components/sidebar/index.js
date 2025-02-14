import React, { useState } from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Box, IconButton, AppBar, Toolbar } from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../routes/index.js"; // Changed the file extension to .js
import Logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (itemName) => {
    setOpenSections((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const currentPath = window.location.pathname;

  const drawerContent = (
    <List sx={{ padding: 0 }}>
      {/* Logo Section */}
      <Box display="flex" alignItems="center" justifyContent="center" height={80} sx={{ padding: "10px" }}>
        <img src={Logo} alt="Company Logo" style={{ maxWidth: "150px", maxHeight: "60px" }} />
      </Box>

      <hr style={{ margin: "10px 0", border: "1px solid #ddd" }} />

      {/* Generate Sidebar Items Dynamically */}
      {appRoutes.map((route) => {
        const isChildSelected = route.subRoutes?.some((sub) => currentPath === sub.route);
        const isSelected = currentPath === route.route;

        return (
          <React.Fragment key={route.itemName}>
            {route.subRoutes ? (
              <>
                {/* Parent Button */}
                <ListItemButton
                  onClick={() => handleToggle(route.itemName)}
                  sx={{
                    backgroundColor: isChildSelected ? "#e8f5e9" : "transparent", // Highlight only if child is selected
                    "&:hover": { backgroundColor: "#c8e6c9" },
                  }}
                >
                  <ListItemIcon sx={{ color: isChildSelected ? "#388e3c" : "inherit" }}>
                    {React.createElement(route.icon, { size: 24 })}
                  </ListItemIcon>
                  <ListItemText primary={route.itemName} />
                  {openSections[route.itemName] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* Sub-Menu Items */}
                <Collapse in={openSections[route.itemName]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {route.subRoutes.map((subRoute) => {
                      const isSubSelected = currentPath === subRoute.route;
                      return (
                        <ListItemButton
                          key={subRoute.route}
                          sx={{
                            pl: 4,
                            backgroundColor: isSubSelected ? "#c8e6c9" : "transparent", 
                            "&:hover": { backgroundColor: "#a5d6a7" },
                          }}
                          onClick={() => {
                            navigate(subRoute.route);
                            handleDrawerToggle();
                          }}
                        >
                          <ListItemIcon sx={{ color: isSubSelected ? "#388e3c" : "inherit" }}>
                            {React.createElement(subRoute.icon, { size: 24 })}
                          </ListItemIcon>
                          <ListItemText primary={subRoute.itemName} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItemButton
                sx={{
                  backgroundColor: isSelected ? "#c8e6c9" : "transparent", 
                 "&:hover": { backgroundColor: "#a5d6a7" },
                }}
                onClick={() => {
                  navigate(route.route);
                  handleDrawerToggle();
                }}
              >
                <ListItemIcon sx={{ color: isSelected ? "#388e3c" : "inherit" }}>
                  {React.createElement(route.icon, { size: 24 })}
                </ListItemIcon>
                <ListItemText primary={route.itemName} />
              </ListItemButton>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );

  return (
    <>
      {/* Top Navigation Bar with Toggle Button for Small Screens */}
      <AppBar position="fixed" sx={{ display: { md: "none" }, backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar for Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Sidebar for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {/* Close Button for Mobile Sidebar */}
        <Box sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer", zIndex: 1235 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
