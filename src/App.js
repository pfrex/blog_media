import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import BlogPost from "./BlogPost";
import FileUpload from "./FileUpload";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <FileUpload />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </React.Fragment>
  );
}

export default App;
