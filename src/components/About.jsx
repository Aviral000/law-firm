import React from 'react'
import "./About.css"
import gift from "./assests/Union.png";
import iconback from "./assests/Ellipse 9.png"

export default function About() {
  return (
    <div className='inner-container2'>
      <div className='starter'>
          <div className='about-heading'>Let's Introduce Ourself</div>
          <div className='vertical-line'></div>
          <div className='sub-heading'>
              <div className='h1'>Criminal Lawyer</div>
              <div className='p1'>"Criminal defense attorneys specialize in representing individuals or organizations
                charged with criminal conduct. They provide legal counsel and representation throughout
                the legal process, aiming to protect the rights and 
                interests of their clients.
              </div>
          </div>
      </div>
      <div className='middle'>
        <div className='heading'>Why Choose us?</div>
        <div className='box-group'>
          <div className='box'>
            <div className='icon'>
              <img src={iconback} alt="" className='img1' />
              <div className='gift-icon'>
                <img src={gift} alt="" className='img2' />
              </div>
            </div>
            <div className='sub-heading'>98% Success Rate</div>
            <div className='para'>With our experienced team of criminal lawyers,
              we have achieved a remarkable success rate of 98% in defending our 
              clients and securing favorable outcomes in their cases.
            </div>
            <div className='button1'>
              <button>Read More</button>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <img src={iconback} alt="" className='img1' />
              <div className='gift-icon'>
                <img src={gift} alt="" className='img2' />
              </div>
            </div>
            <div className='sub-heading'>100% Success Rate</div>
            <div className='para'>Client satisfaction is our top priority. We
              are committed to providing personalized legal services, understanding our
              clients' needs, and achieving the best possible results for them. That's why
              we have maintained a 100% client satisfaction rate.
            </div>
            <div className='button1' style={{ paddingTop: ".5rem" }}>
              <button>Read More</button>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <img src={iconback} alt="" className='img1' />
              <div className='gift-icon'>
                <img src={gift} alt="" className='img2' />
              </div>
            </div>
            <div className='sub-heading'>100% Success Rate</div>
            <div className='para'>We understand that legal issues can arise at any time,
              day or night. That's why we offer round-the-clock legal support to our clients.
              Whether you need assistance with a legal matter or have questions about your case,
              our team of dedicated lawyers is here to help you.
            </div>
            <div className='button1' style={{ paddingTop: ".5rem" }}>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className='lower'>

      </div>
    </div>
  )
}
