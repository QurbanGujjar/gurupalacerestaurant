import React,{useState} from 'react'
import ModelInfo from '../modelMenu/ModelInfo';
import ModelMenu from '../modelMenu/ModelMenu';
import ModelShopping from '../modelMenu/ModelShopping';
import ModelNav from '../modelNav/ModelNav';
import './model.css'

const Model = () => {
  const [active,SetActive]=useState("ModelMenu")
  return (


<div id="myModal" className="modal">
  <div className="modal-content">

    <ModelNav SetActive={SetActive}/>
    {active==="ModelMenu" &&<ModelMenu/>}
    {active==="ModelInfo" &&<ModelInfo/>}
    {active==="ModelShopping" &&<ModelShopping/>}


  </div>

</div>



  )
}

export default Model
