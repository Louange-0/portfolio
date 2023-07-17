import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image1.jpg'
import IMG2 from '../../assets/image2.jpg'
import IMG3 from '../../assets/image3.jpg'
import IMG4 from '../../assets/image4.jpg'
import IMG5 from '../../assets/image5.jpg'
import IMG6 from '../../assets/image6.jpg'
import IMG7 from '../../assets/image7.jpg'
import IMG8 from '../../assets/image8.jpg'
const data=[
  {
    id:1,
    image:IMG1,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'http://github.com',
    demo:'https://dribbble.com/shorts/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
},
{
  id:2,
  image:IMG2,
  title:'Charts templates & information in Figma',
  github:'http://github.com',
  demo:'https://dribbble.com/shorts/16580766-Orion-UI-kit-Charts-templates-infographics-in- Figma'
},
{
  id:3,
  image:IMG3,
  title:'Figma dashboard UI kit for data design web apps',
  github:'http://github.com',
  demo:'https://dribbble.com/shorts/17290917-Eclipse-Figma-dashboard-UI-Kit-for-data-design-web-apps'
},
{
  id:4,
  image:IMG4,
  title:'Maintain tasks and tracking progress',
  github:'http://github.com',
  demo:'https://dribbble.com/shorts/16955822-Maintain-tasks-and-tracking-progress'
},
{
  id:5,
  image:IMG5,
  title:'Charts templates & infographics in Figma',
  github:'http://github.com',
  demo:'https://dribbble.com/shorts/16541280-Orio-UI-kit-CHarts-templates-infographics-in-Figma'
},
{
  id:6,
  image:IMG6,
  title:'Charts templates & infographics in Figma',
  github:'http://github.com',
  demo:'https://dribbble.com/shorts/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
   
      </div>
    </section>
    
    
  )
}

export default portfolio