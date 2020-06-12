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
import ErrorBoundry from "../components/errorBoundary";

const MainApp = () => {
  // open/close login modal

  return (
    <div style={style}>
      <Nav />

      <Switch>
        <ErrorBoundry>
          <Route path="/" component={Home} exact />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/login" component={Login} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/register" component={Register} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/userprofile/:id" component={Userprofile} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/straighthair" component={StraightHair} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/curlyhair" component={CurlyHair} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/eyelash" component={EyeLash} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/glue" component={Glue} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/product/:id" component={Product} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/checkout" component={Checkout} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="/orders" component={Orders} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Route path="*" component={PageNotFound} />
        </ErrorBoundry>
      </Switch>

      <Footer />
    </div>
  );
};

const style = {
  backgroundColor: "#F8F8F8",
};

export default MainApp;
