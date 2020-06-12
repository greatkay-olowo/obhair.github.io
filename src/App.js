import React, { useState, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// const MainApp = lazy(() => import("./pages/mainapp"));
import MainApp from "./pages/mainapp";
import Admin from "./pages/admin";
import ErrorBoundry from "./components/errorBoundary";

function App() {
  return (
    <main className="App" style={style}>
      <Switch>
        <ErrorBoundry>
          <Route path="/admin" component={Admin} />
        </ErrorBoundry>
        <Route path="/">
          <Switch>
            <ErrorBoundry>
              <MainApp />
            </ErrorBoundry>
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
