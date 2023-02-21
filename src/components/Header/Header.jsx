import React from 'react'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/Me.png'
import photo from '../../assets/photo.jpg'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Tanmoy Chowdhury</h1>
        <div className='text'>
          <h5 className="text-light" >Frontend</h5>
          <h5 className='developer'>Developer</h5>
        </div>
        <CTA/>
        <HeaderSocials/>
          <div className='me'>
            <img src={photo} id="photo" alt=''/>
            <img src={Me} id="me"alt=''/>
          </div>
      </div>
    </header>  
    
  )
}

export default Header
