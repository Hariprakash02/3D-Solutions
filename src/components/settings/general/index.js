import React from "react";
import { Box, Typography } from "@mui/material";

const GeneralSettings = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">General Settings</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Modify general system settings here.
      </Typography>
    </Box>
  );
};

export default GeneralSettings;
