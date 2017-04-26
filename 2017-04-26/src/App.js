import React, { Component } from 'react';
// cssをinputできるのは、webpackやってくれている

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: '',
    };
  }

  render() {

    // const items = this.state.items;
    const { items, text } = this.state;

    return (
      <div>
        <ul>
          <li>task1</li>
          <li>task2</li>
          <li>task3</li>
        </ul>
        <div>
          <input type='text' value={text} onChange={(e) => this.setState({ text: e.target.value })} />
          <input type='submit' value="Add" onClick={this.onClickAddButton.bind(this)} />
        </div>
      </div>
    );
  }

  onClickAddButton() {
    const { items, text } = this.state;
    if ( text == null || text.length == 0) { return; }

    // 新しい配列にする
    const newItems = items.concat([text]);
    this.setState({ items: newItems });
  }
}

export default App;
