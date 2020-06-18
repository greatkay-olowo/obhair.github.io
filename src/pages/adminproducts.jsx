import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "../components/alert";

let alertMessage = "";
const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    axios.get("/product").then((data) => {
      setProducts(data.data);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`/product/${id}`).then((res) => {
      if (res.data.Status === "success") {
        window.location = "/admin/products";
      } else {
        setAlert(true);
        alertMessage = res.data.Message;
      }
    });
  };

  return (
    <div className="mt-5">
      {alert && <Alert>{alertMessage}</Alert>}
      <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Products</p>
      <hr />
      <Link className="btn btn-primary btn-sm" to="/admin/newproduct">
        New Product
      </Link>
      <hr />
      <strong>All Products</strong>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Length</th>
            <th scope="col">Colour</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <th scope="row">{product.name}</th>
              <th scope="col">{product.category}</th>
              <th scope="col">{product.length}</th>
              <th scope="col">{product.color}</th>
              <th scope="col ">
                <Link
                  to={`/admin/product/${product._id}`}
                  className="text-primary"
                >
                  Edit
                </Link>
              </th>
              <th scope="col ">
                <Link
                  className="text-danger"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteProduct(product._id);
                  }}
                >
                  {" "}
                  Delete
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
