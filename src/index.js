import _ from 'lodash'; // lodash used to throttle how often search is called
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

    this.getSearchTerm('surfboards');
  }

  getSearchTerm(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    // debounce calls getSearchTerm once every 300ms
    const videoSearch = _.debounce((term) => { this.getSearchTerm(term) }, 300);

    return (
      <div>
        <SearchBar getSearchTerm={ videoSearch }/>
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
