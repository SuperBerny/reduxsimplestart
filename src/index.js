import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = "AIzaSyD64SChCMQLuIpD1BChQ__hujK99Nz6NEE";

//Components
import Searchbar from './components/search_bar';

// Create a new component. This component should produce some HTML

//Take this component's generated HTML and put it on the page (in the DOM)

const App = () => {
  return  (
    <div>
      <Searchbar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))