import React from 'react'
import "./Feedback.css"
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

export default function Feedback() {
  return (
    <div className='feedback-container'>
      <div className='feedback'>
        <div className='upper'>
          <div>
            <div className='heading'>What says our</div>
            <div className='heading'>Happy Clients</div>
          </div>
          <div className='buttons'>
            <button className='button1'><WestIcon /></button>
            <button className='button2'><EastIcon /></button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
