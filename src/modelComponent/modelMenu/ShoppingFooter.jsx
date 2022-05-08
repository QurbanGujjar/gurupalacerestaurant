import React from 'react'

const ShoppingFooter = ({Total}) => {
  return (
    <div className='shopping-footer'>
    <div className='conditions'>
      <p>By placing this order you accept the:</p>
      <p>- Data Processing Policy </p>
      <p>- End User License Agreement</p>
      <p>- Restaurant Terms - Privacy Policy</p>
    </div>
    <div className='pickup-order'>
      <button>
        <span>${Total.toFixed(2)}</span>{" "}
        <span> Place Pickup Order Now</span>
      </button>
    </div>
  </div>
  )
}

export default ShoppingFooter
