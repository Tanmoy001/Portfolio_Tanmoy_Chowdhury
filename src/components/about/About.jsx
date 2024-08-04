import React, { useEffect, useState } from 'react'
import './about.css'
import{BsAward}from 'react-icons/bs'
import{AiOutlineProject}from 'react-icons/ai'
import { useInView } from 'react-intersection-observer';
const About = () => {
  const [animation,setAnimation] = useState();
  const[active,setActive] = useState('active');
  const{ref,inView} = useInView({threshold:1});

  const [scrollPosition, setscrollPosition] = useState(0);


  useEffect(()=>{
    if(inView){
      setAnimation("animated");
      setActive('activeanimation')
      setscrollPosition ( window.scrollY);
      const timer = setTimeout(()=>{
        
      },500);
      return () => clearTimeout(timer);
    }
    
  },[inView])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (scrollPosition !== 0 && Math.abs(currentScrollY - scrollPosition) > 150) {
        setActive('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);


  return (
    <section id='about'>
      
        <div className='about_section'>
           <h5>Get to know </h5>
           <h2>About ME</h2>  
           <div className='container_about_background'>
      <div className="container container_about" ref={ref}>
        
        <div className="container card">
            
              {/* <Pictures/> */}
            
         </div>
            <div className="about_content" >
              <div className={`about_cards ${animation}`}>
                <article className={`about_card ${active}`}>
                  <BsAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>1+year</small>
                </article>
                <article className={`about_card ${active}`}>
                  <AiOutlineProject className='about_icon'/>
                  <h5>Project</h5>
                  <small>8+ Completed</small>
                </article>
              </div>
                <p className={`${active}`}>
                  Currently I am serving as a freelancer
                </p>
                <a href='#Contact' className={`btn btn-primary ${active}`}>Lets talk</a>
            
         </div>
      
    </div>


    
    </div>

    
    </div>
    <div className="container container_about_second" >
        
            <div className="about_content" >
              <div className={`about_cards }`}>
                <article className={`about_card }`}>
                  <BsAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>1+year</small>
                </article>
                <article className={`about_card }`}>
                  <AiOutlineProject className='about_icon'/>
                  <h5>Project</h5>
                  <small>8+ Completed</small>
                </article>
              </div>
                <p className={`$}`}>
                  Currently I am serving as a freelancer
                </p>
                <a href='#Contact' className={`btn btn-primary $`}>Lets talk</a>
            
         </div>
      
    </div>
    </section>
  )
}

export default About