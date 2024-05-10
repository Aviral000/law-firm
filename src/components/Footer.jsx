import React from 'react'
import "./Footer.css"
import vector from "./assests/Vector.png"
import igstudio from "./assests/Igstudio.png"
import { Link } from '@mui/material'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='horizontal-line'></div>
      <div className='top'>
        <div className='img-card'>
            <img src={vector} alt="Logo" className='logo' />
            <img src={igstudio} alt="Name" className='name' />
        </div>
        <div className='options'>
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practise Areas</div>
            <div>About Us</div>
        </div>
        <div className='links'>
            <a href="https://www.instagram.com/attorneymartinez/?hl=en" target='_blank'><img src="https://th.bing.com/th/id/R.c5ad0581106cbcc8bb6e654d08362c0a?rik=HxhkLGdlB41KCQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fInstagram-Logo-PNG-Image.png&ehk=9tpsBD6oOcSKvZ4ZBZeY5FU8PhVUfMT4HJLDpJzk2yY%3d&risl=&pid=ImgRaw&r=0" alt="insta-log" /></a>
            <a href="https://www.facebook.com/AGBecerra" target='_blank'><img src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="facebook-logo" /></a>
            <a href="https://twitter.com/NewYorkStateAG" target='_blank'><img src="https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="twitter-logo" /></a>
            <a href="https://www.crio.do/learn/portfolio/avimalik02/" target="_blank"><img src="https://mir-s3-cdn-cf.behance.net/user/276/40bc3e390796247.5dddf783d425b.png" alt="crio.do-logo" /></a>
        </div>
      </div>
      <div className='bottom'>
        <a href="https://en.wikipedia.org/wiki/Copyright" target='_blank'><div>© 2020 Acme. All rights reserved.</div></a>
        <Link to="/" style={{ color: 'white' }} className='policy'><div>Privacy Policy</div></Link>
        <Link top="/" style={{ color: 'white' }} className='terms'><div>Terms of Service</div></Link>
      </div>
    </div>
  )
}
