import React from "react";
import StickeeDisplayContainer from "./StickeeDisplayContainer";
import AddStickeeFormContainer from "./AddStickeeFormContainer";
// import { fetchData } from "../helperFunctions";

class StickeePathWrapperComponent extends React.Component {
  state = {
    blah: 1,
  };
  updateState = () => {
    console.log('updated state')
    this.setState({blah: this.state.blah + 1})
  }
  render() {
    return (
      <div className="main-display-component">
        <StickeeDisplayContainer />
        <AddStickeeFormContainer  />
      </div>
    );
  }
}

export default StickeePathWrapperComponent;
