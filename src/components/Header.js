import logo from "./logo.svg";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Header() {
  return (
    <div class="comtainer bg-success">
      <div class="col-md-2 offset-2 mt-5">
        <img
          src="tree.jpg"
          class="img img-thumbnail img-fluid mt-5"
          width="50"
          height="50"
        ></img>
      </div>
      <div class="col-md-5 offset-6 mt-n5">
        <nav class="navbar navbar-expand-md text-white">
          <ul class="navbar-nav nav">
            <li class="nav-item">
              <a class="nav-link text-white">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
