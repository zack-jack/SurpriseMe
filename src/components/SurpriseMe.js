import React from "react";

import ActionButton from "./ActionButton";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";
import SelectedOptionModal from "./SelectedOptionModal";

export default class SurpriseMe extends React.Component {
  state = {
    options: ["Thing 1", "Thing 2", "Thing 3"],
    selectedOption: undefined
  };

  handleOptionSelect = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  render() {
    const title = "SurpriseMe";
    const subtitle = "Can't make up your mind? We gotchu fam.";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <ActionButton
          hasOptionsCheck={this.state.options.length > 0}
          handleOptionSelect={this.handleOptionSelect}
        />
        <Options options={this.state.options} />
        <AddOption />
        <SelectedOptionModal selectedOption={this.state.selectedOption} />
      </div>
    );
  }
}

SurpriseMe.defaultProps = {
  options: []
};
