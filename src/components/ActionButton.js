import React from "react";

const ActionButton = props => (
  <div>
    <button
      onClick={props.handleOptionSelect}
      disabled={!props.hasOptionsCheck}
    >
      Tell me what to do.
    </button>
  </div>
);

export default ActionButton;
