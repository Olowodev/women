import React, { useState } from 'react'
import {FaPlay, FaPause} from 'react-icons/fa'
import './Quote.css'

const Quote = () => {

  const [play, setPlay] = useState(false);

  const togglePlay = () => {
    setPlay(!play)
  }

  return (
    <div className='container quote'>
      <div className='quoteCont'>
        <h3>I think there is beauty in everything.
          What 'normal' people perceive as 
          ugly, I can usually see something of 
          beauty in it.
        </h3>
        <p>Alexander McQueen; designer</p>
        {play ? <FaPause style={{fontSize: "50px", cursor: "pointer"}} onClick={togglePlay} /> : <FaPlay style={{fontSize: "50px", cursor: "pointer"}} onClick={togglePlay} />}
      </div>
    </div>
  )
}

export default Quote