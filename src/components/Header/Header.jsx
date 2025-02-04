import React,{useState} from 'react'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/Me.png'
import { useEffect } from 'react'
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, 1200); // 1.5 second delay

    return () => clearTimeout(timer); 
  }, [hasAnimated]);
  return (
    <header>
      <div id='header'>
        <div className="container header_container" >
        {isMobile?(<>
          <div className='grid_section_mobile'>

            <div className='personal_sec' >
              <h5 className={isVisible ? 'visible' : 'hidden'}>Hello I'm</h5>
              <h1 className=''>Tanmoy Chowdhury</h1>
              <div className='text'>
                <h5 className="text-light" >TechBuilder</h5>
                <h5 className='developer'>TechBuilder</h5>
              </div>
              </div>
              <div className='me'>
                {/* <img src={photo} id="photo" alt=''/> */}
                <img src={Me} id="me" alt='' />
              </div>
              <div>
              <CTA />
            </div>

            </div>
        </>):(
          <>
          <div className='grid_section'>
            <div className='personal_sec'>
            <h5 className={isVisible ? 'visible' : 'hidden'}>Hello I'm</h5>
              <h1>Tanmoy Chowdhury</h1>
              <div className='text'>
                <h5 className="text-light" >TechBuilder</h5>
                {/* <h5 className='developer'>Developer</h5> */}
              </div>
              <CTA />
            </div>
            <div className='photo_section' id="anim">
              <div className='me'>
                {/* <img src={photo} id="photo" alt=''/> */}
                <img src={Me} id="me" alt='' />
              </div>
            </div>
          </div>
          </>
          
        )}
          

          <HeaderSocials />
        </div>
      </div>
    </header>

  )
}

export default Header
