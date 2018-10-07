import React from "react";
import Modal from "react-modal";

const SelectedOptionModal = props => (
  <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option">
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button>Okay, got it.</button>
  </Modal>
);

export default SelectedOptionModal;
