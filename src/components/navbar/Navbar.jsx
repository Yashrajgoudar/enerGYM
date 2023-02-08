import React from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';

const Navbar = () => {

const [toggle,setToggle]=useState(false);

  return (
    <div className='navbar'>
        <div className="left">
            <span className='logo'><Link to="/" className='link'>enerGYM</Link></span>
        </div>
        <div className="right">
            <ul>
                <li><Link to="/" className='link'>Home</Link> </li>
                <li><Link to="/about" className='link'>About</Link> </li>
                <li><Link to="/gallery" className='link'>Gallery</Link> </li>
                <li><Link to="/plans" className='link'>Plans</Link> </li>
                <li><Link to="/trainers" className='link'>Trainers</Link> </li>
                <li><Link to="/contact" className='link'>Contact</Link></li>
            </ul>
        </div>
        <div className="rightmenu">
          <FiMenu className='menubtn' onClick={()=>{setToggle(true)}}/>

          {
            toggle &&(
                <div className="insidebtns">
                  <GrClose className='closebtn' onClick={()=>{setToggle(false)}}/>
                  <ul>
                      <li><Link to="/" className='link' onClick={()=>{setToggle(false)}}>Home</Link> </li>
                      <li><Link to="/about" className='link' onClick={()=>{setToggle(false)}}>About</Link> </li>
                      <li><Link to="/gallery" className='link' onClick={()=>{setToggle(false)}}>Gallery</Link> </li>
                      <li><Link to="/plans" className='link' onClick={()=>{setToggle(false)}}>Plans</Link> </li>
                      <li><Link to="/trainers" className='link' onClick={()=>{setToggle(false)}}>Trainers</Link> </li>
                      <li><Link to="/contact" className='link' onClick={()=>{setToggle(false)}}>Contact</Link></li>
                  </ul>
                </div>
            )
          }
        </div>
    </div>
  )
}

export default Navbar