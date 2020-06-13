import React, { useEffect, useState, Suspense } from "react";
import Layout from "./layout";
import axios from "axios";
import ErrorBoundry from "../components/errorBoundary";
import Spinner from "../components/spinner";
import Alert from "../components/alert";
import "./section.css";
// import SmallProductCard from "../components/smallerProductCard";
const SmallProductCard = React.lazy(() =>
  import("../components/smallerProductCard")
);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

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

            <div className="scrolling-wrapper">
              {products.map((item) => (
                <ErrorBoundry>
                  <Suspense fallback={<Spinner />} key={item._id}>
                    <SmallProductCard item={item} key={item._id} />
                  </Suspense>
                </ErrorBoundry>
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
