import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./layout";

import img from "../img/3.jpg";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#" style={style.bread}>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to="#" style={style.bread}>
              Straight Hair
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="#">Straight Hair 111</Link>
          </li>
        </ol>
      </nav>
      <Layout>
        <div className="card shadow">
          <div className="row">
            <div className="col-lg-6" style={style.imgContainer}>
              <div className="p-4">
                <img src={img} alt="" srcSet="" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-6" style={style.story}>
              <div className="p-4 ">
                <p style={style.header}>Straight Hair</p>
                <p style={style.info}>GBP 200</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Quantity
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Length
                    </span>
                  </div>
                  <select
                    name=""
                    id=""
                    type="number"
                    className="form-control"
                    //  value={quantity}
                    //  onChange={(e) => setQuantity(e.target.value)}
                  >
                    <option value="">12"</option>
                    <option value="">10"</option>
                    <option value="">8"</option>
                  </select>
                </div>
                <Link to="/checkout">
                  <button className="btn btn-primary round-pill col-12">
                    Add to Cart
                  </button>
                </Link>
                <hr className="pb-3" />

                <ul>
                  <p style={style.specsHeader}>SPECIFICATIONS</p>
                  <li style={style.li}>
                    SKU: <span style={style.liSpan}>FA203HB1IVIEMNAFAMZ</span>
                  </li>
                  <li style={style.li}>
                    Hair Type: <span style={style.liSpan}>Curly</span>
                  </li>
                  <li style={style.li}>
                    Skin Type: <span style={style.liSpan}>All Skin Types</span>
                  </li>
                  <li style={style.li}>
                    Color: <span style={style.liSpan}>Natural color</span>
                  </li>
                  <li style={style.li}>
                    Main Material: <span style={style.liSpan}>fibre</span>
                  </li>
                  <li style={style.li}>
                    Product Line:{" "}
                    <span style={style.liSpan}>Goodnews Hairs</span>
                  </li>
                  <li style={style.li}>
                    Weight (kg): <span style={style.liSpan}>0.25</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </Layout>
    </div>
  );
};

const style = {
  imgContainer: {},
  story: {},
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    marginBottom: "3px",
  },
  info: {
    fontSize: "16px",
    margin: "0",
    padding: "0",
    marginBottom: "10px",
  },
  li: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    marginBottom: "2px",
  },
  liSpan: {
    fontWeight: "400",
  },
  bread: {
    color: "#007bff",
  },
  number: {
    width: "5rem",
  },
  specsHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
};

export default Product;
