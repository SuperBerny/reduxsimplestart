import React from 'react';
import axios from 'axios';


import SearchBar from './SearchBar';

class App extends React.Component {

   state = {
      images: []
   }

   // using async/await
   async onSearchSubmit(term) {
     const response = await axios.get('https://api.unsplash.com/search/photos', {
         params: {
            query: term
         },
         headers: {
            Authorization: 'Client-ID 2bc80e7e9d5635d68711dc8a5dfa8bb4411505837a209759a6c5a7124b2e822b',
         }
      });
      console.log(this);
      this.setState({images: response.data.results}); //here this is actually bound to the props object on the SearchBar component
   }

   render() {
      return (
         <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
         </div>
      );
   }

};

export default App;
