import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/alert";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState();
  const [alert, setAlert] = useState();

  let alertMessage = "";

  useEffect(() => {
    axios.get("/order/all").then((data) => setOrders(data.data));
  }, []);

  const saveStatus = (e, id) => {
    e.preventdefault();
    const data = {
      status: status,
    };

    axios.put(`/product/${id}`, data).then((res) => {
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
      <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Orders</p>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Products</th>
            <th scope="col">Status</th>
            <th scope="col"> View</th>
            <th scope="col"> Change Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <th scope="row">{order.date}</th>
              <th scope="col">{order.customer}</th>
              <th scope="col">{order.product}</th>
              <th scope="col">{order.quantity}</th>
              <th scope="col">{order.price}</th>
              <th scope="col">{order.status}</th>
              <th scope="col ">
                <Link to={`/admin/order/${order._id}`} className="text-primary">
                  Orders
                </Link>
              </th>
              <th scope="col ">
                <select
                  className="form-control"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
                <button
                  className="btn btn-outline btn-primary btn-sm"
                  onClick={saveStatus(order._id)}
                >
                  Save
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
