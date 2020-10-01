import React from 'react'

const StickeeNoteComponent = ({ message, removeStickee, priority, id }) => {
  return (
    <button name={priority} id={id} className='stickee' onClick={removeStickee}>
      {message}
    </button>
  )
}

export default StickeeNoteComponent
