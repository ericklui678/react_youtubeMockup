import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCSpWM1bCoc8y6gh0FZuqkhaPNSqMJM0Vw';

// Create a new component that will produce some html
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className='row'>
          <VideoDetail video={ this.state.selectedVideo }/>
          <VideoList
            onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
            videos={ this.state.videos }/>
        </div>
      </div>
    );
  }
};

// Take this component's generated HTML and put it in the DOM
render(<App />, document.querySelector('.container-fluid'));
