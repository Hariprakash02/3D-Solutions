import { 
  DashboardCircleIcon,
  BitcoinReceiptIcon,
  CreditCardIcon,
  CreditCardAcceptIcon,
  Settings02Icon,
  InvoiceIcon,
  ShoppingCart02Icon,
  ProductLoadingIcon,
  SecurityIcon,
  Settings04Icon
} from "../assets/icons/index.js"; // Changed to .js extension

const appRoutes = [
  {
    itemName: "Dashboard",
    route: "/dashboard",
    icon: DashboardCircleIcon,
  },
  {
    itemName: "Customer Management",
    route: "/dashboard",
    icon: DashboardCircleIcon,
    subRoutes:[
      {
        itemName: "Add/Edit Customer",
        route: "/customermanagemnet/CustomerForm",
        icon: InvoiceIcon,
      },
      {
        itemName: "Lead Management",
        route: "/customermanagemnet/LeadForm",
        icon: InvoiceIcon,
      },
      {
        itemName: "Customer Feeback/Complaint",
        route: "/customermanagemnet/FeedbackForm",
        icon: InvoiceIcon,
      },
    ],
  },
  {
    itemName: "Sales And Management",
    icon: BitcoinReceiptIcon,
    subRoutes: [
      {
        itemName: "Quotation",
        route: "/billing/invoices",
        icon: InvoiceIcon,
      },
      {
        itemName: "Salesorder",
        route: "/billing/payments",
        icon: CreditCardIcon,
      },
      {
        itemName: "Invoice",
        route: "/billing/quotations",
        icon: CreditCardAcceptIcon,
      },
      {
        itemName: "Draft",
        route: "/billing/payments",
        icon: CreditCardIcon,
      },
      {
        itemName: "Payment Collection",
        route: "/billing/quotations",
        icon: CreditCardAcceptIcon,
      },
    ],
  },
  {
    itemName: "Supplier And Vendor Management",
    route: "/dashboard",
    icon: DashboardCircleIcon,
    subRoutes:[
      {
        itemName: "Add/EditVendor",
        route: "/suppliervendor/VendorForm",
        icon: InvoiceIcon,
      },
      {
        itemName: "Purchase Order",
        route: "/suppliervendor/PurchaseOrderForm",
        icon: InvoiceIcon,
      },
      {
        itemName: "Supplier Payment ",
        route: "/suppliervendor/SupplierPaymentForm",
        icon: InvoiceIcon,
      },
    ],
  },
  {
    itemName: "inventory Management",
    icon: ShoppingCart02Icon,
    subRoutes: [
      {
        itemName: "Add/Edit Products",
        route: "/inventory/AddEditproducts",
        icon: ProductLoadingIcon,
      },
      {
        itemName: "Stock Adjustment",
        route: "/inventory/stockadjustment",
        icon: ProductLoadingIcon,
      },
      {
        itemName: "Warehouse Transfer",
        route: "/inventory/warehouse",
        icon: ProductLoadingIcon,
      },
    ],
  },
  {
    itemName: "Expense And Accounting",
    route: "/dashboard",
    icon: DashboardCircleIcon,
    subRoutes:[
      {
        itemName: "Expense",
        route: "/expenseaccounting/ExpenseForm",
        icon: InvoiceIcon,
      },
      {
        itemName: "Payment Receipt",
        route: "/expenseaccounting/PaymentReceiptForm",
        icon: InvoiceIcon,
      },
    ],
  },
  {
    itemName: "User Management",
    route: "/dashboard",
    icon: DashboardCircleIcon,
    subRoutes:[
      {
        itemName: "AddEditUser",
        route: "/AddEditUser/userFormFields",
        icon: InvoiceIcon,
      },
      {
        itemName: "RolePermission",
        route: "/RolePermission/RoleForm",
        icon: InvoiceIcon,
      },
    ],
  },
  {
    itemName: "Service And Maintanance Management ",
    route: "/dashboard",
    icon: DashboardCircleIcon,
    subRoutes:[
      {
        itemName: "Machine Maintanance Request",
        route: "/service/machinemaintanance",
        icon: InvoiceIcon,
      },
      {
        itemName: "Tool Replacement",
        route: "/service/toolReplacementField",
        icon: InvoiceIcon,
      },
    ],
  },
  {
    itemName: "Settings",
    icon: Settings04Icon,
    subRoutes: [
      {
        itemName: "General",
        route: "/settings/general",
        icon: Settings02Icon,
      },
      {
        itemName: "Security",
        route: "/settings/security",
        icon: SecurityIcon,
      },
    ],
  },
];

export default appRoutes;
