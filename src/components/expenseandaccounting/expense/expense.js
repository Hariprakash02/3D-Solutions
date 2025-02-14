import React from "react";
import DynamicForm from "../../common/Dynamicform/Dynamicform";
import { Typography } from "@mui/material";


const formFields = [
  {
    name: "expenseType",
    label: "Expense Type",
    type: "select",
    options: [
      { label: "Please Select", value: "" },
      { label: "Office Supplies", value: "office_supplies" },
      { label: "Travel", value: "travel" },
      { label: "Utilities", value: "utilities" },
      { label: "Miscellaneous", value: "miscellaneous" },
    ],
    validation: { required: true },
  },
  { 
    name: "amount", 
    label: "Amount", 
    type: "number", 
    validation: { required: true } 
  },
  { 
    name: "date", 
    label: "Date", 
    type: "date", 
    validation: { required: true } 
  },
  {
    name: "paymentMode",
    label: "Payment Mode",
    type: "select",
    options: [
      { label: "Please Select", value: "" },
      { label: "Cash", value: "cash" },
      { label: "Credit Card", value: "credit_card" },
      { label: "Bank Transfer", value: "bank_transfer" },
    ],
    validation: { required: true },
  },
  { 
    name: "notes", 
    label: "Notes", 
    type: "text", 
    validation: { required: false } 
  },
];

const ExpenseForm = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div style={{width:'80%'}} className="form-container" >
      <Typography variant="h4" align="center" sx={{ fontFamily: "Montserrat", 
marginBottom: 5 }}>
Expense Entry Form
</Typography>
      
      <DynamicForm formFields={formFields} onSubmit={handleSubmit} formTitle="Expense Entry Form" />
    </div>
  );
};

export default ExpenseForm;
