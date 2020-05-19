import React from "react";
import Layout from "./layout";
import SmallerProductCard from "../components/smallerProductCard";
import URL from "../img/3.jpg";
import { Link } from "react-router-dom";
import "../components/productCard.css";

const Category = ({ match }) => {
  const header =
    match.params.id === "Straight-Hair"
      ? "Straight Hair"
      : match.params.id === "Curly-Hair"
      ? "Curly Hair"
      : match.params.id === "Eye-Lash"
      ? "Eye Lash"
      : "Glue";

  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              {header}
            </h2>
          </div>
          <br />
          {/* products */}
          <div style={style.flexContainer}>
            {count.map((item) => (
              <SmallerProductCard
                key={item}
                name="Straight Hair we jsut received today Straight Hair we jsut received today Straight Hair we jsut received today "
                price="200"
                URL={URL}
                category={header}
              />
            ))}
          </div>
          {/* pagination */}
          {/* <nav aria-label="Page navigation example mt-5 text-center">
            <ul class="pagination">
              <li class="page-item">
                <Link class="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
          */}
          {/* end of pagination */}
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
