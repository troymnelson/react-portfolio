import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-portfolio-1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div style={{width: '100%', height: '100%'}} className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Troy Nelson</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="a photo of myself" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header