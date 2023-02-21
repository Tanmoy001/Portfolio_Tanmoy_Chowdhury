import React from 'react'
import'./about.css'
import backg2 from '../../assets/333.png'
import backg from '../../assets/222.jpg'
import Mypic from '../..//assets/mypic2.png'
function Pictures() {
  return (
    
        <div className='pictures'>
            <img src={backg2} id="backg2" alt=''/>
            <img src={backg} id="backg" alt=''/>
            <img src={Mypic} id='mypic' alt=''/>
            
        </div>
   
  )
}

export default Pictures