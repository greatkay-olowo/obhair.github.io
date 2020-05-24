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
          <Link className="nav-link active" to="/admin">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/customers">
            Customers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/products">
            Products
          </Link>
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
