import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [show, setShow] = useState(false);
  const user = location.state?.user || null;
  
  

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              MyAdvocate
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                {/* <button class="btn  btn-style" type="submit">
                  Sign Up
                </button>
                 */}

                 
                {<p style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
        {user ? user.Name :(<Link to={`/login`} style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>login</Link>)}
      </p>}
                
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
