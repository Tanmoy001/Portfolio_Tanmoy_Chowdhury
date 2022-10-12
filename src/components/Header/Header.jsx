import React from 'react'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <div>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Tanmoy Chowdhury</h1>
        <h5 className="text-light">Mern stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
      </div>
    </div>
  )
}

export default Header
