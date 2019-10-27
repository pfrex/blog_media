import React from "react";
//import "./navStyles.css";
//import imgSrc from "./bike_bar.png";


// get this looking good on mobile, remove the picture if neccesary 
let content = "Welcome to Nathan's blog";



function Navbar() {
    return (
      <nav className="p-3 bg-primary text-black text-center">
      <h1 style={{cursor:"pointer"}}><a className="text-white" href="index.html" style={{textDecoration:"none"}}>{content}</a></h1>
      <div className="row text-center p-3">
           <h4 className="col" style={{cursor:"pointer"}}><a className="text-dark" href="index.html" style={{textDecoration:"none"}}>{"About"}</a></h4>
           <h4 className="col" style={{cursor:"pointer"}}><a className="text-dark" href="index.html" style={{textDecoration:"none"}}>{"Products"}</a></h4>
           <h4 className="col" style={{cursor:"pointer"}}><a className="text-dark" href="index.html" style={{textDecoration:"none"}}>{"Contact"}</a></h4>
      </div>
      </nav>
    );
  }
  
  export default Navbar;

  // ok I am definetly over thinking this get a decent app with great functionality built
  // focus on the back end? 

/*


<a class="navbar-brand mb-0 h1" href="#">{content}</a>
           <div>
           <a class="navbar-brand mb-0 h1" href="#">{"About"}</a>
           <a class="navbar-brand mb-0 h1" href="#">{"Products"}</a>
           <a class="navbar-brand mb-0 h1" href="#">{"Contact"}</a>
           </div>


// get this looking good on mobile, remove the picture if neccesary 
let content = "Welcome to Nathan's blog";

function Navbar() {
    return (
      <div className="navBar">
           <h1 className="interSpace">{content}</h1>
           
      </div>
    );
  }
  */
  /*
        <div>
              {content}
              <img class="imgClass" src={imgSrc} alt="Bike on road that leads through a forest." width="128" height="128"></img>
          </div>
          */
