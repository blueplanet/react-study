import React from "react";
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'initialize data',
    };
  }

  render() {
    return (
      <div>
        hello, {this.state.name}
        <br />
        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
      </div>
    );
  }
}

function init() {
  const mountNode = document.getElementById("app");

  ReactDOM.render(<Hello name="gyo" />, mountNode);
}

document.addEventListener("DOMContentLoaded", init);
