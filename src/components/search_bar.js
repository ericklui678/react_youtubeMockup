import React, { Component } from 'react';

export default class SearchBar extends Component {
  // initializing state
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  updateTerm(term) {
    this.setState({ term });
    this.props.getSearchTerm(term);
  }
  // event handlers return event object so you can use something like
  render() {
    return (
      <div className='input-group'>
        <input className='form-control mb-2'
          value={ this.state.term }
          onChange={(e) => this.updateTerm(e.target.value)}/>
      </div>
    );
  }
}
