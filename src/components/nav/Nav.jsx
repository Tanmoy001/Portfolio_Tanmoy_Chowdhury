import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';

import { BiUserCircle } from 'react-icons/bi';
import './nav.css'
const Nav = () => {
  return (
    <div className="contain">
        <div className="navigation">
            <ul>
                <li className="list active" data-color="#f53b57">
                    <a href="/">
                    <span className="icon">< AiOutlineHome/></span>
                    <span className="title">Home</span>
                    </a>
                </li>
                <li className="list" data-color="#3c40c6">
                    <a href="/">
                    <span className="icon"><BiUserCircle/></span>
                    <span className="title">Profile</span>
                    </a>
                </li>
                <li className="list" data-color="#05c46b">
                    <a href="/">
                    <span className="icon"><i className="fas fa-comments-dollar"></i></span>
                    <span className="title">Message</span>
                    </a>
                </li>
                <li className="list" data-color="#0fbcf9">
                    <a href="/">
                    <span className="icon"><i className="fas fa-question"></i></span>
                    <span className="title">Help</span>
                    </a>
                </li>
                <li className="list" data-color="#ffa801">
                    <a href="/">
                    <span className="icon"><i className="fas fa-cogs"></i></span>
                    <span className="title">Settings</span>
                    </a>
                </li>
                <li className="list" data-color="#6843d1">
                    <a href="/">
                    <span className="icon"><i className="fas fa-lock"></i></span>
                    <span className="title">Password</span>
                    </a>
                </li>
                <li className="list" data-color="#efefefef">
                    <a href="/">
                    <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                    <span className="title">SignOut</span>
                    </a>
                </li>
            
            <div className="indicator"></div> 
            </ul>
        </div>
       
    </div>
  )
}

export default Nav
