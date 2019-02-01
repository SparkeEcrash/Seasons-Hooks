import React from "react";

const Spinner = (props) => {
  return (
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
        {/* <div class="ui text loader">{props.message || 'Loading...'}</div> */}
        {/* // set default text if no props.message was passed */}
      </div>
  );
};

Spinner.defaultProps = {
    message: 'Loading...'
    // '.defaultProps' makes it so that the or statement in line 7 is not necessary
};

export default Spinner;