// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Box, Typography, Paper } from "@mui/material";

// ChartJS.register(ArcElement, Tooltip, Legend);
// const PieChartComponent = () => {
//   const data = {
//     labels: ["Products", "Sales Today", "Revenue Collected"],
//     datasets: [
//       {
//         data: [30, 45, 25],
//         backgroundColor: ["#ff6347", "#3e95cd", "#32cd32"],
//         hoverBackgroundColor: ["#ff4500", "#1e90ff", "#228b22"],
//       },
//     ],
//   };

//   return (
//     <Box sx={{ textAlign: "center", mt: 5, width: "100%" }}>
//       <Typography variant="h5" gutterBottom>
//         Sales Overview
//       </Typography>
//       <Paper elevation={3} sx={{ p: 2, display: "inline-block" }}>
//         <Box sx={{ width: 250, margin: "auto" }}>
//           <Pie data={data} width={500} height={250} options={{ maintainAspectRatio: false }} />
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default PieChartComponent;