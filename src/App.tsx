import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";

function App() {
  const [curURl, setCurURL] = useState("/");

  const switchURL = (URL: string) => {
    setCurURL(URL);
  };
  console.log(curURl);
  return (
    <div className="App">
      <h2>Black Pink Booking Center</h2>
      <Navigation URL={curURl} setURL={switchURL} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
