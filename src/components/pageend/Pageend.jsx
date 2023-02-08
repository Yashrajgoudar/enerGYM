import React from 'react';
import './pageend.scss';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineCopyright } from 'react-icons/ai';

const Pageend = () => {
  return (
    <>
    <div className='pageend'>
        <div className="block">
            <div className="block1">
                <span className="logo">enerGYM</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla architecto quam mollitia esse, modi porro quae adipisci ex perferendis earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, culpa.</p>
                <ul>
                    <li><a href="" className='link'><RiLinkedinFill className='icons'/></a></li>
                    <li><a href="https://www.facebook.com/YashrajGoudar" target={"_blank"} className='link'><FaFacebookF className='icons'/></a></li>
                    <li><a href="" className='link'><FaTwitter className='icons'/></a></li>
                    <li><a href="https://www.instagram.com/yashgoudar/" target={"_blank"} className='link'><FaInstagram className='icons'/></a></li>
                </ul>
            </div>
            <div className="block2">
                <h3>Insights</h3>
                <ul>
                    <li>Blog</li>
                    <li>Case Studies</li>
                    <li>Events</li>
                    <li>Communities</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="block3">
                <h3>Get in Touch</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>
    </div>
        <div className="copyright">
            <hr/>
            <p>2023 YBG <span><AiOutlineCopyright/></span> All Rights Reserved</p>
        </div>
        </>
  )
}

export default Pageend