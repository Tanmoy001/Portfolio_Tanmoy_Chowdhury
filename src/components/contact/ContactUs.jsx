import React from 'react'
import'./contactus.css';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contactus() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x2wd3bf', 'template_4d775o6', form.current, 'ryKVBxzKIyQY0kLTz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div id='contactus'className='ContactUs'>
        <div className="container">
      
        <div className="row100">
            <form ref={form} onSubmit={sendEmail}>
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="name" required="required"/>
                    <span className="text">Name</span>
                    <span className="line"></span>
                </div>
            </div>

            
            <div className="col">
                <div className="inputBox">
                    <input type="text" name="email" required="required"/>
                    <span className="text">Email</span>
                    <span className="line"></span>
                </div>
            </div>
           

            <div className="col">
                <div className="inputBox textarea">
                    <input type="text" name="message" required="required"/>
                    <span className="text">Type your message</span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <input type="submit" className='submit' value="Send"/>
                </div>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contactus