import React from "react";

import ActionButton from "./ActionButton";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";

export default class SurpriseMe extends React.Component {
  state = {
    options: ["Thing 1", "Thing 2"]
  };

  render() {
    const title = "SurpriseMe";
    const subtitle = "Can't make up your mind? We gotchu fam.";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <ActionButton />
        <Options options={this.state.options} />
        <AddOption />
      </div>
    );
  }
}

SurpriseMe.defaultProps = {
  options: []
};
