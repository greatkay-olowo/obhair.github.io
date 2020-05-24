import React from "react";
import Layout from "./layout";
import Productcard from "../components/productcard";
import "./section.css";
import URL3 from "../img/3.jpg";

const Home = () => {
  const array = [1, 2, 3, 4, 6, 7, 8, 9, 10];

  return (
    <Layout>
      <p>Hello Obi</p>
      {/* new items */}
      <div className="card-margin">
        <div className="card shadow custom-card">
          <div className="card-body ">
            <h1 className="header align-middle custom-header">New Items</h1>

            <div className="scrolling-wrapper">
              {array.map((item) => (
                <Productcard
                  key={item}
                  name="New Item"
                  price="200"
                  URL={URL3}
                  category="Frontals"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end of new items */}
    </Layout>
  );
};

export default Home;
