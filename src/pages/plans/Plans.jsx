import React from 'react';
import './plans.scss';
import headerimg from '../../images/header_bg_4.jpg';
import Pageend from '../../components/pageend/Pageend';

const Plans = () => {
  return (
    <div className='plans'>
      <div className="memberheader">
        <img src={headerimg} alt="" />
        <div className="contents">
          <h1>Membership Plans</h1>
          <p>Consectetur, harum iure temporibus in ipsum necessitatibus libero soluta doloremque, hic maiores explicabo eaque voluptatum!</p>
        </div>
      </div>
      <div className="plan">
        <div className="block">
          <h1>Silver Package</h1>
          <p>This package is perfect fro begineers who need constant help</p>
          <h2>$29.99 <span>/mo</span></h2>
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>First Feature</li>
              <li>Second Feature</li>
              <li>Third Feature</li>
              <li>Fourth Feature</li>
              <li className="a">Fifth Feature</li>
              <li className="a">Sixth Feature</li>
              <li className="a">Seventh Feature</li>
              <li className="a">Eighth Feature</li>
              <li className="a">Ninth Feature</li>
              <li className="a">Tenth Feature</li>
              <li className="a">Eleventh Feature</li>
              <li className="a">Twelfth Feature</li>
            </ul>
          </div>
          <div className="btn">
            <button>Choose Plan</button>
          </div>
        </div>
        <div className="block">
          <h1>Gold Package</h1>
          <p>This package is perfect fro begineers who need constant help</p>
          <h2>$29.99 <span>/mo</span></h2>
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>First Feature</li>
              <li>Second Feature</li>
              <li>Third Feature</li>
              <li>Fourth Feature</li>
              <li>Fifth Feature</li>
              <li>Sixth Feature</li>
              <li>Seventh Feature</li>
              <li className="a">Eighth Feature</li>
              <li className="a">Ninth Feature</li>
              <li className="a">Tenth Feature</li>
              <li className="a">Eleventh Feature</li>
              <li className="a">Twelfth Feature</li>
            </ul>
          </div>
            <button>Choose Plan</button>
        </div>
        <div className="block">
          <h1>Platinum Package</h1>
          <p>This package is perfect fro begineers who need constant help</p>
          <h2>$29.99 <span>/mo</span></h2>
          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>First Feature</li>
              <li>Second Feature</li>
              <li>Third Feature</li>
              <li>Fourth Feature</li>
              <li>Fifth Feature</li>
              <li>Sixth Feature</li>
              <li>Seventh Feature</li>
              <li>Eighth Feature</li>
              <li>Ninth Feature</li>
              <li>Tenth Feature</li>
              <li>Eleventh Feature</li>
              <li>Twelfth Feature</li>
            </ul>
          </div>
          <div className="btn">
            <button>Choose Plan</button>
          </div>
        </div>
      </div>
      <Pageend/>
    </div>
  )
}

export default Plans