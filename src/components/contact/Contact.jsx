import React from 'react'
import './contant.css'
import ContactUs from './ContactUs';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';

import { AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='Contact'>
      <h5>Fill out the form and I will reach out, as soon as possible! </h5>
      <h2>Get In Touch!</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>E-mail</h4>
            <a href='mailto:chowdhurytanmoy580@gmail.com'target={'_blank'} rel="noreferrer">Drop me a mail</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            
            <a href='https://m.me/itzave.chowdhury/' target={'_blank'} rel="noreferrer">Send a message</a>
          </article>


          <article className='contact_option '>
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <a href='https://api.whatsapp.com/send?phone=918910499577&text=Hello%2C%20there!'target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
    {/*End   of contact options */}
    </div>
    <ContactUs/>

        
      </div>
    </section>
  )
}

export default Contact