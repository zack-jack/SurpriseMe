import React from "react";

import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Options:</h3>
      <button
        className="button button--remove-all-link"
        onClick={props.handleDeleteAllOptions}
      >
        Remove all
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Add a few options to get started.</p>
    )}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
