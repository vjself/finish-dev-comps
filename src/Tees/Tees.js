import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./tees.css";

class Tees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tShirts: [],
      modalDisplay: false,
      input: ""
    };
  }
  imageStyle = {
    height: "200px",
    width: "200px"
  };

  textStyle = {
    height: "30px",
    width: "200px",
    marginLeft: "20px"
  };

  buttonStyle = {
    margin: "20px"
  };

  openModal = () => {
    this.setState({
      modalDisplay: !this.state.modalDisplay
    });
  };

  handleInputChange = val => {
    this.setState({
      input: val
    });
  };

  updateDescription = (description, id) => {
    axios.put(`/api/updateDescription/${id}`, { description }).then(res => {
      this.setState({
        tShirts: res.data
      });
    });
  };

  componentDidMount() {
    axios.get(`/api/getTees?tee=${this.props.match.params.id}`).then(res => {
      this.setState({
        tShirts: res.data
      });
    });
  }

  render() {
    let shirtz = this.state.tShirts.map((e, i) => {
      return (
        <div className="tees-display" key={i}>
          <h3>{e.title}</h3>
          <br />
          <img style={this.imageStyle} src={e.image} alt="Missing!" />
          <br />
          <span>{e.description}</span>
          <br />
          <br />
          This edit button will grow when clicked due to the "focus" pseudo
          selectory within the css file attached to this component.
          <br />
          <button
            id="edit-button"
            style={this.buttonStyle}
            onClick={() => {
              this.openModal();
            }}
          >
            Edit description?
          </button>
          {this.state.modalDisplay === true && (
            <input
              placeholder="Press enter when done."
              onKeyPress={e => {
                e.key === "Enter" && this.updateDescription(e.target.value, i);
              }}
              style={this.textStyle}
              onChange={e => {
                this.setState({
                  input: e.target.value
                });
              }}
            />
          )}
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Back
          </button>
        </div>
      );
    });
    return <div className="tees-display">{shirtz}</div>;
  }
}

export default withRouter(Tees);
