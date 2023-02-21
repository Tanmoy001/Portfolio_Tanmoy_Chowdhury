import React from 'react'
import './testimonials.css'
import test1 from '../../assets/test1.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
  avatar : test1,
  name:'Sayan Shikder',
  review:'I worked with him in a ml project. He is a good learner' 
  },
  {
    avatar : test1,
    name:'Sayan Shikder',
    review:'I worked with him in a ml project. He is a good learner' 
    },
    {
      avatar : test1,
      name:'Sayan Shikder',
      review:'I worked with him in a ml project. He is a good learner' 
      }
]
const Testimonials = () => {
  return (
    <section id='portfolio'>
      <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper className='container testimonial_container' 
    // install Swiper modules
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
   
    pagination={{ clickable: true }}
    style={{paddingBottom: "4rem"}}
  >

   { data.map(({avatar,name,review},index) => {
        return(
          <SwiperSlide key={index} className='testimonial'>
          <div className='client_avatar'>
            <img src={test1} alt="Avatar one"/></div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          
        </SwiperSlide>    
        )
      })
    }
      
      
    </Swiper>
    </section>
    
  )
}

export default Testimonials