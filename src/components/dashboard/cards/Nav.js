import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Typography, margin } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);
const Nav = () => {
  const data = {
    labels: ["Products", "Sales Today", "Revenue Collected"],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ["#ff6347", "#3e95cd", "#32cd32"],
        hoverBackgroundColor: ["#ff4500", "#1e90ff", "#228b22"],
      },
    ],
  };

  return (
    <Box sx={{ textAlign: "start", mt: 5 , marginLeft:5 }}>
      <Typography variant="h5" gutterBottom>
        Sales Overview
      </Typography>
      <Box sx={{ p: 2, display: "flex" }}>
        <Box sx={{ width: 500 ,mt:4}}>
          <Pie data={data} width={500} height={250} options={{ maintainAspectRatio: false }} />
        </Box>
      </Box>
    </Box>
  );
};


export default Nav;