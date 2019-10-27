import React from 'react';
import logo from './logo.svg';
import './App.css';

// my imports
import Navbar from "./Navbar";
import BlogPost from './blogPost';
//import Footer from './Footer';// for copyright info
// also add a button that will take them to the top of the page if they scroll


// this is where I should compose all of my elements
function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <BlogPost/>
    <BlogPost/> 
    <BlogPost/>
    <BlogPost/>
    <BlogPost/>
    </React.Fragment>
  );
}

export default App; 


// the blog posts will be loaded dynamically from Firebase
// or should I use Redis or just write everything to a local file? 
// or implement a firestore document save solution? 
// use firebase storage for files and firestore for post? How could I associate the files in firebase storage to there corresponding firebase firestore content? 

// use drag and drop for the content and the images!
// remove the form content and instead add file upload.
// then the user can upload any type of text or image or video data 
// what about mobile users? maybe eventually add a text editor to allow formatting on mobile? 
// add any type of file and display it on the webpage somehow.


// use firestore fr the posts and storage for the videos and images
