import React from "react";
import DataTable from "../components/datatable";

const AdminProducts = () => {
  return (
    <div className="mt-5">
      <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Products</p>
      <hr />
      <button className="btn btn-primary btn-sm">New Product</button>
      <hr />
      <strong>All Products</strong>
      <DataTable />
    </div>
  );
};

export default AdminProducts;
