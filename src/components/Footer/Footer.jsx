import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Tomato is a food delivery app that allows users to browse a wide variety of restaurants and cuisines, place orders with ease, and enjoy fast delivery to their doorstep.</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+1-123-456-7890</li>
                <li>contact@tomato.com</li>
              </ul>

            </div>
        </div>
<hr />
  <p className="footer-copyright"> Copyright 2024 © Tomato.com - All Right Reserved.</p>      
    </div>
  )
}

export default Footer
