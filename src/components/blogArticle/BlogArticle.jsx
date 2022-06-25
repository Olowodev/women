import React, { useEffect, useRef } from 'react'
import Button from '../button/Button'
import './BlogArticle.css'
import yansh from '../../images/yansh.png'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const BlogArticle = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);


  useEffect(() => {
    const section = ref.current;
    const title = ref2.current;
    const content = ref3.current;
    const img = ref4.current;

    /*gsap.to(title, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    })

    gsap.to(content, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    })*/

    gsap.fromTo(img, {
      yPercent: 0
    },
     {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    })
  }, [])

  return (
    <div className='blogArticle'>
      <div ref={ref} className="blogCont">
        <div ref={ref2} className='blogCategory'>
          <p>BLOG ARTICLE</p>
        </div>
        <div className='blogContent'>
          <div ref={ref3}>
            <h1>Big</h1>
            <h1>beauty</h1>
          </div>
          <img ref={ref4} src={yansh} />
        </div>
        <div className='blogBottom'>
          <div className='blogBottomLeft'>
            <div>
              <p>Why Does the Beauty Industry</p>
              <p>Ignore Curvy Models?</p>
            </div>
            <Button>Discover more</Button>
          </div>
          <div className='vline'></div>
          <div className='blogBottomRight'>
            <p>People often cite the 1950s as a tme when curviness was in, but
              that's not entirely true, said Elizabeth Wissinger, author of "This
              Year's Model" and a proessor of fashion studies at the City University
              of New York's Graduate Center, "Yes, curvy bodies were popular, but
              the people had those achievable, accessible physiques, represented
              by movie stars like Marilyn Monroe. Fashion was still very seperate
              and models were thin."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle