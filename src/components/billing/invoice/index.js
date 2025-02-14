import React from "react";
import { Box, Typography } from "@mui/material";

const InvoicesPage = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">Invoices</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>List of all invoices will appear here.</Typography>
    </Box>
  );
};

export default InvoicesPage;
