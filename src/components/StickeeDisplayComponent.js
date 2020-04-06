import React from "react";
import StickeeNote from "./StickeeNote";

const StickeeDisplayComponent = ({ state, removeSticky }) => {
  const StickeeDisplay = ({ array, group }) => {
    return (
      <div className="sticky-box">
        {array.length > 0 && <h5>Do</h5>}
        <div className={group}>
          {array.map(note => (
            <StickeeNote
              key={note.id}
              id={note.id}
              group={group}
              message={note.message}
              removeSticky={removeSticky}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="priority-field">
      <StickeeDisplay array={state.do} group="do" />
      <StickeeDisplay array={state.plan} group="plan" />
      <StickeeDisplay array={state.delegate} group="delegate" />
      <StickeeDisplay array={state.delete} group="delete" />
    </div>
  );
};


export default StickeeDisplayComponent;
