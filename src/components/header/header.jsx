import React from 'react'
import './header.css'
import Cta from './CTA'
import Me from '../../assets/me.jpg'
import Headersocials from './headersocials'

const header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5 className='h5 text-light'>Hello I'm</h5>
      <h1 className='h1'>Lisa Louange</h1>
      <h5 className="text-lighte text-light">A Fullstack developer</h5>
      <Cta/>
      <Headersocials/>
      <div className="me">
        <img src={Me} alt="me" />
      </div>
<a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default header