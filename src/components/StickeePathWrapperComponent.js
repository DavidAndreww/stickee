import React from "react";
import StickeeDisplayContainer from "./StickeeDisplayContainer";
import AddStickeeFormContainer from "./AddStickeeFormContainer";
// import { fetchData } from "../helperFunctions";

const StickeePathWrapperComponent = () => {
  return (
    <div className="main-display-component">
      <StickeeDisplayContainer
        // notes={this.state.notes}
        // removeStickee={this.removeStickee}
      />
      <AddStickeeFormContainer
        // stickeeFormOpen={this.state.stickeeFormOpen}
        // toggleAddStickeeForm={this.toggleAddStickeeForm}
        // handleInputChange={this.handleInputChange}
        // handleUrgentSwitch={this.handleUrgentSwitch}
        // handleImportantSwitch={this.handleImportantSwitch}
        // handleSubmit={this.handleSubmit}
        // urgent={this.state.urgent}
        // important={this.state.important}
        // message={this.state.message}
      />
    </div>
  );
};

export default StickeePathWrapperComponent;
