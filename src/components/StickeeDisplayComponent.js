import React from "react";
import StickeeNote from "./StickeeNote";

const StickeeDisplayComponent = ({ notes, removeSticky }) => {
  const StickeeDisplay = ({ notes, priority }) => {
    const array = notes.filter((note) => note.note_type === priority);
    return (
      <div className="individual-priority-display-field">
        <h5>{priority}</h5>
        <div className={priority}>
          {array.map((note) => (
            <StickeeNote
              key={note.note_id}
              id={note.note_id}
              priority={priority}
              message={note.note_message}
              removeSticky={removeSticky}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="priority-display-field-container">
      <StickeeDisplay notes={notes} priority="do" />
      <StickeeDisplay notes={notes} priority="plan" />
      <StickeeDisplay notes={notes} priority="delegate" />
      <StickeeDisplay notes={notes} priority="delete" />
    </div>
  );
};

export default StickeeDisplayComponent;
