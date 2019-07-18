import React from 'react';

class SearchBar extends React.Component {

   state = { term: '' };

   onFormSubmit = (e) => {
      e.preventDefault();

      this.props.onSubmit(this.state.term);  
      //accessing props object where the onSubmit prop is stored
      //onSubmit will run the onSearchSubmit function on the App component
      //onSubmit takes an parameter of term which is where you add term from state on the Searchbar component and pass it to the App component
   }

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Image Search</label>
                  <input 
                     type="text" 
                     value={this.state.term} 
                     onChange={e => this.setState({ term: e.target.value })}
                  />
               </div>
            </form>
         </div>
      );
   }
};

export default SearchBar;