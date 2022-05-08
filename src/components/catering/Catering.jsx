import React from "react";
import "./catering.css";
import cat1 from "./../../assets/cat1.jpg";
import cat2 from "./../../assets/cat2.jpg";
import cat3 from "./../../assets/cat3.jpg";

function Catering() {
  return (
    <section id='catering'>
      <div className='catring_body'>
        <div className='catering_title'>
          <h2>Lorem ipsum dolor sit amet Lorem  .</h2>
        </div>
        <div className='catering_menu'>
          <div className='catering_card'>
            <div className='card_img_bg'>
              <img src={cat1} alt='' />
            </div>
            <div className='card_img_bg'>
              <img src={cat2} alt='' />
            </div>
            <div className='card_img_bg'>
              <img src={cat3} alt='' />
            </div>
          </div>
        </div>
        <div className='catering_more_packages'>
        <span>Click Here For Packages</span>
      </div>
      </div>

    </section>
  );
}

export default Catering;
