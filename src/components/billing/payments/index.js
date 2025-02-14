import React from "react";
import { Box, Typography } from "@mui/material";

const PaymentsPage = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">Payments</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>List of all payment transactions.</Typography>
    </Box>
  );
};

export default PaymentsPage;
