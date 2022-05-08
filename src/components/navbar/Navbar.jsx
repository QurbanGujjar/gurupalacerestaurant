import React,{useState} from 'react'
import './navbar.css';
import logo from './../../assets/logo-1.png'
import Slider from '../slider/Slider';

function Navbar() {
    const [activeNav,setActiveNav]=useState("#");
  return (
      <>
    <nav>
    <input type="checkbox" id="check"/>
    <label htmlFor="check" className="checkbtn">
    <i className="fas fa-bars"></i>
</label>
    <label className="logo">
        <img src={logo} alt="" />
    </label>
    <label className="book2">Book a Banquet</label>
    <ul className="">
        <li><a href="#" onClick={()=>setActiveNav("#")} className={`${activeNav==='#'?"active":""}`}>Home</a></li>
        <li><a href="#" onClick={()=>setActiveNav("#about")} className={`${activeNav==='#about'?"active":""}`} >About</a></li>
        <li><a href="#" onClick={()=>setActiveNav("#contact")} className={`${activeNav==='#contact'?"active":""}`}>Contact</a></li>
        <li><a href="#"onClick={()=>setActiveNav("#services")} className={`${activeNav==='#services'?"active":""}`}>Services</a></li>
        <li><a href="#" onClick={()=>setActiveNav("#feedback")} className={`${activeNav==='#feedback'?"active":""}`}>Feedback</a></li>
        <li> <label className="book1">Book a Banquet</label></li>
    </ul>


</nav>


</>
  )
}

export default Navbar
