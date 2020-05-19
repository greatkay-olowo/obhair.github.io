import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Userprofile from "./pages/userprofile";
import Category from "./pages/category";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import TrackOrders from "./pages/trackorders";
import Footer from "./components/footer";

function App() {
  return (
    <main className="App" style={style}>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/userprofile/:id" component={Userprofile} />
        <Route path="/category/:id" component={Category} />
        <Route path="/product/:id" component={Product} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/trackorders/:id" component={TrackOrders} />
      </Switch>
      <Footer />
    </main>
  );
}

const style = {
  backgroundColor: "#F8F8F8",
};

export default App;
