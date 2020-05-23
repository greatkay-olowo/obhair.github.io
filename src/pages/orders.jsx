import React from "react";
import Layout from "./layout";
import OrderCard from "../components/ordercard";
import img from "../img/3.jpg";

const Order = () => {
  const product = {
    statusKey: "success",
    status: "DELIVERED",
    productName: "STRAIGHT HAIR",
    productQty: "123",
    productLength: '12"',
    productPrice: "300",
    img: img,
  };

  return (
    <Layout>
      <p>ORDERS</p>
      <hr />
      <OrderCard data={product} />
      <OrderCard data={product} />
      <OrderCard data={product} />
      <OrderCard data={product} /> <OrderCard data={product} />{" "}
      <OrderCard data={product} /> <OrderCard data={product} />{" "}
      <OrderCard data={product} /> <OrderCard data={product} />{" "}
      <OrderCard data={product} /> <OrderCard data={product} />{" "}
      <OrderCard data={product} /> <OrderCard data={product} />{" "}
      <OrderCard data={product} /> <OrderCard data={product} />{" "}
      <OrderCard data={product} />
    </Layout>
  );
};

export default Order;

// data;
// data.statusKey;
// data.status;
// data.productName;
// data.productQty;
// data.productLength;
// data.productPrice;
