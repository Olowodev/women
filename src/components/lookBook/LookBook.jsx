import React, {useRef, useEffect} from 'react'
import Button from '../button/Button'
import badge from '../../images/badge.png'
import logo from '../../images/FOR_logo2.png'
import './LookBook.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const LookBook = () => {
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

    /*gsap.fromTo(section, {
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
    })*/
  }, [])
  return (
    <div id="lookbook" ref={ref} className='container lookBook'>
      <div ref={ref2} className='bookCont'>
        <div className='bookTitle'>
          <h1>Look</h1>  
          <h1>book</h1>
        </div> 
        <div className='bookSub'>
          <img src={logo} />
          <h3>you darling</h3>
        </div>
        <div className='bookButton'>
          <Button>Check out our Lookbook</Button>
        </div>
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