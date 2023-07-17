import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
<a href="#" className='footer_logo'>Louange</a>

<ul className='permalinks'>
  <li><a href="#">Home</a></li>
  <li><a href="#">Home</a></li>
  <li><a href="#">Home</a></li>
  <li><a href="#">Home</a></li>
  <li><a href="#">Home</a></li>
  <li><a href="#">Home</a></li>
  <li><a href="#">Home</a></li>
</ul>

<div className="footer_socials">
  <a href="https://facebook.com"><FaFacebookF/></a>
  <a href="https://instagram.com"><FiInstagram/></a>
  <a href="https://twitter.com"><IoLogoTwitter/></a>
</div>

<div className="footer_copyright">
  <small>&copy;Lisa Louange.All rights reserved</small>
</div>
    </footer>
  )
}

export default footer