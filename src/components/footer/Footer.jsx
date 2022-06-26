import React from 'react'
import logo from '../../images/FOR_logo1.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container footer'>
      <div className='footCont'>
        <div className='footTop'>
          <p>CRAFTSMANSHIP</p>
          <img src={logo} />
        </div>
        <div className='footBottom'>
          <div className='footLeft'>
            <p>Want to be the first to know?</p>
            <p>FOLLLOW US ON SOCIAL:</p>
            <div className='hline'></div>
            <div className='socials'>
              <a target='_blank' href='https://www.instagram.com/olowoo_a'><p>Instagram</p></a>
              <a target='_blank' href='https://www.linkedin.com/in/adebayo-olowofoyeku-0930a3230'><p>LinkedIn</p></a>
              <a target='_blank' href='https://www.github.com/Olowodev'><p>Github</p></a>
            </div>
          </div>
          <div className='footRight'>
            <div className='rightLinks'>
              <p>FAQ</p>
              <p>Shipping</p>
              <p>Return &amp; Refund Policy</p>
              <p>Contact Us</p>
            </div>
            <p>&copy; 2021 FOR.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer