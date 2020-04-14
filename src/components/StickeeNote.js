import React from "react";

const StickeeNote = ({ message, removeStickee, priority, id }) => {
  return (
    <button name={priority} id={id} className="stickee" onClick={removeStickee}>
      {message}
    </button>
  );
};

export default StickeeNote;
