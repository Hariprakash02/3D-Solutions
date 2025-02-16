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
const cardsData = {
  Overview: [
    { icon: <FiUsers size={50} color="#38BDF8" />, title: "Total Users", value: "1,200", valueColor: "#FFFFFF", backgroundColor: "#1E3A8A", path: "/nav" },
    { icon: <FiDollarSign size={50} color="#22C55E" />, title: "Total Revenue", value: "₹50,000", valueColor: "#FFFFFF", backgroundColor: "#064E3B", path: "/dashboard" },
    { icon: <FiBell size={50} color="#F43F5E" />, title: "New Notifications", value: "25", valueColor: "#FFFFFF", backgroundColor: "#7F1D1D", path: "/notifications" },
    { icon: <FiUsers size={50} color="#FACC15" />, title: "Active Sessions", value: "340", valueColor: "#FFFFFF", backgroundColor: "#92400E", path: "/sessions" },
    { icon: <FiSmile size={50} color="#A78BFA" />, title: "Returning Users", value: "670", valueColor: "#FFFFFF", backgroundColor: "#4C1D95", path: "/returning-users" },
  ],
  Insights: [
    { icon: <FiSettings size={50} color="#F97316" />, title: "System Health", value: "Optimal", valueColor: "#FFFFFF", backgroundColor: "#7C2D12", path: "/system" },
    { icon: <FiSmile size={50} color="#A78BFA" />, title: "Customer Satisfaction", value: "92%", valueColor: "#FFFFFF", backgroundColor: "#4C1D95", path: "/satisfaction" },
    { icon: <FiUsers size={50} color="#F472B6" />, title: "New Leads", value: "112", valueColor: "#FFFFFF", backgroundColor: "#9D174D", path: "/leads" },
    { icon: <FiStar size={50} color="#FACC15" />, title: "Average Rating", value: "4.6", valueColor: "#FFFFFF", backgroundColor: "#713F12", path: "/ratings" },
    { icon: <FiBell size={50} color="#F43F5E" />, title: "Alert Count", value: "15", valueColor: "#FFFFFF", backgroundColor: "#7F1D1D", path: "/alerts" },
  ],
  Report: [
    { icon: <FiStar size={50} color="#FACC15" />, title: "Total Stars", value: "4.8", valueColor: "#FFFFFF", backgroundColor: "#713F12", path: "/dashboard" },
    { icon: <FiUsers size={50} color="#F472B6" />, title: "New Signups", value: "185", valueColor: "#FFFFFF", backgroundColor: "#831843", path: "/signups" },
    { icon: <FiDollarSign size={50} color="#22C55E" />, title: "Daily Revenue", value: "₹7,500", valueColor: "#FFFFFF", backgroundColor: "#065F46", path: "/revenue" },
    { icon: <FiSettings size={50} color="#F97316" />, title: "Pending Issues", value: "5", valueColor: "#FFFFFF", backgroundColor: "#7C2D12", path: "/issues" },
    { icon: <FiUsers size={50} color="#38BDF8" />, title: "Bounce Rate", value: "3.4%", valueColor: "#FFFFFF", backgroundColor: "#1E40AF", path: "/bounce-rate" },
    { icon: <FiSmile size={50} color="#A78BFA" />, title: "Engagement Score", value: "85%", valueColor: "#FFFFFF", backgroundColor: "#4C1D95", path: "/engagement" },
  ],
  Client: [
    { icon: <FiUsers size={50} color="#38BDF8" />, title: "Active Clients", value: "350", valueColor: "#FFFFFF", backgroundColor: "#1E40AF", path: "/clients" },
    { icon: <FiSmile size={50} color="#22C55E" />, title: "Client Retention", value: "78%", valueColor: "#FFFFFF", backgroundColor: "#064E3B", path: "/client-retention" },
    { icon: <FiStar size={50} color="#FACC15" />, title: "Client Reviews", value: "1,220", valueColor: "#FFFFFF", backgroundColor: "#92400E", path: "/client-reviews" },
    { icon: <FiBell size={50} color="#F43F5E" />, title: "Client Requests", value: "48", valueColor: "#FFFFFF", backgroundColor: "#7F1D1D", path: "/client-requests" },
  ],
};

const Dashboard = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 3 }, fontFamily: "Montserrat, sans-serif" }}>
      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h5"
            sx={{
              mb: "5px",
              fontWeight: 500,
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "15px", sm: "17px", md: "19px" },
              color: "#000000",
            }}
          >
            {section.title}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardComponent
                cards={cardsData[section.title]} // Dynamically passing relevant cards
                isScrollable={section.isScrollable}
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
