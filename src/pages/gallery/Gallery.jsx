import React from 'react';
import galleryimg from '../../images/header_bg_3.jpg';
import './gallery.scss';
import Pageend from '../../components/pageend/Pageend';
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';
import gallery6 from '../../images/gallery6.jpg';
import gallery7 from '../../images/gallery7.jpg';
import gallery8 from '../../images/gallery8.jpg';
import gallery9 from '../../images/gallery9.jpg';
import gallery10 from '../../images/gallery10.jpg';
import gallery11 from '../../images/gallery11.jpg';
import gallery12 from '../../images/gallery12.jpg';



const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="imgheader">
        <img src={galleryimg} alt="" />
        <div className="contents">
          <h1>Our Gallery</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, velit maiores aspernatur ullam dolorem soluta reprehenderit minus ea illo repudiandae earum esse commodi vitae enim iure quos aliquid sapiente.</p>
        </div>
      </div>
      <div className="galleryimgs">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
        <img src={gallery7} alt="" />
        <img src={gallery8} alt="" />
        <img src={gallery9} alt="" />
        <img src={gallery10} alt="" />
        <img src={gallery11} alt="" />
        <img src={gallery12} alt="" />
      </div>
      <Pageend/>
    </div>
    
  )
}

export default Gallery