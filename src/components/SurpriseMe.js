import React from "react";

import Header from "./Header";

export default class SurpriseMe extends React.Component {
  render() {
    const title = "SurpriseMe";
    const subtitle = "Can't make up your mind? We gotchu fam.";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
      </div>
    );
  }
}
