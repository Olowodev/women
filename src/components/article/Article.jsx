import React from 'react'
import Button from '../button/Button'

const Article = () => {
  return (
    <div className='article'>
      <div className='articleCont'>
        <p className='category'>CRAFTSMANSHIP</p>
        <h1>Ral women fashion state, insidious whispering of male</h1>
        <div className='articleBottom'>
          <div className='bottomLeft'>
            <p>Stll, what we never reckoned with then was the 
              notion that he achievement of women designers 
              today would amount to a reshapig of the industry-
              not by fitting in with male-led corporate rules but by 
              steadily ignoring them, trusting their own instincts, 
              living how they wish, and opening wide the creative 
              space for a whole generation to thrive.
            </p>
            <Button />
          </div>
          <div className='vline'></div>
          <h3>They're defying the 
            norm and redefining 
            what it means to be 
            beautiful.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Article