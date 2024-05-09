import React, { useEffect, useState } from 'react';
import "./Feedback.css";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Subscript } from '@mui/icons-material';

const OurTeam = () => {
  const attorneys = [
    {
      image: "https://th.bing.com/th/id/R.c257a4c6076ab929cb426487e3882cac?rik=6EmVWtBfjGfpDw&riu=http%3a%2f%2fdeadfix.com%2fwp-content%2fuploads%2f2012%2f09%2fFACE.jpg&ehk=pAXBO8ruC7Qu4OTN1JFwOfdqol7mT1Cdu4Klj42bxnI%3d&risl=&pid=ImgRaw&r=0",
      attName: "Cicilian Julian",
      Cases: 343
    },
    {
      image: "https://th.bing.com/th/id/R.c257a4c6076ab929cb426487e3882cac?rik=6EmVWtBfjGfpDw&riu=http%3a%2f%2fdeadfix.com%2fwp-content%2fuploads%2f2012%2f09%2fFACE.jpg&ehk=pAXBO8ruC7Qu4OTN1JFwOfdqol7mT1Cdu4Klj42bxnI%3d&risl=&pid=ImgRaw&r=0",
      attName: "Cicilian Julian",
      Cases: 343
    },
    {
      image: "https://th.bing.com/th/id/R.c257a4c6076ab929cb426487e3882cac?rik=6EmVWtBfjGfpDw&riu=http%3a%2f%2fdeadfix.com%2fwp-content%2fuploads%2f2012%2f09%2fFACE.jpg&ehk=pAXBO8ruC7Qu4OTN1JFwOfdqol7mT1Cdu4Klj42bxnI%3d&risl=&pid=ImgRaw&r=0",
      attName: "Cicilian Julian",
      Cases: 343
    },
    {
      image: "https://th.bing.com/th/id/R.c257a4c6076ab929cb426487e3882cac?rik=6EmVWtBfjGfpDw&riu=http%3a%2f%2fdeadfix.com%2fwp-content%2fuploads%2f2012%2f09%2fFACE.jpg&ehk=pAXBO8ruC7Qu4OTN1JFwOfdqol7mT1Cdu4Klj42bxnI%3d&risl=&pid=ImgRaw&r=0",
      attName: "Cicilian Julian",
      Cases: 343
    },
    {
      image: "https://th.bing.com/th/id/R.c257a4c6076ab929cb426487e3882cac?rik=6EmVWtBfjGfpDw&riu=http%3a%2f%2fdeadfix.com%2fwp-content%2fuploads%2f2012%2f09%2fFACE.jpg&ehk=pAXBO8ruC7Qu4OTN1JFwOfdqol7mT1Cdu4Klj42bxnI%3d&risl=&pid=ImgRaw&r=0",
      attName: "Cicilian Julian",
      Cases: 343
    },
    {
      image: "https://th.bing.com/th/id/R.c257a4c6076ab929cb426487e3882cac?rik=6EmVWtBfjGfpDw&riu=http%3a%2f%2fdeadfix.com%2fwp-content%2fuploads%2f2012%2f09%2fFACE.jpg&ehk=pAXBO8ruC7Qu4OTN1JFwOfdqol7mT1Cdu4Klj42bxnI%3d&risl=&pid=ImgRaw&r=0",
      attName: "Cicilian Julian",
      Cases: 343
    },
  ]
  return (
    <div className='team-card'>
      <div className='heading'>
        Our Team
      </div>
      <div className='attorney-card'>
        {attorneys.map((att, idx) => (
          <div className='cards' key={idx}>
            <div className='inner-card'>
              <div className='img-card'>
                <img src={att.image} alt={att.attName} />
              </div>
              <div className='att-desc'>
                <div className='att-name'>{att.attName}</div>
                <div className='att-cases'>{att.Cases} Cases</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const FAQ = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [isActive1, setIsAcive1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [isActive2, setIsAcive2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [isActive3, setIsAcive3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [isActive4, setIsAcive4] = useState(false);

  const handleShowContent1 = () => {
    if(showContent1 === false && isActive1 === false) {
      setShowContent1(true);
      setIsAcive1(true);
    } else {
      setShowContent1(false);
      setIsAcive1(false);
    }
  }

  const handleShowContent2 = () => {
    if(showContent2 === false && isActive2 === false) {
      setShowContent2(true);
      setIsAcive2(true);
    } else {
      setShowContent2(false);
      setIsAcive2(false);
    }
  }

  const handleShowContent3 = () => {
    if(showContent3 === false && isActive3 === false) {
      setShowContent3(true);
      setIsAcive3(true);
    } else {
      setShowContent3(false);
      setIsAcive3(false);
    }
  }

  const handleShowContent4 = () => {
    if(showContent4 === false && isActive4 === false) {
      setShowContent4(true);
      setIsAcive4(true);
    } else {
      setShowContent4(false);
      setIsAcive4(false);
    }
  }

  return (
    <div className='FAQ'>
      <div className='heading'>FAQ</div>
      <div className='box'>
        <div className='para'>"Welcome to our FAQ section, where we aim to address common questions and
          concerns you may have. Below, you'll find answers to some of the most frequently
          asked questions about our products/services. If you can't find what you're looking
          for, feel free to reach out to our support team for further assistance. We're
          here to help!"
        </div>
        <div className='accordian'>
          <div className={`accordian-item ${isActive1 ? "active" : ""}`}>
            <div className='accordian-heading'>
              <div className='heading-1'>How to make contacts with attorney's?</div>
              <button onClick={handleShowContent1}>
                {isActive1 ? (
                  <span className="icon">&#x25B2;</span>
                ) : (
                  <span className="icon">&#x25BC;</span>
                )}
              </button>
            </div>
              <div className='accordian-content'>
                <div className='para'>To get in touch with one of our attorneys, you can call our main office line at 120-000-9191 and request to schedule an initial consultation. One of our friendly staff members will assist you in setting up an appointment with an attorney who specializes in the area of law relevant to your case. Alternatively, you can visit our website at <a>attorney.com</a> and fill out the online contact form, providing details about your legal matter. An attorney from the appropriate practice area will then reach out to you to discuss your situation further.</div>
              </div>
          </div>
          <div className={`accordian-item ${isActive2 ? "active" : ""}`}>
            <div className='accordian-heading'>
              <div className='heading-1'>How much is my case worth?</div>
              <button onClick={handleShowContent2}>
                {isActive2 ? (
                  <span className="icon">&#x25B2;</span>
                ) : (
                  <span className="icon">&#x25BC;</span>
                )}
              </button>
            </div>
            <div className='accordian-content'>
              <div className='para'>The value of a case can vary significantly depending on the specific circumstances involved, such as the severity of the injury or damage, the strength of the evidence, and the applicable laws. It is difficult to provide an accurate estimate without thoroughly reviewing the details of your particular situation. Our experienced attorneys will carefully evaluate your case and provide you with a reasonable assessment of its potential value.</div>
            </div>
          </div>
          <div className={`accordian-item ${isActive3 ? "active" : ""}`}>
            <div className='accordian-heading'>
              <div className='heading-1'>What should I do to meet the firm president?</div>
              <button onClick={handleShowContent3}>
                {isActive3 ? (
                  <span className="icon">&#x25B2;</span>
                ) : (
                  <span className="icon">&#x25BC;</span>
                )}
              </button>
            </div>
            <div className='accordian-content'>
              <div className='para'>While our firm president is heavily involved in the overall management and strategic direction of the firm, they do not typically meet with clients directly. However, if you have a particular concern or request that requires their attention, you can discuss it with your assigned attorney, who will then determine the appropriate course of action and relay the message to the president if necessary.</div>
            </div>
          </div>
          <div className={`accordian-item ${isActive4 ? "active" : ""}`}>
            <div className='accordian-heading'>
              <div className='heading-1'>How do I register a complaint against an attorney?</div>
              <button onClick={handleShowContent4}>
                {isActive4 ? (
                  <span className="icon">&#x25B2;</span>
                ) : (
                  <span className="icon">&#x25BC;</span>
                )}
              </button>
            </div>
            <div className='accordian-content'>
              <div className='para'>We take all complaints against our attorneys very seriously. If you have a concern or issue with the conduct or performance of one of our attorneys, please contact our firm's ethics and compliance department immediately. They will thoroughly investigate the matter and take appropriate action as necessary. You can reach them by phone at [insert phone number] or by email at [insert email address].</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Subscription = () => {
  return (
    <div>
      
    </div>
  )
}

export default function Feedback() {
const [feedpage, setFeedpage] = useState(0);
const [feedCard, setFeedCard] = useState(4);
const [currentFeed, setCurrentFeed] = useState([]);

  const feedback = [
    {
      image: "https://loveyoursmileorthodontics.com.au/wp-content/uploads/93697233.jpg",
      names: "Jane Austin",
      occupation: "Designer",
      message: "I really love being a part of such a good firm who value their client more than anything, so I whenever I'm in trouble I will always be here to seek help."
    },
    {
      image: "https://loveyoursmileorthodontics.com.au/wp-content/uploads/93697233.jpg",
      names: "Jane Austin",
      occupation: "Designer",
      message: "I really love being a part of such a good firm who value their client more than anything, so I whenever I'm in trouble I will always be here to seek help."
    },
    {
      image: "https://loveyoursmileorthodontics.com.au/wp-content/uploads/93697233.jpg",
      names: "Jane Austin",
      occupation: "Designer",
      message: "I really love being a part of such a good firm who value their client more than anything, so I whenever I'm in trouble I will always be here to seek help."
    },
    {
      image: "https://loveyoursmileorthodontics.com.au/wp-content/uploads/93697233.jpg",
      names: "Austin",
      occupation: "Designer",
      message: "I really love being a part of such a good firm who value their client more than anything, so I whenever I'm in trouble I will always be here to seek help."
    },
    {
      image: "https://loveyoursmileorthodontics.com.au/wp-content/uploads/93697233.jpg",
      names: "Austin",
      occupation: "Designer",
      message: "I really love being a part of such a good firm who value their client more than anything, so I whenever I'm in trouble I will always be here to seek help."
    },
    {
      image: "https://loveyoursmileorthodontics.com.au/wp-content/uploads/93697233.jpg",
      names: "Austin",
      occupation: "Designer",
      message: "I really love being a part of such a good firm who value their client more than anything, so I whenever I'm in trouble I will always be here to seek help."
    },
  ];

  const handleIncPage = () => {
    if (feedpage < feedback.length - feedCard) {
      setFeedpage(feedpage + feedCard);
    }
  }

  const handleDecPage = () => {
    if (feedpage > 0) {
      setFeedpage(feedpage - feedCard);
    }
  }

  useEffect(() => {
    setCurrentFeed(feedback.slice(feedpage, feedpage + feedCard));
  }, [feedpage, feedCard]);

  return (
    <div className='feedback-container'>
      <div className='feedback'>
        <div className='upper'>
          <div>
            <div className='heading'>What says our</div>
            <div className='heading'>Happy Clients</div>
          </div>
          <div className='buttons'>
            <button className='button1' onClick={handleDecPage}><WestIcon /></button>
            <button className='button2' onClick={handleIncPage}><EastIcon /></button>
          </div>
        </div>
        <div className='lower'>
          <div className='box'>
            {currentFeed.map((feed, index) => (
              <div key={index} className='card'>
                <div className='img-card'>
                  <img src={feed.image} alt={feed.names} />
                </div>
                <div className='feeder-name'>{feed.names}</div>
                <div className='occupation'>{feed.occupation}</div>
                <div className='message'>{feed.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurTeam />
      <FAQ />
      <Subscription />
    </div>
  );
}