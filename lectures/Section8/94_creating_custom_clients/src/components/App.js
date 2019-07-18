import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';

class App extends React.Component {

   state = {
      images: []
   }

   // using async/await
   onSearchSubmit = async (term) => {
     const response = await unsplash.get('/search/photos', {
         params: { query: term }
      });
      
      this.setState({images: response.data.results}); //this is now bound to the onSearchSubmit function
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
