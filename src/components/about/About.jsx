import React from 'react'
import backg2 from '../../assets/333.png'
import backg from '../../assets/222.jpg'
import './about.css'
import{BsAward}from 'react-icons/bs'
import{AiOutlineProject}from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
           <h2>About ME</h2>
      <div className="container container_about">
        
        <div className="card">
        
        <img src={backg} id="backg" alt=''/>
        <img src={backg2} id="backg2" alt=''/>
        <div className='about'>
          
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
                <a href='#contact' className='btn btn-primary'>Lets talk</a>
            </div>
         </div>
      
    </div>
    </section>
  )
}

export default About