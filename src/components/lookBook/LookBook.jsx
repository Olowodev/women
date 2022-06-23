import React from 'react'
import Button from '../button/Button'
import badge from '../../images/badge.png'
import logo from '../../images/FOR_logo2.png'

const LookBook = () => {
  return (
    <div className='lookBook'>
      <div className='bookCont'>
        <div className='bookTitle'>
          <h1>Look</h1>  
          <h1>book</h1>
        </div> 
        <div className='bookSub'>
          <img src={logo} />
          <h3>you darling</h3>
        </div>
        <Button>Check out our Lookbook</Button>
      </div>
      <div className='bookSide'>
        <div className='vline'></div>
        <div className='sideContent'>
          <img src={badge} />
          <p>Woman inspired and drove our designers when creating this collection</p>
        </div>
      </div>
    </div>
  )
}

export default LookBook