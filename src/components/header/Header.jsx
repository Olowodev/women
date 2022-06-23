import React from 'react'
import NavBar from '../navBar/NavBar'
import header from '../../images/header.png'
import badge from '../../images/badge.png'
import logo from '../../images/FOR_logo.png'

const Header = () => {
  return (
    <div className='header'>
      <NavBar />
      <div className='mainHeader'>
        <h1>2021</h1>
        <div className='centerHead'>
          <img src={logo} />
          <h1>every</h1>
          <h1>Woman</h1>
          <p>LATEST COLLECTION</p>
          <img src={header} />
        </div>
        <div className='spinner'>
          <img src={badge} />
        </div>
      </div>
    </div>
  )
}

export default Header