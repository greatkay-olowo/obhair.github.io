import React, { useEffect, useState } from "react";
import Layout from "./layout";
import axios from "axios";
import "./section.css";
import SmallProductCard from "../components/smallerProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/product/home").then((data) => {
      setProducts(data.data);
    });
  }, []);

  console.log({ products });

  return (
    <Layout>
      {/* new items */}
      <div className="card-margin">
        <div className="card shadow custom-card">
          <div className="card-body ">
            <h1 className="header align-middle custom-header">New Items</h1>
            <div className="scrolling-wrapper" style={{ display: "flex" }}>
              {products.map((item) => (
                <SmallProductCard item={item} key={item._id} />
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
