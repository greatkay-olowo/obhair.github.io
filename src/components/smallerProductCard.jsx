import React from "react";
import { Link } from "react-router-dom";

const SmallerProductcard = ({ img, name, price, category, id }) => {
  return (
    <div className="mb-1 p-1 product-divs" style={style.borderTop}>
      <Link to={`/product/${id}`} style={style.flexItem}>
        <div className="card" style={style.card}>
          <div className="card-img-top">
            <img src={img} alt="..." style={style.cardImg} />
          </div>
          <div className="card-body p-0 m-0">
            <hr className="m-2" />
            <div className="card-text">
              <p style={style.productname} className="text-wrap">
                {name}
              </p>
              <p style={style.price}>${price}</p>
              <p style={style.category}>{category}</p>
              <button className="btn btn-primary btn-sm border-none mb-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const style = {
  card: {
    margin: "0",
    borderRadius: "0px ",
    width: "12rem ",
    MaxHeight: "20rem ",
    border: "none",
    display: "inline-block ",
  },

  pictureBox: {
    width: "250px",
  },

  cardImg: {
    maxWidth: "100%",
    maxHeight: " 100%",
    display: "block",
  },
  productname: {
    fontSize: "0.8",
    marginBottom: "0.2rem",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1rem",
    marginBottom: "0.2rem",
  },
  borderTop: {
    borderTop: "2px solid #007bff",
    margin: "10px 1px",
  },
  flexItem: {
    flex: "auto",
    padding: "10px",
  },
  category: {
    fontSize: "12px",
  },
};

export default SmallerProductcard;
