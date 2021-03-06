import React from 'react'
import StickeeNoteComponent from './StickeeNoteComponent'

// wrapper for 4 stickee fields
const StickeeDisplayComponent = ({ notes, removeStickee }) => {
  // defines each individual display field
  const IndividualPriorityField = ({ notes, priority }) => {
    // filters collection of users notes into 4 categories based on priority type
    const array = notes.filter((note) => note.note_type === priority)
    return (
      <div className='individual-priority-display-field'>
        <h5>{array.length > 0 ? priority.toUpperCase() : ''}</h5>
        <div className={priority}>
          {array.map((note) => (
            <StickeeNoteComponent
              key={note.note_id}
              id={note.note_id}
              priority={priority}
              message={note.note_message}
              removeStickee={removeStickee}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='priority-display-field-container'>
      <IndividualPriorityField notes={notes} priority='do' />
      <IndividualPriorityField notes={notes} priority='plan' />
      <IndividualPriorityField notes={notes} priority='delegate' />
      <IndividualPriorityField notes={notes} priority='delete' />
    </div>
  )
}

export default StickeeDisplayComponent
