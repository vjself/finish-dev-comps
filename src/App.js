import React from "react";
import { Link } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>T-Shirtzzzz</h1>
        <br />
        ("Fixed header")
        <Link to="/" className="links">
          Home
        </Link>
      </div>
      <br />
      <main>{routes}</main>
    </div>
  );
}

export default App;
