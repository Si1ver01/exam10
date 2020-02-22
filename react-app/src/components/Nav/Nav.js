import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-primary">
      <Link to="/" className="navbar-brand" href="#">
        News
      </Link>
      <Link
        to="/form"
        className="btn btn-outline-warning d-flex align-items-center"
      >
        Add new post
        <MdAdd size="1.5em" className="ml-1" />
      </Link>
    </nav>
  );
};

export default Nav;
