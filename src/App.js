import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import Category from "./pages/category";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import Footer from "./components/footer";

function App() {
  return (
    <main className="App" style={style}>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/category/:id" component={Category} />
        <Route path="/product/:id" component={Product} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </main>
  );
}

const style = {
  backgroundColor: "#F8F8F8",
};

export default App;
