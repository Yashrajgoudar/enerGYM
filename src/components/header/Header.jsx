import React from 'react'
import headerimg from '../../images/header_bg_1.jpg';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <img src={headerimg} alt="" className='headerimg' />
      
      <p><h1>About Us</h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam soluta esse libero facilis odit. Illum perspiciatis aspernatur dicta nesciunt?</p>
    </div>
  )
}

export default Header