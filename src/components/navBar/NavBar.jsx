import React from 'react'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='navLeft'>
        <p>FOR.</p>
      </div>
      <div className='navRight'>
        <div className='navLinks'>
          <p>Collection</p>
          <p>Lookbook</p>
          <p>About</p>
        </div>
        <div className='navMenu'>
          <div className='navMenuIcon'>
            <div className='navMenuLine'></div>
            <div className='navMenuLine'></div>
            <div className='navMenuLine'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar