import React from 'react'
import './Services.css'
import pic from '../../assets/3242120.png';
const Services = () => {
  return (
    <section id='services'>
        <h5>What skills I have</h5>
         <h2>My Experience</h2>
      <div className="container">
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
            <img src={pic} alt='pic'/>
            </div>
            <div className="content">
            <div className="details">
                <h2>Design</h2>
                <p>sadfdsagfhdsgfjk</p>
            </div>
        </div>
        </div>
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
                <img src={pic} alt='pic'/>
            </div>
            <div className="content">
            <div className="details">
                <h2>Design</h2>
                <p>sadfdsagfhdsgfjk</p>
            </div>
        </div>
        </div>
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
            <img src={pic} alt='pic'/>
            </div>
            <div className="content">
            <div className="details">
                <h2>Design</h2>
                <p>sadfdsagfhdsgfjk</p>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Services
