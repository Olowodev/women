import React from 'react'
import Button from '../button/Button'
import './BlogArticle.css'
import yansh from '../../images/yansh.png'

const BlogArticle = () => {
  return (
    <div className='blogArticle'>
      <div className="blogCont">
        <div className='blogCategory'>
          <p>BLOG ARTICLE</p>
        </div>
        <div className='blogContent'>
          <h1>Big</h1>
          <h1>beauty</h1>
          <img src={yansh} />
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