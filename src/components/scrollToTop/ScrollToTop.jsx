import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
import {BsArrowUp} from 'react-icons/bs'

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);



    const scroll = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
          });
    }

        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;

            if (scrolled > 300){
              setVisible(true)
            } 
            else if (scrolled <= 300){
              setVisible(false)
            }
          };

          window.addEventListener('scroll', toggleVisible)
  return (
    <div>
        {visible ? 
        <div className='scrollTop' onClick={scroll}>
            <BsArrowUp style={{ fontSize: "40px"}} />
        </div>
        : null }
    </div>
  )
}

export default ScrollToTop