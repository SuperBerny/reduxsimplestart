import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

   state = { lat: null, errorMessage: '' };

   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ lat: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message })
      );
   }

   renderContent() {
      if (this.state.errorMessage && !this.state.latitude) {
         return <div>Error: {this.state.errorMessage}</div>
      }

      if (!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat={this.state.lat}/>
      }

      return <Spinner message="Please accept location request" />      
   }

      // You don't want multiple return statements in the render method. If you have conditional logic you want to put into a helper method
   render() {
      return (
         <div className="border red">
            {this.renderContent()}
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('#root'));