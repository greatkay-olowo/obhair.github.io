import React from "react";
import { Link } from "react-router-dom";
import "./productCard.css";

const Productcard = ({ URL, name, price, pURL }) => {
  return (
    <div className="mb-1  product-divs" style={style.bTop}>
      <Link to={"/product/111"} style={style.item}>
        <div className="card" style={style.card}>
          <img src={URL} alt="..." className="card-img-top" />

          <div className="card-body p-0 m-0">
            <hr className="m-2" />
            <div className="card-text">
              <p style={style.productname} className="text-truncate">
                {name}
              </p>
              <p style={style.price}>${price}</p>
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
    height: "17rem",
    border: "none",
    padding: "10px",
  },

  pictureBox: {
    width: "250px",
  },

  cardImg: {
    maxWidth: "100%",
    maxHeight: "100%",
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
  bTop: {
    display: "inline-block ",
    margin: " 10px",
    padding: "0px",
  },
  item: {
    padding: "5px",
  },
};

export default Productcard;
