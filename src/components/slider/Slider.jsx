import React,{useEffect} from 'react'
import useWebAnimations,{slideInUp} from "@wellyshen/use-web-animations";

import Slider1 from './../../assets/slider1.jpg'
import Slider2 from './../../assets/slider2.jpg'
import Slider3 from './../../assets/slider3.jpg'
import Slider4 from './../../assets/slider4.jpg'
import Slider5 from './../../assets/slider5.jpg'
import Slider6 from './../../assets/slider6.jpg'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./style.css";

// import required modules
import { Navigation,Autoplay,Pagination } from "swiper";
const Slider = () => {
    const { ref, playState, getAnimation } = useWebAnimations({...slideInUp});


    setTimeout(
        useEffect(() => {

            setInterval(myTimer, 3000);
          },[])
        , 3000)
        function myTimer() {
            getAnimation().pause()
            getAnimation().play()
        }

  return (

     <>

      <Swiper navigation={true} modules={[Navigation,Autoplay,Pagination]}
     className="mySwiper"
    //  pagination={{clickable:true}}

     autoplay={{delay:2600}}

     >

        <SwiperSlide><img src={Slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slider4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slider5} alt="" /></SwiperSlide>


      </Swiper>

      <div className="slider__text" ref={ref}><h5>Serving Best Restaurant,Catering &amp; Banquet Services In New Jersey   </h5></div>
      <div className="slide__top" ><span><a href="#">TOP</a></span></div>


<div className="slider_Footer">
<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
<div className="pickup">
<button>CURBSIDE PICKUP</button>
</div>
</div>


{/* </section> */}

    </>
  )
}

export default Slider
