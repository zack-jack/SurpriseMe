import React from "react";

import Option from "./Option";

const Options = props => (
  <div>
    <div>
      <h2>Options:</h2>
      <button>Remove all</button>
    </div>
    {props.options.length === 0 && <p>Add a few options to get started.</p>}
    {props.options.map(option => <Option key={option} optionText={option} />)}
  </div>
);

export default Options;
