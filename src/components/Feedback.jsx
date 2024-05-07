import React, { useEffect, useState } from 'react';
import "./Feedback.css";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const ourTeam = () => {
  return (
    <div>
      <div></div>
      <div></div>
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
    </div>
  );
}