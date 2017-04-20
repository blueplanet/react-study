import React from "react";
import PropTypes from 'prop-types';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.initializeName
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

Hello.propTypes = {
  initializeName: PropTypes.string.isRequired
};

export default Hello;
