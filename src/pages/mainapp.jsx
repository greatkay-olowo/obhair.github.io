import React, { useState, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// const MainApp = lazy(() => import("./pages/mainapp"));
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Userprofile from "../pages/userprofile";
import StraightHair from "../pages/straighthair";
import CurlyHair from "../pages/curlyhair";
import EyeLash from "../pages/eyelash";
import Glue from "../pages/glue";
import Product from "../pages/product";
import Checkout from "../pages/checkout";
import Orders from "../pages/orders";
import PageNotFound from "../pages/404";
import Spinner from "../components/spinner";
import Nav from "../components/nav";
// const Nav = lazy(() => import("../components/nav"));
import Footer from "../components/footer";
// const Footer = lazy(() => import("../components/footer"));

const MainApp = () => {
  // open/close login modal

  return (
    <div style={style}>
      <Nav />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/userprofile/:id" component={Userprofile} />
        <Route path="/straighthair" component={StraightHair} />
        <Route path="/curlyhair" component={CurlyHair} />
        <Route path="/eyelash" component={EyeLash} />
        <Route path="/glue" component={Glue} />
        <Route path="/product/:id" component={Product} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="*" component={PageNotFound} />
      </Switch>

      <Footer />
    </div>
  );
};

const style = {
  backgroundColor: "#F8F8F8",
};

export default MainApp;
