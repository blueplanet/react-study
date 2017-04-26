import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// cssをinputできるのは、webpackやってくれている

const ENTER_KEY = 13;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: '',
    };
  }

  componentDidUpdate(preProps, preState) {
    this.focusInputNeeded(preState);
  }

  focusInputNeeded(preState) {
    if (preState.items.length < this.state.items.length) {
      const realInput = ReactDOM.findDOMNode(this.refs.input);
      realInput.focus();
    }
  }

  render() {

    // const items = this.state.items;
    const { items, text } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <div>
          <input
            type='text'
            ref='input'
            value={text}
            onChange={(e) => this.setState({ text: e.target.value })}
            onKeyUp={this.onKeyUpInput.bind(this)}
          />
          <input type='submit' value="Add" onClick={this.onClickAddButton.bind(this)} />
        </div>
      </div>
    );
  }

  onClickAddButton() {
    const { items, text } = this.state;
    if ( text == null || text.length == 0) { return; }

    this.addItem();
  }

  onKeyUpInput(e) {
    if (e.keyCode === ENTER_KEY) {
      this.addItem();
    }
  }

  addItem() {
    const { items, text } = this.state;
    const newItems = items.concat(text);
    this.setState({ items: newItems, text: '' });
  }
}

export default App;
