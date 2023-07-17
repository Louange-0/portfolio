import React from 'react'
import './testimonials.css'



import avtr1 from '../../assets/avtr2.jpg'
import avtr2 from '../../assets/avtr1.jpeg'
import avtr3 from '../../assets/avtr4.jpeg'
import avtr4 from '../../assets/avtr3.com_s_8RYb1p'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
  avatar:avtr1,
  name:'Jace Elton',
  review:"Lisa is an exceptional full stack developer with a deep understanding of both front-end and back-end technologies. Her problem-solving skills are top-notch, allowing her to efficiently overcome challenges and deliver robust solutions. With excellent communication and collaboration abilities, Lisa seamlessly integrates within teams and consistently contributes to project success. Her commitment to continuous learning ensures she stays up-to-date with the latest technologies, making her a valuable asset to any development team."
  },
  
  {
  avatar:avtr2,
  name:'Kante Milo',
  review:'Lisa is a highly skilled full stack developer who consistently demonstrates expertise in a wide range of technologies. Her ability to seamlessly navigate between front-end and back-end development is commendable. With her strong problem-solving skills and effective communication, Lisa consistently delivers high-quality solutions and contributes to the success of any project. Her dedication to staying updated with the latest trends showcases her commitment to continuous improvement, making her an invaluable asset to any development team.'
  },
  
  {
  avatar:avtr3,
  name:'Keza Promesse',
  review:'Lisa is an outstanding full stack developer who consistently surpasses expectations. Her proficiency in both front-end and back-end technologies is remarkable, allowing her to tackle complex projects with ease. Her attention to detail and problem-solving abilities make her a reliable asset to any team. Additionally, her excellent communication skills foster effective collaboration and ensure seamless project delivery. Her passion for learning keeps her at the forefront of industry trends, making her a valuable contributor to any development endeavor.'
  },
  
  {
  avatar:avtr4,
  name:'Kimenyi Josine',
  review:'Lisa is not only a skilled full stack developer but also a team player who excels in collaborative environments. She actively engages with team members, actively listens to their ideas, and contributes valuable insights. Her ability to communicate effectively and empathetically fosters a positive and inclusive work atmosphere. Her strong interpersonal skills make her an exceptional team player who consistently fosters synergy and achieves outstanding results.'
  },
  ]

const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
       {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={avatar} />
            </div>
            <h5 className='client_name'> {name}</h5>
              <small className='client_review'>{review}</small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default testimonials