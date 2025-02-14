import React from "react";
import DynamicForm from "../../common/Dynamicform/Dynamicform";
import { Box, Typography } from "@mui/material";

const feedbackFormFields = [
  {
    name: "customerName",
    label: "Customer Name",
    type: "select",
    options: [
      { label: "Customer A", value: "customer_a" },
      { label: "Customer B", value: "customer_b" }
    ]
  },
  {
    name: "issueCategory",
    label: "Issue Category",
    type: "select",
    options: [
      { label: "Billing", value: "billing" },
      { label: "Service", value: "service" },
      { label: "Product Quality", value: "product_quality" }
    ]
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Pending", value: "pending" },
      { label: "Resolved", value: "resolved" },
      { label: "Closed", value: "closed" }
    ]
  },
  { name: "complaintDetails", label: "Complaint Details", type: "textarea" },
  { name: "attachments", label: "Attachments", type: "file", },
  
];

const handleFeedbackSubmit = (values) => {
  console.log("Feedback Form Submitted:", values);
};

const FeedbackForm = () => (
  <Box sx={{height:'100%' ,width:'80%' }}>
    <Typography variant="h4" align="center" sx={{ fontFamily: "Montserrat", marginBottom: 10 }}>
    Customer Feedback/Complaint Form
      </Typography>
    <DynamicForm  formFields={feedbackFormFields} onSubmit={handleFeedbackSubmit} />
  </Box>
);

export default FeedbackForm;
