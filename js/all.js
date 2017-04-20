import React from "react";
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>hello, {this.props.name}</div>
    );
  }
}

function init() {
  const mountNode = document.getElementById("app");

  ReactDOM.render(<Hello name="gyo" />, mountNode);
}

document.addEventListener("DOMContentLoaded", init);
