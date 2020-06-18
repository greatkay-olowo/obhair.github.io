import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="col-12 footer-section mt-5">
      <div className="container">
        <hr className="p-1 m-1" />
        <div className="row">
          <div className="col-lg-4 footer-section">
            <ul>
              <li className=" text-primary footer-section-header">Products</li>
              <li className="list">
                <Link className="" to="/category/Straight-Hair">
                  Straight Hair
                </Link>
              </li>
              <li className="list">
                <Link className="" to="/category/Curly-Hair">
                  Curly Hair
                </Link>
              </li>
              <li className="list">
                <Link className="" to="/category/Eye-Lash">
                  Eye Lash
                </Link>
              </li>
              <li className="list">
                <Link className="" to="/category/Glue">
                  Glue
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4   footer-section">
            <ul>
              <li className="text-primary footer-section-header">socials</li>
              <li className="list">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social list"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social list"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social list"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 footer-section">
            <ul>
              <li className="text-primary footer-section-header">Contact Us</li>
              <li className="list">+442222222222</li>
              <li className="list">1, Wessex Kingdom, England</li>
            </ul>
          </div>
        </div>

        <p className="mb-1 text-center">&copy; 2017-2018 Company Name</p>
      </div>
    </div>
  );
};

export default Footer;
