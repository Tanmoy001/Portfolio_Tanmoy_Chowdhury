import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './nav.css';
const Nav = ({setColor}) => {



  return (
    
    <div className='navbar'>
    <div className="contain">
    
        <div className="navigation">
        
            <ul>
                <li className="list">
                    <a href="/" id='1'>
                    <span className="icon" onMouseOver={setColor}style={{color: "#FEFAE0"}}>< AiOutlineHome/></span>
                    
                    </a>
                </li>
                <li className="list" >
                    <a href="#about" id='2'>
                    <span className="icon"onMouseOver={setColor}style={{color:"#abd699"}}><BiUserCircle/></span>
                    
                    </a>
                </li>
                <li className="list" >
                    <a href="#experience" id='3'>
                    <span className="icon"onMouseOver={setColor}style={{color:"#05c46b"}}><BiBook/></span>
                   
                    </a>
                </li>
                <li className="list" >
                    <a href="#services"id='4'>
                    <span className="icon"onMouseOver={setColor}style={{color:"#75c9b7"}}><RiServiceLine/></span>
                    
                    </a>
                </li>
                <li className="list" >
                    <a href="#contact"id='5'>
                    <span className="icon"onMouseOver={setColor}style={{color:"#E8D7FF"}}><BiMessageSquareDetail/></span>
                    
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
