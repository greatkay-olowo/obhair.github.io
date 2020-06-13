import React, { useEffect, useState } from "react";
import Layout from "./layout";
import axios from "axios";
import "./section.css";
import SmallProductCard from "../components/smallerProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [fecthedData, setFetchedData] = useState(false);

  useEffect(() => {
    axios.get("/product/home").then((data) => {
      setProducts(data.data);
      setFetchedData(true);
    });
  }, []);

  const fetchedData = (products) => {
    if (fecthedData) {
      for (let item of products) {
        console.log(item);
        return <SmallProductCard item={item} />;
      }
    }
  };

  return (
    <Layout>
      {/* new items */}
      <div className="card-margin">
        <div className="card shadow custom-card">
          <div className="card-body ">
            <h1 className="header align-middle custom-header">New Items</h1>
            {fetchedData(products)}
          </div>
        </div>
      </div>

      {/* end of new items */}
    </Layout>
  );
};

export default Home;
