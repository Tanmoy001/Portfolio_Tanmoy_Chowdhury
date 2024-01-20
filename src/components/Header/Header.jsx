import React,{useState} from 'react'
import CTA from './CTA'
import './Header.css'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/Me.png'
import { useEffect } from 'react'
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

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
  return (
    <header>
      <div id='header'>
        <div className="container header_container" >
        {isMobile?(<>
          <div className='grid_section_mobile'>

            <div className='personal_sec' >
              <h5>Hello I'm</h5>
              <h1>Tanmoy Chowdhury</h1>
              <div className='text'>
                <h5 className="text-light" >Frontend</h5>
                <h5 className='developer'>Developer</h5>
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
            <div className='personal_sec' style={{ paddingTop: '36%', marginLeft: '4rem' }}>
              <h5>Hello I'm</h5>
              <h1>Tanmoy Chowdhury</h1>
              <div className='text'>
                <h5 className="text-light" >Frontend</h5>
                <h5 className='developer'>Developer</h5>
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
