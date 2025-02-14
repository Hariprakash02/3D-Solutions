import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Box, useMediaQuery } from "@mui/material";
import { FiUsers, FiDollarSign, FiSettings, FiSmile, FiStar, FiBell } from "react-icons/fi";

const cards = [
  { icon: <FiUsers size={50} color="#2563eb" />, title: "Total Users", value: "1,200", valueColor: "primary.main", path: "/nav" },
  { icon: <FiDollarSign size={50} color="#16a34a" />, title: "Total Revenue", value: "₹50,000", valueColor: "success.main", path: "/dashboard" },
  { icon: <FiSettings size={50} color="#f97316" />, title: "System Health", value: "Good", valueColor: "warning.main", path: "/dashboard" },
  { icon: <FiSmile size={50} color="#7c3aed" />, title: "User Satisfaction", value: "90%", valueColor: "secondary.main", path: "/dashboard" },
  { icon: <FiStar size={50} color="#fbbf24" />, title: "Total Stars", value: "4.8", valueColor: "info.main", path: "/dashboard" },
  { icon: <FiBell size={50} color="#ef4444" />, title: "Notifications", value: "10", valueColor: "error.main", path: "/dashboard" },
];

const CardComponent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}>
      <Grid container spacing={2} justifyContent="center" sx={{ flexWrap: isSmallScreen ? "wrap" : "nowrap", display: "flex" }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ minWidth: isSmallScreen ? "100%" : "355px" }}>
            <Link to={card.path} style={{ textDecoration: "none" }}>
              <Card sx={{ display: "flex", backgroundColor: "white", alignItems: "center", padding: 2, gap: 2 ,border:"none",boxShadow:"none"}}>
                {card.icon}
                <CardContent>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", fontSize: isSmallScreen ? "1rem" : "1.2rem" }}>{card.title}</Typography>
                  <Typography sx={{ fontFamily: "'Montserrat', sans-serif", color: card.valueColor, fontSize: isSmallScreen ? "0.9rem" : "1.1rem" }}>{card.value}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardComponent;
