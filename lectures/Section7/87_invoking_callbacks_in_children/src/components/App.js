import React from 'react';

import SearchBar from './SearchBar';

class App extends React.Component {

   onSearchSubmit(term) {
      console.log(`${term} was passed from the SearchBar component to the App component`);
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
