import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Vamshi</p>
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
            <h2>GET  IN TOUCH </h2>
            <ul>
                <li>9059994945</li>
                <li>23p61a05i6@vbithyd.ac.in</li>
            </ul>
        </div>
        
        
      </div>
      <hr />
      <div>
            <p>.....Enjoy your day with Super Good Food.....</p>
        </div>
    </div>
    
  )
}

export default Footer
