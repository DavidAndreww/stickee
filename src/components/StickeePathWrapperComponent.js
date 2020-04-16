import React from "react";
import StickeeDisplayContainer from "../containers/StickeeDisplayContainer";
import AddStickeeFormContainer from "./AddStickeeFormContainer";
// import { fetchData } from "../helperFunctions";

const StickeePathWrapperComponent = () => {
  return (
    <div className="main-display-component">
      <StickeeDisplayContainer />
      <AddStickeeFormContainer />
    </div>
  );
};

export default StickeePathWrapperComponent;
