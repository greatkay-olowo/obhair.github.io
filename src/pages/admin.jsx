import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import AdminOrders from "./adminorders";
import AdminCustomers from "./admincustomers";
import AdminProducts from "./adminproducts";

const Admin = () => {
  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/admin">
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin/cuhrefmers">
            Customers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin/products">
            Products
          </a>
        </li>
      </ul>
      <Switch>
        <Route path="/admin" component={AdminOrders} exact />
        <Route path="/admin/customers" component={AdminCustomers} />
        <Route path="/admin/products" component={AdminProducts} />
      </Switch>
    </div>
  );
};
export default Admin;
