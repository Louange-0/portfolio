import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Full-Stack Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Databases and Data Management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>APIs and Integrations</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Deployment and DevOps</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Security and Performance Optimization</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>E-commerce Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Online Storefront Development: </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Product Catalog Management</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Shopping Cart and Checkout</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Customer Account Management:</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Payment Gateway Integration:</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Order and Inventory Management</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services