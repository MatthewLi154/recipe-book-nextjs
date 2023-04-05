import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="nav-div">
      <h2 className="navbar-icon">
        <Link href="/">Home</Link>
      </h2>
      <h2 className="navbar-icon">
        <Link href="/explore">Explore</Link>
      </h2>
      <input className="search-bar"></input>
      <h2 className="navbar-icon">
        <Link href="/login">Login</Link>
      </h2>
      <h2 className="navbar-icon">
        <Link href="/register">Register</Link>
      </h2>
    </div>
  );
}

export default Navbar;
