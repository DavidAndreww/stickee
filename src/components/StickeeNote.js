import React from "react";

const StickeeNote = ({ message, removeSticky, priority, id }) => {
  return (
    <button name={priority} id={id} className="sticky" onClick={removeSticky}>
      {message}
    </button>
  );
};

export default StickeeNote;
