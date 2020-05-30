import React from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/datatable";

const AdminOrders = () => {
  const orders = [
    {
      DATE: Date.now(),
      PRODUCT: "Long Hair",
      CUSTOMER: "Lilian",
      STATUS: "Shipped",
      "MORE DETAILS": <Link to="/admin/order/view">View</Link>,
    },
  ];
  return (
    <div className="mt-5">
      <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Products</p>
      <DataTable data={orders} sort1={"Product"} sort2={"Category"} sort3 />
    </div>
  );
};

export default AdminOrders;
