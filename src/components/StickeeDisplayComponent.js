import React from "react";
import StickeeNote from "./StickeeNote";

const StickeeDisplayComponent = ({ notes, removeStickee }) => {
  const IndividualPriorityField = ({ notes, priority }) => {
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
              removeStickee={removeStickee}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="priority-display-field-container">
      <IndividualPriorityField notes={notes} priority="do" />
      <IndividualPriorityField notes={notes} priority="plan" />
      <IndividualPriorityField notes={notes} priority="delegate" />
      <IndividualPriorityField notes={notes} priority="delete" />
    </div>
  );
};

export default StickeeDisplayComponent;
