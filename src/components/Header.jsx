import React from 'react';
import "./Header.css";
import igstudio from "./assests/Igstudio.png"
import vector from "./assests/Vector.png"

export default function Header() {
  return (
    <div>
      <nav className='container'>
        <div className='nav1'>
            <div className='n1'>
                <img src={vector} alt="Logo" className='logo' />
                <img src={igstudio} alt="Name" className='name' />
            </div>
        </div>
        <div className='nav2'>
            <button>Home</button>
            <button>Attorneys</button>
            <button>Practice Areas</button>
            <button>About Us</button>
        </div>
        <div className='nav3'><button>Contact Now</button></div>
      </nav>
    </div>
  )
}
