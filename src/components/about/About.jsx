import React from 'react'
import './about.css'
import{BsAward}from 'react-icons/bs'
import{AiOutlineProject}from 'react-icons/ai'
import Pictures from './Pictures.jsx'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
           <h2>About ME</h2>
      <div className="container container_about">
        <div className="container card">
            
              <Pictures/>
            
         </div>
            <div className="about_content">
              <div className='about_cards'>
                <article className='about_card'>
                  <BsAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>1+year</small>
                </article>
                <article className='about_card'>
                  <AiOutlineProject className='about_icon'/>
                  <h5>Project</h5>
                  <small>8+ Completed</small>
                </article>
              </div>
                <p>
                  Currently I am serving for the "Creamy Layer" as a frontend developer
                </p>
                <a href='#Contact' className='btn btn-primary'>Lets talk</a>
            
         </div>
      
    </div>
    </section>
  )
}

export default About