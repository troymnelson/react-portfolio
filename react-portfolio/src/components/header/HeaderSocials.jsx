import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/troy-nelson-9a73b0189/"  target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/troymnelson" target="_blank"><FaGithub /></a>  
    </div>
  )
}

export default HeaderSocials