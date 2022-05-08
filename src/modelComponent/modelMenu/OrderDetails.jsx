import React from 'react'

const OrderDetails = ({ basket, subTotal,tex ,Total}) => {
  return (
    <div className='order-details'>
    <div className='order-head'>
      <ul>
        <li>Qty</li>
        <li className='mid'>Item</li>
        <li>Price</li>
        <li></li>
      </ul>
    </div>
    <div className='order-body'>
  { basket.length!==0 ? basket.map((item, index) => (
        // console.log(item)
        <ul key={index}>
          <li>{item.qty}x</li>
          <li className='mid'>{item.name}</li>

          <li>{item.val}</li>
          <li>x</li>
        </ul>
      )):(<h1>Cart is empty
        </h1>) }
    </div>
    <div className='total-body'>
      <div className='sub-total'>
        <ul>
          <li>Sub-Total</li>

          <li>${subTotal.toFixed(2)}</li>
        </ul>
        <ul>
          <li>N J SALES TAX (6.625%):</li>
          <li>${tex.toFixed(2)}</li>
        </ul>
      </div>
      <div className='total'>
        <ul>
          <li>Total</li>
          <li>${Total.toFixed(2)}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default OrderDetails
