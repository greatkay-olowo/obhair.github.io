import React from "react";
import Layout from "./layout";
import { Link } from "react-router-dom";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Productcard from "../components/productcard";
import "./section.css";
import Slider from "react-slick";
import URL1 from "../img/1.jpg";
import URL2 from "../img/2.jpg";
import URL3 from "../img/3.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const array = [1, 2, 3, 4, 6, 7, 8, 9, 10];

  return (
    <Layout>
      <div>
        <Slider {...settings}>
          <div>
            <img src={URL1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={URL2} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={URL1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={URL2} alt="" className="img-fluid" />
          </div>{" "}
          <div>
            <img src={URL1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={URL2} alt="" className="img-fluid" />
          </div>{" "}
          <div>
            <img src={URL1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={URL2} alt="" className="img-fluid" />
          </div>{" "}
          <div>
            <img src={URL1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={URL2} alt="" className="img-fluid" />
          </div>{" "}
          <div>
            <img src={URL1} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={URL2} alt="" className="img-fluid" />
          </div>
        </Slider>
      </div>

      {/* new section */}
      {/* new items */}
      <div className="card-margin">
        <div className="card shadow custom-card">
          <div className="card-body ">
            <h1 className="header align-middle custom-header">New Items</h1>

            <div className="scrolling-wrapper">
              {array.map((item) => (
                <Productcard
                  key={item}
                  name="New Item"
                  price="200"
                  URL={URL3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end of new items */}
      {/* Straight Hair items */}
      <div className="card-margin">
        <div className="card shadow custom-card">
          <div className="card-body ">
            <h1 className="header align-middle custom-header">
              Straight Hair
              <Link
                className=" float-right custom-header-link "
                to="/category/Straight-Hair"
              >
                SEE MORE &#8594;
              </Link>
            </h1>
            <div className="scrolling-wrapper">
              {array.map((item) => (
                <Productcard
                  key={item}
                  name="Straight Hair we jsut received today Straight Hair we jsut received today Straight Hair we jsut received today "
                  price="200"
                  URL={URL3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end of  Straight Hair items */}
      {/* Curly Hair items */}
      {""}
      {/* end of  Straight Hair items */}
      {/* Eye Lash items */}
      {""}
      {/* end of  Eye Lash items */}

      {/* Glue items */}
      {""}
      {/* end of  Glue items */}
    </Layout>
  );
};

export default Home;
