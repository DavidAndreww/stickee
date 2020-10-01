import React from 'react'

const Header = (props) => {
  const handleLogout = () => {
    window.location.replace('/')
    props.logOut()
  }

  return (
    <div className='header-display-component'>
      <h1 className='heading'>STICKEE</h1>
      {props.loggedIn && (
        <button className='logout' onClick={handleLogout}>
          Log Out
        </button>
      )}
    </div>
  )
}

export default Header
