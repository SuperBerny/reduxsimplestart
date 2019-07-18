import React from 'react';

const Spinner = (props) => {
   return (
      <div class="ui active dimmer">
         <div class="ui big text loader">
            {props.message}
         </div>
      </div>
   );
};

// Default prop is no prop given where component is rendered
Spinner.defaultProps = {
   message: 'Loading...'
}


export default Spinner;