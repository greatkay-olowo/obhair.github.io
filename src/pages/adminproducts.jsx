import React from "react";
import DataTable from "../components/datatable";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const product = [
    {
      NAME: "Mango hair",
      CATEGORY: "straight hair",
      PRICE: [65, 70],
      INCHES: ['11"', '13"', '10"'],
      COLOUR: "Natural color",
      QTY: 302,
      EDIT: <Link to="/admin/product/:id">Edit</Link>,
      DELETE: (
        <Link className="text-danger" to="#">
          Delete
        </Link>
      ),
    },
  ];
  return (
    <div className="mt-5">
      <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Products</p>
      <hr />
      <Link className="btn btn-primary btn-sm" to="/admin/product/new">
        New Product
      </Link>
      <hr />
      <strong>All Products</strong>
      <DataTable data={product} sort1={"name"} sort2={"category"} sort3 />
    </div>
  );
};

export default AdminProducts;
