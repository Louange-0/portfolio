import React from 'react'
import './about.css'
import other from '../../assets/other.jpg' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={other} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Clients</h5>
              <small>300+ worldwide</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>

          <p>I am a full-stack developer skilled in both frontend and backend web development. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create user-friendly interfaces and build robust applications. I am proficient in working with databases, RESTful APIs, and deployment processes using tools like Git and Docker. I value effective communication and collaboration in agile development teams. Constantly learning and adapting to new technologies, I enjoy taking on challenges and delivering high-quality solutions.</p>

          <a href="#contacts" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About