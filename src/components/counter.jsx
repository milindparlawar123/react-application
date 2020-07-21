import React, { Component } from "react";
class Counter extends Component {
  //state object
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
  };
  styles = { fontSize: 25, fontWeight: "bold" };
  render() {
    React.createElement("div");
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""></img>  */}
        <span style={this.styles} className="badge badge-primary m-2">
          {" "}
          {this.formatCount()} milind here!!!
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  formatCount() {}
}

export default Counter;
