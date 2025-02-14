import React, { useState } from "react";
import DynamicForm from "../../common/Dynamicform/Dynamicform";
import { Box, Typography } from "@mui/material";

const toolReplacementField = [
  { name: "oldToolName", label: "Old Tool Name", type: "select", options: [
      { label: "Tool A", value: "toolA" },
      { label: "Tool B", value: "toolB" }
    ], validation: { required: true } 
  },
  { name: "newToolName", label: "New Tool Name", type: "select", options: [
      { label: "Tool X", value: "toolX" },
      { label: "Tool Y", value: "toolY" }
    ], validation: { required: true } 
  },
 
  { name: "approvalStatus", label: "Approval Status", type: "select", options: [
      { label: "Pending", value: "pending" },
      { label: "Approved", value: "approved" },
      { label: "Rejected", value: "rejected" }
    ], validation: { required: true } 
  },
  { name: "reason", label: "Reason for Replacement", type: "textarea", validation: { required: true } },
];

const ToolReplacementForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (values) => {
    console.log("Tool Replacement Data:", { ...values, ...formData });
  };

  return ( 
    <Box sx={{width:'80%'}}> 
  <Typography variant="h4" align="center" sx={{ fontFamily: "Montserrat", marginBottom: 5 }}>
        Tool Replacement Form
      </Typography>
  
  <DynamicForm
      formFields={toolReplacementField}
      onSubmit={handleSubmit}
      formTitle="Tool Replacement Form"
      formData={formData}
      onChange={handleChange}
    />
    
    </Box>
  
  );
};

export default ToolReplacementForm;
