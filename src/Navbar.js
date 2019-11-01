import React from "react";

let content = "Welcome to Nathan's blog";

function Navbar() {
  return (
    <nav className="p-3 bg-primary text-black text-center">
      <h1 style={{ cursor: "pointer" }}>
        <a
          className="text-white"
          href="index.html"
          style={{ textDecoration: "none" }}
        >
          {content}
        </a>
      </h1>
      <div className="row text-center p-3">
        <h4 className="col" style={{ cursor: "pointer" }}>
          <a
            className="text-dark"
            href="index.html"
            style={{ textDecoration: "none" }}
          >
            {"About"}
          </a>
        </h4>
        <h4 className="col" style={{ cursor: "pointer" }}>
          <a
            className="text-dark"
            href="index.html"
            style={{ textDecoration: "none" }}
          >
            {"Products"}
          </a>
        </h4>
        <h4 className="col" style={{ cursor: "pointer" }}>
          <a
            className="text-dark"
            href="index.html"
            style={{ textDecoration: "none" }}
          >
            {"Contact"}
          </a>
        </h4>
      </div>
    </nav>
  );
}

export default Navbar;
