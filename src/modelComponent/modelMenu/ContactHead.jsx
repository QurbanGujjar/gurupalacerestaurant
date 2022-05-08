import React,{useState} from 'react'
import CancelEditing from './CancelEditing'
import EditContactBtn from './EditContactBtn'
import './contactHead.css'

const ContactHead = ({editOrCancelBtn,setEditOrCancelBtn}) => {

  return (
    <div className='contact-head'>
        <div className="Contact-title">Contact</div>

 {editOrCancelBtn==="edit"?<EditContactBtn setEditOrCancelBtn={setEditOrCancelBtn}/>:<CancelEditing setEditOrCancelBtn={setEditOrCancelBtn}/>}

    </div>
  )
}

export default ContactHead
