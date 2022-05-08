import React, { useState } from "react";
import "./QuantityForm.css";
import {useStateValue} from './../../StateProvider'

function QuantityForm({ item }) {

    const [{basket},dispatch]=useStateValue()


  let unitPrice =item.price;


  let [qty, setQty] = useState(1);
  let [val, setVal] = useState(unitPrice);


  const onChange = (e) => {
    setQty(e.target.value);
    if (qty <= 0) {
      setQty(1);
    } else {
      setVal(qty * unitPrice);
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setQty(Number(qty) + 1);
    if (qty <= 0) {
      setQty(1);
    } else {
      setQty(Number(qty) + 1);
      setVal(Number(qty + 1) * Number(unitPrice));
    }
  }
  const handleSub = (e) => {
    e.preventDefault();
    if (Number(qty) - 1 <= 0) {
      setQty(1);
    } else {
      setQty(Number(qty) - 1);
      setVal(Number(qty - 1) * Number(unitPrice));
    }
  }
 const  handleAdd_to_card=(e)=>{
     e.preventDefault()
    // let productDetails=[item.id,item.name,item.price,qty,val]
    // console.log(val)

    dispatch({
        type:"ADD_TO_BASKET",
items:{
    id:item.id,
    name:item.name,
    price:item.price,
    qty:qty,
    val:val?val:unitPrice

}

    })


    setQty(1)
    setVal("")
    var modalForm = document.getElementById("myModalForm");
  modalForm.style.display = "none";


 }
  return (
    <div id='myModalForm' className='modalForm'>
      <div className='modalForm-content'>
        <form className='form'>
          <p>{item.name}</p>
          <label htmlFor=''>Quantity</label>
          <div className='btn'>
            <input
              type='text'
              id='qty'
              name='qty'
              value={qty}
              onChange={onChange}
            />
            <button className='add' onClick={handleAdd}>
              +
            </button>
            <button className='sub' onClick={handleSub}>
              -
            </button>
          </div>
          <button onClick={handleAdd_to_card} className='Add-to-cart'>
            <span>${val ? val : unitPrice}</span> Add to cart
          </button>
        </form>
      </div>
    </div>
  );
}
export default QuantityForm;
