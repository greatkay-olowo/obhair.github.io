import React, { useEffect, useState, lazy, Suspense } from "react";
import Layout from "./layout";

// import SmallProductCard from "../components/smallerProductCard";
import "./section.css";
import axios from "axios";
import Spinner from "../components/spinner";
const SmallProductCard = lazy(() => import("../components/smallerProductCard"));

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/product").then((data) => {
      setProducts(data.data);
    });
  }, []);

  const homeProduct = products.filter((product) => product.frontPage);

  return (
    <Layout>
      <p>Hello Obi</p>
      {/* new items */}
      <div className="card-margin">
        <div className="card shadow custom-card">
          <div className="card-body ">
            <h1 className="header align-middle custom-header">New Items</h1>

            <div className="scrolling-wrapper">
              {homeProduct.map((item) => (
                <Suspense fallback={<Spinner />}>
                  <SmallProductCard item={item} key={item._id} />
                </Suspense>
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
