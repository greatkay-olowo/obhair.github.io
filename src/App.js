import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Userprofile from "./pages/userprofile";
import StraightHair from "./pages/straighthair";
import CurlyHair from "./pages/curlyhair";
import EyeLash from "./pages/eyelash";
import Glue from "./pages/glue";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import Orders from "./pages/orders";
import Footer from "./components/footer";
import PageNotFound from "./pages/404.jsx";

function App() {
  return (
    <main className="App" style={style}>
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
    </main>
  );
}

const style = {
  backgroundColor: "#F8F8F8",
};

export default App;
