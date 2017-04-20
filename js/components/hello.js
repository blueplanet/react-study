import React from "react";

export default class Hello extends React.Component {
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
