import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CardComponent from "./cards/cards.js";
import Dashboardbutton from "./Buttons/Button.js";
import { FiUsers, FiDollarSign, FiSettings, FiSmile, FiStar, FiBell } from "react-icons/fi";
import "@fontsource/montserrat";

const sections = [
  { title: "Overview", isScrollable: true },
  { title: "Insights", isScrollable: false },
  { title: "Report", isScrollable: true },
  { title: "Client", isScrollable: false },
];

// Dynamic Data for Cards
const cards = [
  { icon: <FiUsers size={50} color="#2563eb" />, title: "Total Users", value: "1,200", valueColor: "#2563eb", path: "/nav" },
  { icon: <FiDollarSign size={50} color="#16a34a" />, title: "Total Revenue", value: "₹50,000", valueColor: "#16a34a", path: "/dashboard" },
  { icon: <FiSettings size={50} color="#f97316" />, title: "System Health", value: "Good", valueColor: "#f97316", path: "/dashboard" },
  { icon: <FiSmile size={50} color="#7c3aed" />, title: "User Satisfaction", value: "90%", valueColor: "#7c3aed", path: "/dashboard" },
  { icon: <FiStar size={50} color="#fbbf24" />, title: "Total Stars", value: "4.8", valueColor: "#fbbf24", path: "/dashboard" },
  { icon: <FiBell size={50} color="#ef4444" />, title: "Notifications", value: "10", valueColor: "#ef4444", path: "/dashboard" },
];

const Dashboard = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 3 }, fontFamily: "Montserrat, sans-serif" }}>
      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: { xs: 3, md: 4} }}>
          <Typography
            variant="h5"
            sx={{
              mb: "5px",
              fontWeight: 500,
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "15px", sm: "17px", md: "19px" },
            }}
          >
            {section.title}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Pass different scroll behaviors per section */}
              <CardComponent cards={cards} isScrollable={section.isScrollable} />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
