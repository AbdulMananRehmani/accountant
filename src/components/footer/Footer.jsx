import React from 'react'
import  './Footer.css';
import {       FaFacebookF } from "react-icons/fa";
import {       BiLogoInstagram } from "react-icons/bi";
import {       AiOutlineTwitter} from "react-icons/ai";

import logo from '../../assests/logo.png'

const Footer = () => {
  return (
    <div className='container-fluid mt-5 pt-5 footer' style={{ backgroundColor: "rgba(108, 180, 180, 0.804)" }}>
    <div className="row">
      <div className="col-md-4" style={{ paddingLeft: 74, backgroundColor: "rgba(108, 180, 180, 0.804)" }}>
        <img src={logo} alt="logo" style={{ height: "3rem" }} />
        <p className='mt-5'>Warr & Co offer a full range of business accounting services to companies across the UK from our offices in Stockport,
        </p>
        <FaFacebookF size="30px" color="black" style={{ marginRight: 30 }} />
        <BiLogoInstagram size="30px" color="black" style={{ marginRight: 30 }} />
        <AiOutlineTwitter size="30px" color="black" />
      </div>
  
      <div className='col-md-3' style={{ backgroundColor: "rgba(108, 180, 180, 0.804)" }}>
        <ul>
          <h6 className='pb-2'>Support</h6>
          <li className='pb-2'>FAQ</li>
          <li className='pb-2'>NEWS ARTICLE</li>
          <li className='pb-2'>PRIVACY POLICY</li>
          <li className='pb-2'>TERMS & CONDITION</li>
        </ul>
      </div>
      <div className='col-md-2' style={{ backgroundColor: "rgba(108, 180, 180, 0.804)" }}>
        <ul>
          <h6 className='pb-2'>Site</h6>
          <li className='pb-2'>Home</li>
          <li className='pb-2'>About</li>
          <li className='pb-2'>Service</li>
          <li className='pb-2'>Contact</li>
          <li className='pb-2'>Blog</li>
        </ul>
      </div>
      <div className='col-md-3' style={{ backgroundColor: "rgba(108, 180, 180, 0.804)" }}>
        <ul>
          <h6>Contact</h6>
          <li className='pb-2'>(+62)81 652 4689</li>
          <li className='pb-2'>SUPPORTMAIL DEARLY.COM</li>
          <h6 className='pb-2'>Address</h6>
          <li className='pb-2'>23 VALLEY LANE, AUSTIN</li>
          <li className='pb-2'>07.00 AM-19.00 PM</li>
        </ul>
      </div>
      <hr className='mt-4 w-100' />
      <div className="row text-center mt-5">
        <div className="col">
          <p>Copyright © 2023. Designed by Robx.AI</p>
        </div>
        <div className="col">
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Support</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
     
  )
}

export default Footer
