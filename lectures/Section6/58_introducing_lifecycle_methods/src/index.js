import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

   // Simple way to initialize state
   constructor(props) {
      super(props); // must call super(props);

      // This is the ONLY time that there is direct assignment to this.state
      this.state = { lat: null, errorMessage: '' };

      window.navigator.geolocation.getCurrentPosition(
         position => {
            // called setState in order update the state object
            this.setState({ lat: position.coords.latitude });

            // did not use something like
            // this.state.lat = positions.coords.latitude
         },
         // Here is where the lecture takes place
         err => {
            console.error(err);
            this.setState({ errorMessage: err.message });
         }
      );
   }

   //Talk about other lifecylcle methods and a quick demonstration of 2 common methods
   // componentDidMount() {
   //    console.log('My component was rendered to the screen');
   // }

   // componentDidUpdate() {
   //    console.log('My component was just updated -- it rerendered');
   // }
   

   //React requires that you define the render method
   render() {
      if (this.state.errorMessage && !this.state.latitude) {
         return <div>Error: {this.state.errorMessage}</div>
      }

      if (!this.state.errorMessage && this.state.lat) {
         return <div>Lattitude: {this.state.lat}</div>
      }

      return <div>Loading!</div>;
   }
}

ReactDOM.render(<App />, document.querySelector('#root'));