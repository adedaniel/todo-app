import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header
        style={{ textAlign: "center", color: "white", backgroundColor: "#333" }}
      >
        <h1 className="container">TodoList Header</h1>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={{ color: "white", textDecoration: "none" }} to="/about">
          About
        </Link>
      </header>
    </div>
  );
}
