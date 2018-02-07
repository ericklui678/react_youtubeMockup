import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCSpWM1bCoc8y6gh0FZuqkhaPNSqMJM0Vw';

// Create a new component that will produce some html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // syntactically sugar, { videos } same as { videos: videos }
      // used when key and property is the same name
      this.setState({ videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  }
};

// Take this component's generated HTML and put it in the DOM
render(<App />, document.querySelector('.container'));
