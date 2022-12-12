import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.js"


function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light sticky border-bottom">
        <div class="container-fluid">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4135/4135890.png"
              width="50px"
              height="50px"
              alt="icon"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/activities">
                  Activities
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link mt-1" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/cart">
                  Cart
                </Link>
              </li>
                <li className="nav-item btn">   
              <Login/>
              </li>
            </ul>
            <form className="d-flex col-ms-8" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
