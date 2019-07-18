import React from 'react';

class SearchBar extends React.Component {


   render() {
      return (
         <div className="ui segment">
            <form className="ui form" action="">
               <div className="field">
                  <label htmlFor="">Image Search</label>
                  <input type="text" onChange={(e) => console.log(e.target.value)} />
                  {/* on an event handler method if what needs to be done require a single line of code it's a common practice to add it to the property within the render method.
                  */}
               </div>
            </form>
         </div>
      );
   }
};

export default SearchBar;