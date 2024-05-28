import React, { useLayoutEffect, useRef } from 'react'
import president from "./assests/president-removebg-preview.png"
import "./PresidentCard.scss"
import vp from "./assests/vicepresident-removebg-preview.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const VicePresidentCard = () => {
const viceRef = useRef(null);
const infoRef = useRef(null);

useLayoutEffect(() => {
    const vice = viceRef.current;
    const info = infoRef.current;

    gsap.fromTo(
        vice,
        {
            x: '0',
            opacity: 1,
        },
        {
            x: '100%',
            opacity: 0,
            duration: 3,
            delay: 2,
            scrollTrigger: {
                trigger: vice,
                start: 'top 80%'
            }
        }
    )

    gsap.fromTo(
        info,
        {
            y: '+100%',
            opacity: 0,
        },
        {
            y: '0%',
            opacity: 1,
            duration: 3,
            delay: 2,
            scrollTrigger: {
                trigger: vice,
                start: 'top 80%'
            }
        }
    )

}, [])

    return (
        <div className='vp-container'>
            <div className='vp-heading' ref={viceRef}>Vice President</div>
            <div className='vp-info' ref={infoRef}>
                <div>
                    <div className='name'>Kim Su Suzan</div>
                    <div className='ranking'>World Ranking - 12th</div>
                    <div className='article'>As Vice President of the Russo Law Firm, Kim Su Suzan brings a wealth of expertise and a strong commitment to excellence in legal practice. With a distinguished career spanning over 10 years, she has been instrumental in shaping the firm's strategic direction and ensuring the highest standards of client service. Known for [his/her/their] deep understanding of complex legal issues and an unwavering dedication to justice, Kim Su Suzan has successfully managed high-profile cases and provided invaluable counsel to clients. Her leadership and vision continue to drive the Russo Law Firm's growth and reputation as a trusted legal partner.</div>
                </div>
                <div>
                    <img src={vp} alt="" />
                </div>
                <hr />
            </div>
        </div>
    )
}

export default function PresidentCard() {
const presidentCardRef = useRef(null);
const presidentImgRef = useRef(null);

useLayoutEffect(() => {
    const presidentCard = presidentCardRef.current;
    const presidentImg = presidentImgRef.current;

    gsap.fromTo(
        presidentCard,
        {
            x: '-100%',
            opacity: 0,
        },
        {
            x: '0',
            opacity: 1,
            duration: 2
        }
    )

    gsap.fromTo(
        presidentImg,
        {
            x: '100%',
            opacity: 0,
        },
        {
            x: '0',
            opacity: 1,
            duration: 2
        }
    )
}, [])

  return (
    <div className='attorney-container'>
        <div className='president'>
            <div className='card' ref={presidentCardRef}>
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
            <div className='img' ref={presidentImgRef}>
                <img src={president} alt="russo" />
            </div>
        </div>
        <hr />
        <VicePresidentCard />
    </div>
  )
}
