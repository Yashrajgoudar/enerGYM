import React from 'react';
import './trainers.scss'
import headimg from '../../images/header_bg_5.jpg';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri'
import trainer1 from '../../images/trainer1.jpg';
import trainer2 from '../../images/trainer2.jpg';
import trainer3 from '../../images/trainer3.jpg';
import trainer4 from '../../images/trainer4.jpg';
import trainer5 from '../../images/trainer5.jpg';
import trainer6 from '../../images/trainer6.jpg';
import Pageend from '../../components/pageend/Pageend';



const Trainers = () => {
  return (
    <div className='trainers'>
      <div className="headimg">
        <img src={headimg} alt="" />
        <div className="content">
          <h1>Our Trainers</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dignissimos voluptatibus numquam quidem perspiciatis iure dolorum repudiandae doloribus voluptate beatae.</p>
        </div>
      </div>
      <div className="trainerimgs">
        <div className="trainer">
          <img src={trainer1} alt="" />
          <h1>Jimmy Carter</h1>
          <span>Aerobic Trainer</span>
          <ul>
                    <li><a href="" className='link'><RiLinkedinFill className='icons'/></a></li>
                    <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
                    <li><a href="" className='link'><FaTwitter className='icons'/></a></li>
                    <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
                </ul>
        </div>
        <div className="trainer">
          <img src={trainer2} alt="" />
          <h1>Yen He Bong</h1>
          <span>Krate Trainer</span>
          <ul>
                    <li><a href="" className='link'><RiLinkedinFill className='icons'/></a></li>
                    <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
                    <li><a href="" className='link'><FaTwitter className='icons'/></a></li>
                    <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
                </ul>
        </div>
        <div className="trainer">
          <img src={trainer3} alt="" />
          <h1>Alex Hales</h1>
          <span>Boxing Trainer</span>
          <ul>
                    <li><a href="" className='link'><RiLinkedinFill className='icons'/></a></li>
                    <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
                    <li><a href="" className='link'><FaTwitter className='icons'/></a></li>
                    <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
                </ul>
        </div>
        <div className="trainer">
          <img src={trainer4} alt="" />
          <h1>Andrew Galard</h1>
          <span>Weightlifting Trainer</span>
          <ul>
                    <li><a href="" className='link'><RiLinkedinFill className='icons'/></a></li>
                    <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
                    <li><a href="" className='link'><FaTwitter className='icons'/></a></li>
                    <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
                </ul>
        </div>
        <div className="trainer">
          <img src={trainer5} alt="" />
          <h1>Scarllet</h1>
          <span>Athletic Trainer</span>
                <ul>
                    <li><a href="" className='link'><RiLinkedinFill className='icons'/></a></li>
                    <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
                    <li><a href="" className='link'><FaTwitter className='icons'/></a></li>
                    <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
                </ul>
        </div>
        <div className="trainer">
          <img src={trainer6} alt="" />
          <h1>Wuaugh Hughes</h1>
          <span>MMA Trainer</span>
                  <ul>
                    <li><a href="" className='link'><RiLinkedinFill className='icons'/></a></li>
                    <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
                    <li><a href="" className='link'><FaTwitter className='icons'/></a></li>
                    <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
                  </ul>
        </div>
      </div>
      <Pageend/>
    </div>
  )
}

export default Trainers