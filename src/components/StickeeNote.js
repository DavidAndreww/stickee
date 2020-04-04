import React from "react";

const StickeeNote = ({ message, removeSticky, group, id }) => {
  return (
    <button name={group} id={id} className="sticky" onClick={removeSticky}>
      {message}
    </button>
  );
};

export default StickeeNote;
