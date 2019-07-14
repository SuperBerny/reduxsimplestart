import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

   // Simple way to initialize state
   constructor(props) {
      super(props); // must call super(props);

      this.state = {
         lat: null
      };
   }
   

   //React requires that you define the render method
   render() {

      window.navigator.geolocation.getCurrentPosition(
         position => console.log(position),
         err => console.error(err)
      );

      return <div>Latitude: </div>
   }
}

ReactDOM.render(<App />, document.querySelector('#root'));