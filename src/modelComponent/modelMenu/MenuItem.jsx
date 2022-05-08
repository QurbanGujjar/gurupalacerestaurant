import React,{useState} from "react";
import "./menuItem.css";
import QuantityForm from "./QuantityForm";
// import appetizers from "./../../assets/appetizer.jpg";
function MenuItem({articles ,title,subtitle,img}) {
  const [CurrentItem, setCurrentItem] = useState("","");

const handleClick =(item)=>{

  var modalForm = document.getElementById("myModalForm");
  // console.log(modalForm)
  modalForm.style.display = "block";
  // console.log(item);
  setCurrentItem(item)
}
  return (
    <>
    <div className='menu-container'>
        <div className='menu-title'>
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
      </div>
      <div className="menu-img">
      <img src={img} alt='' />
      </div>
      {articles.map((item,index)=>(<div className='menu-item'  key={index} onClick={()=> handleClick(item)}>
            <span>{item.name}</span><span>{item.price}</span>
          </div>))}
    </div>
    <QuantityForm item={CurrentItem} />
    </>  );
}

export default MenuItem;
