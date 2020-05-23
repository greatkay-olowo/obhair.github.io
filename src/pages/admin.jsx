import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import AdminOrders from "./adminorders";

const Admin = () => {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/admin">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Customers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Products
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={AdminOrders} />
      </Switch>
    </div>
  );
};
export default Admin;
