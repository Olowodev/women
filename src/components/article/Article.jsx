import React, { useEffect, useRef } from 'react'
import Button from '../button/Button'
import './Article.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Article = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ref2 = useRef(null);

  const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

  useEffect(() => {
    const section = ref.current;
    const cont = ref2.current;

    gsap.fromTo(cont, {
      yPercent: 0
    },
     {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: cont,
        scrub: true
      }
    })

    gsap.fromTo(section, {
      backgroundPosition: () => `50% ${-window.innerHeight * getRatio(section)}px`
    }, {
      backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    })
  }, [])
  return (
    <div ref={ref} id="articles" className='article'>
      <div ref={ref2} className='container articleCont'>
        <p className='category'>CRAFTSMANSHIP</p>
        <h1>Real women fashion state, insidious whispering of male</h1>
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
            <Button>Discover more</Button>
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