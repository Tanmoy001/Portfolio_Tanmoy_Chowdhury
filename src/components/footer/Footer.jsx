import React from 'react'
import './footer.css'
import { FiFacebook } from 'react-icons/fi';

import { AiOutlineInstagram } from 'react-icons/ai';

import { FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer_logo'>Tanmoy Chowdhury</a>
      <ul className='permalinks'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#Contact'>Contact</a></li>

      </ul>
      <div className='footer_socials'>
        <a href='https://www.facebook.com/itzave.chowdhury/'><FiFacebook/></a>
        <a href='https://www.instagram.com/ig_chowdhury/?hl=en'><AiOutlineInstagram/></a>
        <a href='https://twitter.com/TanmoyFTW07'><FiTwitter/></a>
      </div>
      <div className='fotter_copyright'>
        <small>&copy;All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
