import React from "react";
import { FaHome, FaUser, FaCog, FaChartLine, FaBell, FaEnvelope } from "react-icons/fa";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const buttons = [
  { label: "Home", icon: <FaHome size={20} />, className: "btn-home" },
  { label: "User", icon: <FaUser size={20} />, className: "btn-user" },
  { label: "Settings", icon: <FaCog size={20} />, className: "btn-settings" },
  { label: "Analytics", icon: <FaChartLine size={20} />, className: "btn-analytics" },
  { label: "Notifications", icon: <FaBell size={20} />, className: "btn-notifications" },
  { label: "Messages", icon: <FaEnvelope size={20} />, className: "btn-messages" },
];

const Dashboardbutton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : isTablet ? "80%" : "87rem",
        margin: "auto",
        padding: isMobile ? "15px" : "20px",
        textAlign: "center",
      }}
    >
      {/* <Typography
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: isMobile ? "24px" : "30px",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Dashboard
      </Typography> */}

      <Grid container spacing={2} sx={{ marginTop: "13px" }}>
        {buttons.map((btn, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Button
              sx={{
                mb: 2,
                fontFamily: "'Montserrat', sans-serif",
                width: "100%",
                borderRadius: "5px",
                padding: "20px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                color: "black",
                backgroundColor: "white",
                
              }}
            >
              {btn.icon}
              <span>{btn.label}</span>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboardbutton;
