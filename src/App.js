import React from "react";
import { Switch, Route } from "react-router-dom";
// const MainApp = lazy(() => import("./pages/mainapp"));
import MainApp from "./pages/mainapp";
import Admin from "./pages/admin";

function App() {
  return (
    <main className="App" style={style}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/">
          <Switch>
            <MainApp />
          </Switch>
        </Route>
      </Switch>
    </main>
  );
}

const style = {
  backgroundColor: "#F8F8F8",
};

export default App;
