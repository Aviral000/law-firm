import React from 'react';
import "./Header.css";
import igstudio from "./assests/Igstudio.png"
import vector from "./assests/Vector.png"
import { Link } from 'react-router-dom';

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
            <button><Link to="/" style={{ color: "white" }}>Home</Link></button>
            <button><Link to="/attorney" style={{ color: "white" }}>Attorneys</Link></button>
            <button><Link to="/attorney" style={{ color: "white" }}>Practice Areas</Link></button>
            <button><Link to="/attorney" style={{ color: "white" }}>About Us</Link></button>
        </div>
        <div className='nav3'><button>Contact Now</button></div>
      </nav>
    </div>
  )
}
