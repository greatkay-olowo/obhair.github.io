import React, { useState, useEffect } from "react";
// import DataTable from "../components/datatable";
import { Link } from "react-router-dom";
// import ServerTable from "react-strap-table";
import axios from "axios";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/product").then((data) => {
      setProducts(data.data);
    });
  }, []);
  console.log(products);
  // const url = "/product";
  // const columns = ["ID", "Name", "Category", "Price"];
  // const options = {
  //   headings: { ID: "#", Name: "Name", Category: "Category", Price: "Price" },
  //   sortable: ["Name", "Category"],

  return (
    <div className="mt-5">
      <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Products</p>
      <hr />
      <Link className="btn btn-primary btn-sm" to="/admin/product/new">
        New Product
      </Link>
      <hr />
      <strong>All Products</strong>
      {/* <ServerTable
        columns={columns}
        url={url}
        options={options}
        bordered
        hover
      /> */}
    </div>
  );
};

export default AdminProducts;
