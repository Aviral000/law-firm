import React, { useEffect, useRef } from 'react'
import './AttorneyCard.scss'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function AttorneyCard() {
const attRef = useRef([]);

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

      useEffect(() => {
        attRef.current.forEach((el, index) => {
          if (el) {
            gsap.fromTo(el,
              {
                opacity: 0,
                y: 50,
              }, 
              {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: el,
                  start: 'top 80%',
                },
              }
            );
          }
        });
      }, []);

  return (
    <div className='attorneycard-container'>
      {
        attorneys.map((ele, idx) => (
            <div className='card'>
                <div className='a1-heading' ref={el => attRef.current[idx] = el} key={idx}>Attorney {idx + 1}</div>
                <div className='a1-info'>
                    <div>
                        <div className='name'>{ele.attName}</div>
                        <div className='cases'>{ele.Cases}</div>
                    </div>
                    <div>
                        <img src={ele.image}/>
                    </div>
                    <hr />
                </div>
            </div>
        ))
      }
    </div>
  )
}
