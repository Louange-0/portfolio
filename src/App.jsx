import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Services from './components/services/services.jsx'
import Portifolio from './components/portfolio/portfolio.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Contacts from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'

const App = () => {
  return (
  <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portifolio/>
    <Testimonials/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App