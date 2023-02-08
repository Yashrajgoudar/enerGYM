import React from 'react';
import Header from '../../components/header/Header';
import './about.scss';
import storyimg from '../../images/gallery1.jpg';
import Pageend from '../../components/pageend/Pageend';


const About = () => {
  return (
    <>
    <div className='about'>
      <div className="header">
        <Header/>
      </div>
        <div className="story">
          <div className="left">
            <img src={storyimg} alt="" />
          </div>
          <div className="right">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, placeat iste quibusdam architecto maxime deleniti sed officia fugiat modi quidem, enim ducimus ut saepe sequi iusto provident inventore rem ex debitis distinctio commodi. Nobis sit reiciendis molestiae aut esse dignissimos temporibus aperiam dolore minima consectetur magnam magni ratione adipisci, unde asperiores dolorum, nemo maxime eius mollitia, rem repellendus ullam debitis! Cum ad unde corporis libero possimus laborum totam eum ea. Assumenda deleniti dicta voluptate qui omnis! Nesciunt voluptate quasi sapiente obcaecati distinctio quam accusamus totam ex eum asperiores, dolores pariatur aspernatur iure magni blanditiis commodi rem vitae enim ab corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe numquam molestiae molestias enim eveniet aspernatur quo in, iusto, error fugiat est deleniti. In nulla at itaque veniam neque! Dolorum.</p>
          </div>
        </div>
    </div>
    <Pageend />
    </>
  )
}

export default About