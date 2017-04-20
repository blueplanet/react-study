import React from "react";
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>hello</div>
    );
  }
}

function init() {
  const mountNode = document.getElementById("app");

  ReactDOM.render(<Hello />, mountNode);
}

document.addEventListener("DOMContentLoaded", init);
