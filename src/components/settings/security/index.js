import React from "react";
import { Box, Typography } from "@mui/material";

const SecuritySettings = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">Security Settings</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Manage security settings and access controls.
      </Typography>
    </Box>
  );
};

export default SecuritySettings;
