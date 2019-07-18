import React from 'react';
import axios from 'axios';


import SearchBar from './SearchBar';

class App extends React.Component {

   onSearchSubmit(term) {
      axios.get('https://api.unsplash.com/search/photos', {
         params: {
            query: term
         },
         headers: {
            Authorization: 'Client-ID 2bc80e7e9d5635d68711dc8a5dfa8bb4411505837a209759a6c5a7124b2e822b',
         }
      });
   }
    
   render() {
      return (
         <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar 
               onSubmit={this.onSearchSubmit} //onSearchSubmit function passed as prop onSubmit to the Searchbar component
            />
         </div>
      );
   }

};

export default App;
