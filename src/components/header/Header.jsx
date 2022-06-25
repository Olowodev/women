import React from 'react'
import header from '../../images/header.png'
import badge from '../../images/badge.png'
import logo from '../../images/FOR_logo.png'
import './Header.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

const Header = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);



  useEffect(() => {
    const img = ref.current;
    const header = ref2.current;
    const spinner = ref3.current;
    const spinCont = ref4.current

    gsap.fromTo(img, 
      {
        scale: 0.7
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: header,
          scrub: 1
        }
      }
    )

    gsap.fromTo(spinner,
      {
        y: -200
      },
      {
        y: 100,
        scrollTrigger: {
          trigger: header,
          scrub: 0.5
        }
      })

    gsap.fromTo(spinner, 3,
      {
        rotate: 0
      },
      {
        rotate: 360,
        repeat: -1,
        ease: 'none'
      })
      
  }, [])
  
  return (
    <div ref={ref2} className='header'>
      <div className='mainHeader'>
        <h1>2021</h1>
        <div className='centerHead'>
          <img src={logo} />
          <h1>every</h1>
          <h1>Woman</h1>
          <p>LATEST COLLECTION</p>
          <img ref={ref} src={header} />
        </div>
        <div ref={ref4} className='spinner'>
          <img ref={ref3} src={badge} />
        </div>
      </div>
    </div>
  )
}

export default Header