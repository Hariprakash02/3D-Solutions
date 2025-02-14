import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import {
  DashboardCircleIcon,
  BitcoinReceiptIcon,
  Settings02Icon,
  UserStar02Icon,
  Comment02Icon,
  BorderFullIcon,
} from "../../assets/icons/index.js";
import CardComponent from "./cards/cards.js";
import Dashboardbutton from "./Buttons/Button.js";

const Dashboard = () => {
  
  return (
    <Box >
      {/* Header */}
      <Typography sx={{ mb: 3, fontSize: '32px', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
        Overview
      </Typography>
      <Box sx={{maxWidth:"88rem"}}>
      <CardComponent/>
      </Box>

      {/* Additional Insights */}
      <Typography sx={{ mt: 2, mb: 2, fontSize: '32px', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
        Insights
      </Typography>

      <Box sx={{maxWidth:"88rem"}}>
      <CardComponent/>
      </Box>


      <Typography sx={{ mt: 2, mb: 2, fontSize: '32px', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
        Report
      </Typography>
      <Box sx={{maxWidth:"88rem"}}>
      <CardComponent />
      </Box>

      <Typography sx={{ mt: 2, mb: 2, fontSize: '32px', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
        Client
      </Typography>
      <Box sx={{maxWidth:"88rem" }}>
      <CardComponent/>
      </Box> 
      <Box sx={{mt:10}}><Dashboardbutton/></Box>
    </Box>
  );
};

export default Dashboard;
