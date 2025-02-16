import React from "react";
import { FaHome, FaUser, FaCog, FaChartLine, FaBell, FaEnvelope } from "react-icons/fa";
import { Box, Button, Typography } from "@mui/material";

const buttons = [
  { label: "Home", icon: <FaHome size={20} /> },
  { label: "User", icon: <FaUser size={20} /> },
  { label: "Settings", icon: <FaCog size={20} /> },
  { label: "Analytics", icon: <FaChartLine size={20} /> },
  { label: "Notifications", icon: <FaBell size={20} /> },
  { label: "Messages", icon: <FaEnvelope size={20} /> },
];

const Dashboardbutton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {buttons.map((btn, index) => (
        <Button
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "10px",
            backgroundColor: "#2596be",
            color: "white",
            flex: "1 1 200px",
            maxWidth: "300px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "none", // Slight shadow
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#1565c0", // Slightly darker blue on hover
              transform: "translateY(-2px)",
              boxShadow: "none",
            },
          }}
        >
          {btn.icon}
          <Typography variant="body1">{btn.label}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default Dashboardbutton;
