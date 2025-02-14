import React from "react";
import DynamicForm from "../../common/Dynamicform/Dynamicform";
import { Box, Typography } from "@mui/material";

const leadFormFields = [
  { name: "leadName", label: "Lead Name", type: "text" },
  { name: "contactPerson", label: "Contact Person", type: "text" },
  { name: "phoneNumber", label: "Phone Number", type: "text" },
  { name: "email", label: "Email", type: "email" },
  {
    name: "leadSource",
    label: "Lead Source",
    type: "select",
    options: [
      { label: "Website", value: "website" },
      { label: "Referral", value: "referral" },
      { label: "Advertisement", value: "advertisement" }
    ]
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "New", value: "new" },
      { label: "In Progress", value: "in_progress" },
      { label: "Converted", value: "converted" }
    ]
  },
  { name: "notes", label: "Notes", type: "textarea" }
];

const handleLeadSubmit = (values) => {
  console.log("Lead Form Submitted:", values);
};

const LeadForm = () => (
  <Box sx={{width:'80%'}}>
    <Typography variant="h4" align="center" sx={{ fontFamily: "Montserrat", marginBottom: 10 }}>
    Lead Entry Form
      </Typography>
    <DynamicForm formFields={leadFormFields} onSubmit={handleLeadSubmit} />
    </Box>
);

export default LeadForm;
