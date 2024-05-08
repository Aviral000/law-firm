import React, { useEffect, useState } from 'react';
import "./Feedback.css";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

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
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    if(showContent === false) {
      setShowContent(true);
    } else {
      setShowContent(false);
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
          <div className='accordian-item'>
            <div className='accordian-heading'>
              <div className='heading-1'>How to make contacts with attorney's?</div>
              <button onClick={handleShowContent}><span className='icon'>&#x25BC;</span></button>
            </div>
            { showContent && (
              <div className='accordian-content'>
                <div className='para'>Hello I'm here and there and somewhere</div>
              </div>
              )
            }
          </div>
        </div>
      </div>
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

  console.log(feedpage);

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
    </div>
  );
}