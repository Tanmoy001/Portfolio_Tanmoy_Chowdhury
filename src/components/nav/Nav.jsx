import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import { useInView } from 'react-intersection-observer';
import './nav.css';
const Nav = ({setColor}) => {
    const [animation,setAnimation] = useState();
  const{ref,inView} = useInView({threshold:1});
  useEffect(() => {

      if (inView) {
         
          setAnimation("animated");
      const timer = setTimeout(()=>{
        
      },500);
      return () => clearTimeout(timer);
      }

   
  }, [inView]);



  return (
    
    <div className='navbar'>
    <div className="contain">
    
        <div className="navigation">
        
            <ul>
            <li className={`nav_card  ${animation}`} ref={ref}>

                    <a href="#header" id='1'>
                    <span className="icon" /* onClick={()=>{ document.body.style.backgroundColor="#FEFAE0";}} */ style={{color:"#AF3B6E"}}>< AiOutlineHome/></span>
                    
                    </a>
                </li>
                <li className={`nav_card  ${animation}`} ref={ref}>
                    <a href="#about" id='2'>
                    <span className="icon"/* onClick={()=>{ document.body.style.backgroundColor="#C492B1";}}  */style={{color:"#C492B1"}}><BiUserCircle/></span>
                    
                    </a>
                </li>
                <li className={`nav_card ${animation}`}ref= {ref}>
                    <a href="#experience" id='3'>
                    <span className="icon"/* onClick={()=>{ document.body.style.backgroundColor="#05c46b";}}  */style={{color:"#05c46b"}}><BiBook/></span>
                   
                    </a>
                </li>
                <li className={`nav_card ${animation}`}ref= {ref}>
                    <a href="#services"id='4'>
                    <span className="icon"/* onClick={()=>{ document.body.style.backgroundColor="#75c9b7";}} */ style={{color:"#75c9b7"}}><RiServiceLine/></span>
                    
                    </a>
                </li>
                <li className={`nav_card ${animation}`}ref= {ref}>
                    <a href="#Contact"id='5'>
                    <span className="icon"/* onClick={()=>{ document.body.style.backgroundColor="#E8D7FF";}}  */style={{color:"#424651"}}><BiMessageSquareDetail/></span>
                    
                    </a>
                </li>
                
            <div className="indicator"></div> 
            </ul>
        </div>
       
    </div>
    </div>
  )
}

export default Nav
