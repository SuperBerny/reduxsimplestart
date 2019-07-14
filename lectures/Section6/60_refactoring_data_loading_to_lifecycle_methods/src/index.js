import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   
   constructor(props) {
      super(props); 

      //Now the constructor function's only job is to create a state object.
      // This will be refactored in the next lecture
      this.state = { lat: null, errorMessage: '' };      
   }

   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ lat: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message })
      );
   }

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