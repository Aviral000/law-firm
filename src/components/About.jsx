import React from 'react'
import "./About.css"
import gift from "./assests/Union.png";
import iconback from "./assests/Ellipse 9.png"
import businesslaw from "./assests/Rectangle 3652.png"
import partnershiplaw from "./assests/Rectangle 3651.png"
import realestatelaw from "./assests/Rectangle 3653.png"
import business from "./assests/Rectangle 3654.png"
import elderabuse from "./assests/Rectangle 3655.png"
import landlorddisputes from "./assests/Rectangle 3656.png"

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
              <img src={iconback} alt="background" className='img1' />
              <div className='gift-icon'>
                <img src={gift} alt="icon" className='img2' />
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
              <img src={iconback} alt="background" className='img1' />
              <div className='gift-icon'>
                <img src={gift} alt="icon" className='img2' />
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
              <img src={iconback} alt="background" className='img1' />
              <div className='gift-icon'>
                <img src={gift} alt="icon" className='img2' />
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
        <div className='heading'>Area of Practices</div>
        <div className='card'>
          <div className='grid1'>
            <div className='img1'>
              <img src={businesslaw} alt="businesslaw" />
              <div className='tag-position'>
                <div className='tag1'>
                  Business Law
                </div>
              </div>
            </div>
            <div className='img2'>
              <img src={partnershiplaw} alt="partnershiplaw" />
              <div className='tag-position'>
                <div className='tag2'>
                  Partnership Law
                </div>
              </div>
            </div>
          </div>
          <div className='grid2'>
            <div className='img2'>
              <img src={realestatelaw} alt="realestatelaw" />
              <div className='tag-position'>
                <div className='tag2'>
                  Real Estate Law
                </div>
              </div>
            </div>
            <div className='img1'>
              <img src={business} alt="businesslaw" />
              <div className='tag-position'>
                <div className='tag1'>
                  Money Forgery Law
                </div>
              </div>
            </div>
          </div>
          <div className='grid3'>
            <div className='img1'>
              <img src={landlorddisputes} alt="realestatelaw" />
              <div className='tag-position'>
                <div className='tag1'>
                  LandLord Disputes
                </div>
              </div>
            </div>
            <div className='img2'>
              <img src={elderabuse} alt="businesslaw" />
              <div className='tag-position'>
                <div className='tag2'>
                  Elder Abuse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
