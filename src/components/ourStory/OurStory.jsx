import React from "react";
import "./ourstory.css";
import about_img from "./../../assets/about-1.jpg";
import halal from "./../../assets/halal-logo.png";
import uber from "./../../assets/uber-logo.png";

const OurStory = () => {
  return (
    <section id='about'>
      <div className='our_story_bg'>
        <div className='story_img'>
          <img src={about_img} alt='' />
        </div>
        <div className='our_story'>
          <h1>OUR Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            similique quo reiciendis accusantium officia ipsam quas qui
            accusamus commodi cum perspiciatis expedita vitae corporis
            laudantium, natus molestiae reprehenderit dolore tempore! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quam similique
            quo reiciendis accusantium officia ipsam quas qui accusamus commodi
            cum perspiciatis expedita vitae corporis laudantium, natus molestiae
            reprehenderit dolore tempore!
          </p>
          <div className='more_about'>
            <span>Know More About us</span>
          </div>
        </div>
      </div>
      <div className='sertificate'>
        <div className='sertificate_logo'>
          <img src={uber} alt='' />
        </div>
        <div className='sertificate_logo'>
          <img src={halal} alt='' />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
