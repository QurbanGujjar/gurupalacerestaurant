import React from 'react'
import './modelNav.css'
import menuIcon from './../../assets/iconemenu.png'
import infoIcon from './../../assets/info.png'
import shoppingIcon from './../../assets/shopping.png'
import closeIcon from './../../assets/close.png'
import {useStateValue} from './../../StateProvider'

const ModelNav = ({SetActive}) => {
  const [{ basket,user}, dispatch] = useStateValue();



const ItemModel=()=>{
  SetActive("ModelMenu")

}
const infoModel=()=>{
  SetActive("ModelInfo")


}
const shoppingModel=()=>{

  SetActive("ModelShopping")

}
const closeModel=()=>{
var modal = document.getElementById("myModal");
modal.style.display = "none";
}
return (
    <div className='navbar'>
        <label htmlFor="gurupalace">GURU PALACE</label>
        <ul>
            <li onClick={ItemModel}><img src={menuIcon} className='icon-img' alt="" /></li>
            <li onClick={infoModel}><img src={infoIcon} className='icon-img' alt="" /></li>
            <li onClick={shoppingModel}><img src={shoppingIcon} className='icon-img' alt="" /><span><p>{basket?.length}</p></span></li>
            <li onClick={closeModel}><img src={closeIcon} className='icon-img' alt="" /></li>

        </ul>

    </div>
  )
}

export default ModelNav
