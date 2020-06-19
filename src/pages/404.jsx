import React from "react";
import { Link } from "react-router-dom";

import Layout from "../pages/layout";
import "./404.css";

const PageNotFound = () => {
  // let history = useHistory();
  return (
    <Layout>
      <main className="bsod container1">
        <h1 className="neg title">
          <span className="bg1">Error - 404</span>
        </h1>
        <p>An error has occured, to continue:</p>
        <p>
          * Return to our homepage.
          <br />* Send us an e-mail about this error and try later.
        </p>
        <nav className="nav1">
          &nbsp;|&nbsp;
          <Link to="/" className="link1">
            home
          </Link>
          &nbsp;|&nbsp;
        </nav>
      </main>
    </Layout>
  );
};

export default PageNotFound;
