import React from 'react'
import president from "./assests/president-removebg-preview.png"
import "./PresidentCard.scss"

export default function PresidentCard() {
  return (
    <div className='attorney-container'>
        <div className='president'>
            <div className='card'>
                <div className='info'>
                    <div className='name'>Micheal Russo</div>
                    <div className='designation'>President of the Russo Law firm</div>
                    <div className='ranking'>World Ranking - 6th</div>
                </div>
                <div className='quotes'>"Driven by a profound sense of duty, we stand as guardians
                    of the law, dedicated to advocating for the rights and interests of our clients
                    while upholding the principles of integrity and ethical conduct. With unwavering
                    resolve, we embrace challenges as opportunities to demonstrate our unwavering
                    dedication to serving the cause of justice, striving tirelessly to leave a lasting
                    legacy of legal excellence and positive societal impact."
                </div>
            </div>
            <div className='img'>
                <img src={president} alt="russo" />
            </div>
        </div>
    </div>
  )
}
