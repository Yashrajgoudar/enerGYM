import React from 'react';
import './home.scss';
import leftimage from '../../images/main_header.png';
import {FaCrown,FaQuestion} from 'react-icons/fa';
import {SiCentos} from'react-icons/si';
import {SlDiamond} from 'react-icons/sl';
import {AiOutlinePlus} from'react-icons/ai';
import valueimg from '../../images/values.jpg';
import Pageend from '../../components/pageend/Pageend';

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="container1">
        <div className="left">
          <span>#100DaysOfWorkOut</span>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odio veniam eveniet maxime tempora porro saepe officia provident voluptatum iusto quam molestias, doloremque animi amet enim alias nostrum quia odit.</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="right">
          <div className="circle"></div>
          <img src={leftimage} alt="" />
        </div>
      </div>
      <div className="container2">
        <h1><span><FaCrown/></span>Our Programs</h1>
        <div className="programs">
          <div className="program">
            <SiCentos className='icons'/>
            <h2>Program One</h2>
            <p>Lorem ipsum dolor sit addd amet adipisicing elit. com Repudiandae, quos.</p>
            <button className="btn">
              Learn More
            </button>
          </div>
          <div className="program">
            <SiCentos className='icons'/>
            <h2>Program Two</h2>
            <p>Lorem ipsum dolor sit addd amet adipisicing elit. com Repudiandae, quos.</p>
            <button className="btn">
              Learn More
            </button>
          </div>
          <div className="program">
            <SiCentos className='icons'/>
            <h2>Program Three</h2>
            <p>Lorem ipsum dolor sit addd amet adipisicing elit. com Repudiandae, quos.</p>
            <button className="btn">
              Learn More
            </button>
          </div>
          <div className="program">
            <SiCentos className='icons'/>
            <h2>Program Four</h2>
            <p>Lorem ipsum dolor sit addd amet adipisicing elit. com Repudiandae, quos.</p>
            <button className="btn">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="left">
          <img src={valueimg} alt="" />
        </div>
        <div className="right">
          <h1><span><SlDiamond className='icons'/></span>Our Values</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure atque recusandae quidem explicabo culpa eos fugit placeat ducimus incidunt asperiores.</p>
          <div className="values">
            <div className="value">
              <SiCentos className='icons'/>
              <h2>Value One</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="value">
              <SiCentos className='icons'/>
              <h2>Value One</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="value">
              <SiCentos className='icons'/>
              <h2>Value One</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="value">
              <SiCentos className='icons'/>
              <h2>Value One</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nulla. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container4">
        <h2><span><FaQuestion className='icons'/></span> FAQs</h2>
        <div className="questions">
          <div className="question">
            <h3>How often should i exercise?<AiOutlinePlus className='icons'/></h3>
          </div>
          <div className="question">
            <h3>How often should i exercise?<AiOutlinePlus className='icons'/></h3>
          </div>
          <div className="question">
            <h3>How often should i exercise?<AiOutlinePlus className='icons'/></h3>
          </div>
          <div className="question">
            <h3>How often should i exercise?<AiOutlinePlus className='icons'/></h3>
          </div>
          <div className="question">
            <h3>How often should i exercise?<AiOutlinePlus className='icons'/></h3>
          </div>
          <div className="question">
            <h3>How often should i exercise?<AiOutlinePlus className='icons'/></h3>
          </div>
        </div>
      </div>
    </div>
      <Pageend/>
      </>
  )
}

export default Home