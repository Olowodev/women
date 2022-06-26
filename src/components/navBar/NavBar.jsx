import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='container nav'>
      <div className="navCont">
      <div className='navLeft'>
        <p>FOR.</p>
      </div>
      <div className='navRight'>
        <div className='navLinks'>
          <a href="#articles"><p>Articles</p></a>
          <a href="#lookbook"><p>Lookbook</p></a>
          <a href="#collections"><p>Collection</p></a>
        </div>
        {/*<div className='navMenu'>
          <div className='navMenuIcon'>
            <div className='navMenuLine'></div>
            <div className='navMenuLine'></div>
            <div className='navMenuLine'></div>
          </div>
  </div>*/}
      </div>
      </div>
    </div>
  )
}

export default NavBar