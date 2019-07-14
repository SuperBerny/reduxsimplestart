import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

   // Simple way to initialize state
   constructor(props) {
      super(props); // must call super(props);

      // This is the ONLY time that there is direct assignment to this.state
      this.state = { lat: null };

      window.navigator.geolocation.getCurrentPosition(
         position => {
            // called setState in order update the state object
            this.setState({ lat: position.coords.latitude });

            // did not use something like
            // this.state.lat = positions.coords.latitude
         },
         err => console.error(err)
      );
   }
   

   //React requires that you define the render method
   render() {
      return <div>Latitude: {this.state.lat} </div>
   }
}

ReactDOM.render(<App />, document.querySelector('#root'));