import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/tanmoy-chowdhury-649770220/'><BsLinkedin/></a>
        <a href='https://github.com/Tanmoy001' ><FaGithub/></a>
        <a href='https://github.com/Tanmoy001' ><FiFacebook/></a>
        
        

    </div>
  )
}

export default HeaderSocials
