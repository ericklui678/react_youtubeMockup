import React from 'react';
import { render } from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCSpWM1bCoc8y6gh0FZuqkhaPNSqMJM0Vw';

// Create a new component that will produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it in the DOM
render(<App />, document.querySelector('.container'));
