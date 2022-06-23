import React, { useState } from 'react'
import {FaPlay, FaPause} from 'react-icons/fa'

const Quote = () => {

  const [play, setPlay] = useState(false);

  const togglePlay = () => {
    setPlay(!play)
  }

  return (
    <div className='quote'>
      <div className='quoteCont'>
        <h3>I think there is beauty in everything.
          What 'normal' people perceive as 
          ugly, I can usually see something of 
          beauty in it.
        </h3>
        <p>Alexander McQueen; designer</p>
        {play ? <FaPause onClick={togglePlay} /> : <FaPlay onClick={togglePlay} />}
      </div>
    </div>
  )
}

export default Quote