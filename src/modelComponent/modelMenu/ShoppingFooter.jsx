import React,{useContext} from 'react'
import { useNavigate } from "react-router-dom";
import noteContext from './../../context/notes/noteContext';


const ShoppingFooter = ({Total, basket, check, payMethod}) => {
  const context = useContext(noteContext);
  const {addItems,addOrderPickupMethod} = context;
  const navigate = useNavigate();

  const punchOrder =()=>{
    let token= localStorage.getItem('token')
    if(!token){
      navigate("/login");


    }else{
      console.log("Order Punched")
      // console.log(check, payMethod)
      addOrderPickupMethod(check, payMethod)
      for(let i=0;i<basket.length;i++){
        // console.log(basket[i])
        addItems(basket[i].id,basket[i].name,basket[i].price,basket[i].qty,basket[i].val)

      }
    }
  }
  return (
    <div className='shopping-footer'>
    <div className='conditions'>
      <p>By placing this order you accept the:</p>
      <p>- Data Processing Policy </p>
      <p>- End User License Agreement</p>
      <p>- Restaurant Terms - Privacy Policy</p>
    </div>
    <div className='pickup-order'>
      <button onClick={punchOrder}>
        <span>${Total.toFixed(2)}</span>{" "}
        <span> Place Pickup Order Now</span>
      </button>
    </div>
  </div>
  )
}

export default ShoppingFooter
