import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login.js";
import Traslate from "./Traslate.js";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout.js";


function Nav() {
  
  const [serachNavStorage, setSearchNavStorage] = useState("");

  function handleSearchInput(e){
    setSearchNavStorage(e.target.value);
    console.log(serachNavStorage);
  }
  
  useEffect(() => {
    const data = window.localStorage.getItem('SEACH_NAV');
    console.log(data);
    if ( data !== null ) setSearchNavStorage(JSON.parse(data));
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('SEACH_NAV', JSON.stringify(serachNavStorage));
    console.log(serachNavStorage);
  }, [serachNavStorage]);
  
  const { user } = useAuth0();
  console.log(user);

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
                <Login />
              </li>
              <li className="nav-item btn">
                <LogoutButton />
              </li>
            </ul>
            <form className="d-flex col-ms-8" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={serachNavStorage}
                onChange={(e) => handleSearchInput(e)}
              />
              <button className="btn btn-outline-success" type="submit" onClick={() => setSearchNavStorage()}>
                Search
              </button>
            </form>
            <div className="nav-item border-success rounded d-flex justify-content-center mx-2 border">
              <Traslate />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
