import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar bg-danger container">
        <h4>
          <Link to="/" className="link">
            Home
          </Link>
        </h4>
        <h4 className="link">
          <Link to="/notes" className="link">
            Notes
          </Link>
        </h4>
        <h4 className="link">
          <Link to="/create" className="link">
            Create Note
          </Link>
        </h4>
      </nav>
    </div>
  );
}

export default NavBar;
