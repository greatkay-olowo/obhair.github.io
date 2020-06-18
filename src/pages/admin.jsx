import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminOrders from "./adminorders";
import AdminCustomers from "./admincustomers";
import AdminProducts from "./adminproducts";
import Product from "./admin-productview";
import NewProduct from "./admin-newProduct";
import Customer from "./admin-customerview";
import Order from "./admin-orderview";

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
          <a className="nav-link" href="/admin/customers">
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
        <Route path="/admin/customers" component={AdminCustomers} />
        <Route path="/admin/orders" component={AdminOrders} />
        <Route path="/admin/product/:id" component={Product} />
        <Route path="/admin/newproduct" component={NewProduct} />
        <Route path="/admin/customer/:id" component={Customer} />
        <Route path="/admin/order/:id" component={Order} />
      </Switch>
    </div>
  );
};

export default Admin;
