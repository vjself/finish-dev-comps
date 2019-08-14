import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  disableButton = () => {
    let button = document.getElementById("btn-4");
    button.disabled = "disabled";
    button.innerText = "Disabled";
  };

  render() {
    return (
      <div className="outer-cont">
        <p>
          The buttons in this container will be positioned to the top "left",
          "right" and also the same on the bottom with "absolute" relative to
          their outer container set as "relative" meaning relative to itself.
        </p>
        <br />
        <div className="box">
          <Link to="/tee/0">
            <button id="btn-1" className="btn">
              T-Shirt 1
            </button>
          </Link>
          <Link to="/tee/1">
            <button id="btn-2" className="btn">
              T-Shirt 2
            </button>
          </Link>
          <Link to="/tee/2">
            <button id="btn-3" className="btn">
              T-Shirt 3
            </button>
          </Link>
          <button
            id="btn-4"
            onClick={() => {
              this.disableButton();
            }}
          >
            Enabled button - Click me to disable.
          </button>
        </div>
        <br />
        <p className="nthchild-desc">
          These will be colored by the nth-child selector with css by odd and
          evens.
        </p>
        <div className="yo" />
        <div className="yo" />
        <div className="yo" />
        <div className="yo" />
      </div>
    );
  }
}
