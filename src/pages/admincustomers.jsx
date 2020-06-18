import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios.get("/customer").then((data) => setCustomers(data.data));
  }, []);
  return (
    <>
      <div className="mt-5">
        <p style={{ fontSize: "20px", fonrWeight: "bold" }}>Customers</p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col"> Phone</th>
              <th scope="col">Orders</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <th scope="row">{customer.name}</th>
                <th scope="col">{customer.address}</th>
                <th scope="col">{customer.email}</th>
                <th scope="col">{customer.phone}</th>
                <th scope="col ">
                  <Link
                    to={`/admin/customer/${customer._id}`}
                    className="text-primary"
                  >
                    Orders
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminCustomers;
