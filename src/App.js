import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";
function App() {
  const [display, setDisplay] = useState(true);
  const [content, setcontent] = useState("");
  const handlechange = (data) => {
    console.log(data.content);
    data.content !== undefined
      ? setcontent(data.content)
      : setcontent("ADD content here");
  };
  return (
    <Router>
      <div className="container">
        <nav>
          <div onClick={() => setDisplay(!display)}>
            <i className="las la-bars"></i>
          </div>
          <div className="search-bar">
            <input type="search" placeholder="Search" />
          </div>
          <div className="profile">shaiksha</div>
        </nav>
        <div className="inner-container">
          <div className="left">
            {display && <Navbar handlechange={handlechange} />}
          </div>
          <div className="right">
            <Content content={content} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
