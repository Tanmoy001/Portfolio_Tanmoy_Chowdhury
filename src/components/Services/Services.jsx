import React from 'react'
import './Services.css'
import pic1 from '../../assets/1496034.png';
import pic2 from '../../assets/3242120.png';
import pic3 from '../../assets/2498074.png';

const Services = () => {
  return (
    <section id='services'>
        <h5>What skills I have</h5>
         <h2>My Experience</h2>
      <div className="container">
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
            <img src={pic1} alt='pic'/>
            </div>
            <div className="content">
            <div className="details">
                <h2>UI/UX</h2>
                <p>I offer IA and also creative ui/ux according to client </p>
            </div>
        </div>
        </div>
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
                <img src={pic2} alt='pic'/>
            </div>
            <div className="content">
            <div className="details">
                <h2>Web Dev</h2>
                <p>I offer web development with react & spring</p>
            </div>
        </div>
        </div>
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
            <img src={pic3} alt='pic'/>
            </div>
            <div className="content">
            <div className="details">
                <h2>Data Analysis</h2>
                <p>I also offer data analysis along with UI</p>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Services
