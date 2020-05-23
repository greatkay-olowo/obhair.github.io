import React from "react";
import Layout from "../pages/layout";
import SmallerProductCard from "./smallerProductCard";
import "../components/productCard.css";

const Category = ({ data }) => {
  return (
    <div>
      <Layout>
        <div
          className="container p-2 shadow"
          style={{ backgroundColor: "#FFF", borderRadius: "6px" }}
        >
          <div className="container">
            <h2
              className="p-0 m-0 p-1 text-center"
              style={{ fontSize: "1.2rem" }}
            >
              {data.title}
            </h2>
          </div>
          <br />
          {/* products */}
          <div style={style.flexContainer}>
            {data.map((item) => (
              <SmallerProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                URL={item.img}
                category={data.category}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

const style = {
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap ",
    justifyContent: "space-around",
    alignContent: "flex-start",
  },
};

export default Category;

// data = array of all product info
// data.header
// data.id
// data.name
// data.price
// data.img
// data.category
