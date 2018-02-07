import React, { Component } from 'react';

export default class SearchBar extends Component {
  // initializing state
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  // event handlers return event object so you can use something like
  // e.target.value
  render() {
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={e => this.setState({ term: e.target.value })}/>
      </div>
    );
  }
}
