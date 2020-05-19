import React from "react";
import Layout from "./layout";

const Login = () => {
  return (
    <Layout>
      <div className="text-center col-lg-4 col-md-6 col-sm-12 mt-5 m-auto">
        <form
          className="form-signin"
          style={{ height: "50vh", marginTop: "2rem" }}
        >
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <br />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
