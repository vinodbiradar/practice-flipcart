import React from "react";
import "./Header.css";
import logoImage from "./../../Assets/flipkart-logo.png";
import { Link } from "react-router-dom";
import Add from "../Adds/Add";
import Product from "../Products/Product";
import ProductList from "../Products/ProductList";

const Header = () => {
  return (
    <>
      <products />
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link to="/" className="navbar-brand" href="#">
          <img className="logo" src={logoImage} />
        </Link>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Login <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                Register <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/more" className="nav-link">
                More <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/cart" className="nav-link">
                Cart <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <Add />
      <Product />
      <ProductList />
    </>
  );
};

export default Header;
