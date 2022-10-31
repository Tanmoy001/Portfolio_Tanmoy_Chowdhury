import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
     <h5>What skills I have</h5>
     <h2>My Experience</h2>
     <div className='container experience_container'>
        <div className='experience_fontend'>
              <h3>Web Development</h3>
              <div className='experience_content'>
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>HTML</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>CSS</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>JS</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>React</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>NodeJs</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>MongoDB</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              </div>
        </div>

        <div className='experience_fontend'>
              <h3>Artificial intelligence</h3>
              <div className='experience_content'>
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>PANDAS</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>NUMPAY</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>scikit-learn</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
                    <div className='experience_details'>
                      <BsFillPatchCheckFill className='icon'/>
                      <div><h4>reinforcement learning</h4>
                      <small className='experience_backend'>Experienced</small></div>
                    </div>
              
              </div>
        </div>
     </div>
    </section>
  )
}

export default Experience
