import React from 'react'
import './seeMenuOrder.css'

const SeeMenuOrder = () => {




// Get the button that opens the modal
var btn = document.getElementById("myBtn");

const handleClick =()=>{
  // Get the modal
var modal = document.getElementById("myModal");
modal.style.display = "block";

}


  return (
    <div className="seeMenuOrder" onClick={handleClick}>
        <p>see MENU & Order</p>
    </div>
  )
}

export default SeeMenuOrder
