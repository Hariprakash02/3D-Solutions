import React from "react";
import { Box, Typography } from "@mui/material";

const QuotationPage = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">Quotations</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>List of all quotation payment transactions.</Typography>
    </Box>
  );
};

export default QuotationPage;
