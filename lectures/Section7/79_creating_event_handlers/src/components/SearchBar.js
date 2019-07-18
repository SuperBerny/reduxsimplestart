import React from 'react';

class SearchBar extends React.Component {

   // for onInputChange method, the name of the method doesn't matter however the property name must be onChange

   onInputChange(event) {
      console.log(event.target.value);
   }

   onInputClick() {
      console.log('Input was clicked');
   }

   render() {
      return (
         <div className="ui segment">
            <form className="ui form" action="">
               <div className="field">
                  <label htmlFor="">Image Search</label>
                  <input type="text" onClick={this.onInputClick} onChange={this.onInputChange} />
                  {/* 
                    <input type="text" onChange={this.onInputChange()}/>
                    Import to note that if you add () to a method that is referenced by a prop you calling that method when the component is rendered
                  */}    
               </div>
            </form>
         </div>
      );
   }
};


export default SearchBar;