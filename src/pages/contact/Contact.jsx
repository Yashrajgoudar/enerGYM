import React from 'react';
import header from '../../images/header_bg_2.jpg';
import './contact.scss';
import {HiMail} from 'react-icons/hi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import Pageend from '../../components/pageend/Pageend';



const Contact = () => {
  return (
    <div className='contact'>
      <div className="imgheader">
        <img src={header} alt="" />
        <div className="contents">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, velit maiores aspernatur ullam dolorem soluta reprehenderit minus ea illo repudiandae earum esse commodi vitae enim iure quos aliquid sapiente.</p>
        </div>
      </div>
      <div className="contacts">
        <ul>
            <li><a href="mailto : yashofbel@gmail.com" className='link'><HiMail className='icons'/></a></li>
            <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
            <li><a href="tel:+(91) 7899625091" className='link'><BsFillTelephoneFill className='icons'/></a></li>
            <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
        </ul>
      </div>
      <Pageend/>
    </div>
  )
}

export default Contact