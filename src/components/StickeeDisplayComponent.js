import React from "react";
import StickeeNote from "./StickeeNote";

const StickeeDisplayComponent = ({ notes, removeSticky }) => {
  const StickeeDisplay = ({ notes, priority }) => {
    const array = notes.filter((note) => note.type === priority);
    return (
      <div className="sticky-box">
        <h5>{priority}</h5>
        <div className={priority}>
          {array.map((note) => (
            <StickeeNote
              key={note.id}
              id={note.id}
              group={priority}
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
      <StickeeDisplay notes={notes} priority="do" />
      <StickeeDisplay notes={notes} priority="plan" />
      <StickeeDisplay notes={notes} priority="delegate" />
      <StickeeDisplay notes={notes} priority="delete" />
    </div>
  );
};

export default StickeeDisplayComponent;
