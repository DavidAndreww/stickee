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

// const StickeeDisplayComponent = ({ notes, removeSticky }) => {
//   const StickeeDisplay = ({ notes, priority }) => {
//     const array = notes.filter((note) => note.type === priority);
//     return (
//       <div className="sticky-box">
//         <h5>{priority}</h5>
//         <div className={priority}>
//           {array.map((note) => (
//             <StickeeNote
//               key={note.id}
//               id={note.id}
//               group={priority}
//               message={note.message}
//               removeSticky={removeSticky}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="priority-field">
//       <StickeeDisplay notes={notes} priority="do" />
//       <StickeeDisplay notes={notes} priority="plan" />
//       <StickeeDisplay notes={notes} priority="delegate" />
//       <StickeeDisplay notes={notes} priority="delete" />
//     </div>
//   );
// };

export default StickeeDisplayComponent;
