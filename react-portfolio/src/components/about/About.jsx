import React from 'react'
import './about.css';
import ME from '../../assets/IMG_0104.jpg'
import {FiAward} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__conttent">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>UofM Bootcamp</small>
            </article>
            {/* <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Clients</h5>
              <small>None</small>
            </article> */}
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed projects</small>
            </article>
          </div>

          <p>
            My name is Troy, and thank you for visiting my website! I have the skills and qualities of a full-stack web developer. I have experience working with other people; I am someone who is always seeking to learn and develop, and I have the creativity to help your business grow whilst offering excellent service to your customers. Outside of work I keep myself fit and active. I am a positive person who always embraces change, and I will always take responsibility for my own professional development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About