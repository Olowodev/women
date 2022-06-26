import React, { useEffect, useState } from 'react'
import {FaPlay, FaPause, FaRegStopCircle} from 'react-icons/fa'
import { useSpeechSynthesis } from 'react-speech-kit';
import './Quote.css'

const Quote = () => {

  const [play, setPlay] = useState(false);
  const onEnd = () => {
    setPlay(false);
  };
  const {speak, cancel, speaking, supported, voices} = useSpeechSynthesis({
    onEnd,
  });
  const togglePlay = () => {
    console.log(play)
    setPlay(true);
    const text = document.querySelector(".speech").textContent;
    const voice = voices.find(o => o.name == "Microsoft Zira - English (United States)")
    const rate = 1;
    const pitch = 21;
    speak({ text, voice, rate, pitch  })
  }

  const toggleStop = () => {
    setPlay(false)
    cancel()
  }

  return (
    <div className='container quote'>
      <div className='quoteCont'>
        <h3 className='speech'>I think there is beauty in everything.
          What 'normal' people perceive as 
          ugly, I can usually see something of 
          beauty in it.
        </h3>
        <p>Alexander McQueen; designer</p>
        {supported ? play===true ? <FaRegStopCircle style={{fontSize: "50px", cursor: "pointer"}} onClick={toggleStop} /> : <FaPlay style={{fontSize: "50px", cursor: "pointer"}} onClick={togglePlay} /> : null}
      </div>
    </div>
  )
}

export default Quote