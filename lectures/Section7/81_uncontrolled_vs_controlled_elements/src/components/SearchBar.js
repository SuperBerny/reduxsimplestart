import React from 'react';

class SearchBar extends React.Component {

   state = { term: '' };

   onFormSubmit = (e) => {
      e.preventDefault();

      console.log(this.state.term);
   }

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label htmlFor="">Image Search</label>
                  {/* currently the input element is an uncontrolled element */}
                  {/* <input type="text" onChange={(e) => console.log(event.target.value)} /> */}

                  {/* now the input is a controlled element*/}
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