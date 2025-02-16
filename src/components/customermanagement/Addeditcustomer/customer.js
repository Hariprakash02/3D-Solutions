import React from "react";
import DynamicForm from "../../common/Dynamicform/Dynamicform";
import { Box, Typography } from "@mui/material";

const customerFormFields = [
  { name: "customerName", label: "Customer Name", type: "text" },
  { name: "contactNumber", label: "Contact Number", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "address", label: "Address", type: "text" },
  { name: "gstNumber", label: "GST Number", type: "text" },
  {
    name: "businessType",
    label: "Business Type",
    type: "select",
    options: [
      { label: "Retail", value: "retail" },
      { label: "Wholesale", value: "wholesale" }
    ]
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" }
    ]
  }
];

const handleCustomerSubmit = (values) => {
  console.log("Customer Form Submitted:", values);
};

const CustomerForm = () => (
  <Box sx={{ width: '100%', padding: '20px' }}>
    <Typography variant="h6" sx={{ fontFamily: "Montserrat", marginBottom: 5 }}>
      Add/Edit Customer Form
    </Typography>
    <DynamicForm formFields={customerFormFields} onSubmit={handleCustomerSubmit} />
  </Box>
);

export default CustomerForm;
