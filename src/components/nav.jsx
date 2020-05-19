import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
        <Link className="navbar-brand" to="/">
          <strong className="bold large">
            <span className="bold text-warning">OB</span>Hair
          </strong>
        </Link>
        <div className="ml-3 mr-3">
          <Link to="/checkout">
            <span className="cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge badge-danger">3</span>
            </span>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <NavLink
                className={"nav-link custom-nav-link"}
                activeStyle={{
                  borderBottomColor: "2px solid #007bff",
                  color: "#007bff",
                }}
                to="/category/Straight-Hair"
                exact
              >
                Straight Hair
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link custom-nav-link"
                activeStyle={{ color: "#007bff" }}
                to="/category/Curly-Hair"
                exact
              >
                Curly Hair
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={"nav-link custom-nav-link"}
                activeStyle={{
                  borderBottomColor: "2px solid #007bff",
                  color: "#007bff",
                }}
                to="/category/Eye-Lash"
                exact
              >
                Eye Lash
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={"nav-link custom-nav-link"}
                activeStyle={{
                  borderBottomColor: "2px solid #007bff",
                  color: "#007bff",
                }}
                to="/category/Glue"
                exact
              >
                Glue
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <Link className="nav-link custom-nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link custom-nav-link" to="/login">
              Login
            </Link>
          </ul>
          <ul className="navbar-nav">
            <li
              className="nav-item dropdown"
              style={{ margin: "0 10px", fontWeight: "bold" }}
            >
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Kayode
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/userprofile/22">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/trackorders/22">
                  Track Orders
                </Link>
                <Link className="dropdown-item" to="#">
                  Purchase History
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Logout
                </Link>
              </div>
            </li>
          </ul>

          {/* on large screens */}
          <div className="d-none d-lg-block">
            <form className="form-inline my-2 my-lg-0 shadow nav--search-form">
              <input
                className="form-control mr-sm-2  nav--search-form--input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 nav--search-form--button"
                type="submit"
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="shadow d-lg-none d-xl-none " style={style.searchWrapper}>
        <div className="">
          {/* search on smaller screen */}

          <input
            type="text"
            className="col-sm-12 rounded-pill form-control shadow"
            style={style.search}
            placeholder="Search for Products here"
          />
        </div>
      </div>
    </>
  );
};
const style = {
  searchWrapper: {
    margin: "0",
    padding: "0 !important",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    background: "#FFF",
  },

  search: {
    border: "2px solid #dcdcdc",
    borderRadius: "6px",
  },
};
export default Nav;
