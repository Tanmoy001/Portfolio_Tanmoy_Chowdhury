import React, { useState, useEffect } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
const HeaderSocials = () => {

  const [serani, setSerani] = useState("first")
  const { ref, inView } = useInView();
  useEffect(() => {

      if (inView) {
         
          setSerani('visible')
      }

   
  }, [inView]);
  return (
    <div className='header__socials '>
        <a  className={`service_card ${serani}`}ref= {ref} href='https://www.linkedin.com/in/tanmoy-chowdhury-649770220/'target={'_blank'} rel="noreferrer"><BsLinkedin/></a>
        <a  className={`service_card ${serani}`}ref= {ref} href='https://github.com/Tanmoy001'target={'_blank'} rel="noreferrer" ><FaGithub/></a>
        <a className={`service_card ${serani}`}ref= {ref} href='https://www.facebook.com/itzave.chowdhury/'target={'_blank'} rel="noreferrer" ><FiFacebook/></a>
        
        

    </div>
  )
}

export default HeaderSocials
