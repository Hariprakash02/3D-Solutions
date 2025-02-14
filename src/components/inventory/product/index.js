import React from "react";
import { Box, Typography } from "@mui/material";

const ProductPage = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">Products</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>All the products will appear here.</Typography>
    </Box>
  );
};

export default ProductPage;
