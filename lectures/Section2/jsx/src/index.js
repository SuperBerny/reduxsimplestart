// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {

   // const buttonText = { text: 'Click me' }; // cannot reference js object in JSX unless grabbing property
   const labelText = 'Enter Name:'
   const buttonText = { text: 'Click Me' };
   const style = {backgroundColor: 'blue', color: 'white'};

   return (
      <div>
         <label className="label" htmlFor="name">{labelText}</label>
         <input id="name" type="text" />
         <button style={style}>{buttonText.text}</button>
      </div>
   )
}

// Take the react component and show it on the screen
ReactDOM.render(
   <App />,
   document.querySelector('#root')
);