import React from 'react'
import "./Attorney.css"
import attorney from "./assests/Group 10591.png"
import { FaEnvelope } from 'react-icons/fa';
import Header from './Header';

export default function Attorney() {
  return (
    <div className='inner-storage'>
      <div className=''>
        <div className='main-heading'>
            You don’t have to <span className='sub'>Fight them Alone.</span>
        </div>
        <div className='main-heading2'>
            Navigating legal complexities? Our team of skilled 
            attorneys is here to guide you through with clarity 
            and expertise, ensuring your rights are protected every step of the way.
        </div>
        <div className='sendEmail'>
            <input
                type="text"
                placeholder='Enter your email address'
                name="email"
                id="email"
            />
            <div className='icon'><FaEnvelope /></div>
            <button>Let's Talk</button>
        </div>
      </div>
      <div className='card-img'>
        <img src={attorney} alt="attorney" />
      </div>
    </div>
  )
}
