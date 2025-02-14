import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./routes/layout/index.js";
import AuthPage from "./components/auth/index.js";
import Dashboard from "./components/dashboard/index.js";
import Invoices from "./components/billing/invoice/index.js";
import Payments from "./components/billing/payments/index.js";
import GeneralSettings from "./components/settings/general/index.js";
import SecuritySettings from "./components/settings/security/index.js";
import QuotationPage from "./components/billing/quotation/index.js";
import ProductPage from "./components/inventory/product/index.js";
import Nav from "./components/dashboard/cards/Nav.js";
import AddEditProductForm from "./components/inventory/product/productform/productform.js";
import StockAdjustmentForm from "./components/inventory/StockAdjustment/stockadjustment.js";
import WarehouseTransferForm from "./components/inventory/warehouseform/warehouseform.js";
import UserForm from "./components/User Management/useraddedit/UserAddEdit.js";
import RoleForm from "./components/User Management/formpermission/formpermission.js";
import MachineMaintenanceForm from "./components/machineservice/machinemaintenancerequest/maintanance.js";
import ToolReplacementForm from "./components/machineservice/toolreplacement/toolreplacement.js";
import VendorForm from "./components/suppliervendor/vendor/addeditvendor.js";
import PurchaseOrderForm from "./components/suppliervendor/productorder/productorder.js";
import SupplierPaymentForm from "./components/suppliervendor/supplierpayment/supplierpayment.js";
import PaymentReceiptForm from "./components/expenseandaccounting/paymentreceipt/paymentreceipt.js";
import ExpenseForm from "./components/expenseandaccounting/expense/expense.js";
import CustomerForm from "./components/customermanagement/Addeditcustomer/customer.js";
import LeadForm from "./components/customermanagement/leadmanagement/leadmanagement.js";
import FeedbackForm from "./components/customermanagement/feedbackandcomplaints/feedbackcomplaint.js";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Uses AuthPage for Login/Register */}
        <Route path="/" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />

        {/* Protected Routes - Uses Layout with Sidebar/Navbar */}
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="billing/invoices" element={<Invoices />} />
          <Route path="billing/payments" element={<Payments />} />
          <Route path="billing/quotations" element={<QuotationPage />} />
          <Route path="inventory/products" element={<ProductPage />} />
          <Route path="settings/general" element={<GeneralSettings />} />
          <Route path="nav" element={<Nav />} />
          <Route path="settings/security" element={<SecuritySettings />} />
          <Route path="inventory/AddEditproducts" element={<AddEditProductForm />} />
          <Route path="inventory/stockadjustment" element={<StockAdjustmentForm />} />
          <Route path="inventory/warehouse" element={<WarehouseTransferForm />} />
          <Route path="AddEditUser/userFormFields" element={<UserForm />} />
          <Route path="RolePermission/RoleForm" element={<RoleForm />} />
          <Route path="service/machinemaintanance" element={<MachineMaintenanceForm />} />
          <Route path="service/toolReplacementField" element={<ToolReplacementForm />} />
          <Route path="suppliervendor/VendorForm" element={<VendorForm />} />
          <Route path="suppliervendor/PurchaseOrderForm" element={<PurchaseOrderForm />} />
          <Route path="suppliervendor/SupplierPaymentForm" element={<SupplierPaymentForm />} />
          <Route path="expenseaccounting/ExpenseForm" element={<ExpenseForm />} />
          <Route path="expenseaccounting/PaymentReceiptForm" element={<PaymentReceiptForm />} />
          <Route path="customermanagemnet/CustomerForm" element={<CustomerForm />} />
          <Route path="customermanagemnet/LeadForm" element={<LeadForm />} />
          <Route path="customermanagemnet/FeedbackForm" element={<FeedbackForm />}/>

        </Route>

        {/* Catch-All Route for Undefined Pages */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />


      </Routes>
    </Router>
  );
};

export default App;
