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

  handleDeleteAllOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handleOptionSelect = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value to add an option.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option has already been entered.";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
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
        <Options
          options={this.state.options}
          handleDeleteAllOptions={this.handleDeleteAllOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <SelectedOptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

SurpriseMe.defaultProps = {
  options: []
};
