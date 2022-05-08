import React,{useState} from 'react'

const EditTimeChoiceBtn = ({setEditOrCancelBtnATC}) => {
    // const []
    const editTimeBtn=()=>{
        setEditOrCancelBtnATC("cancel")

    }
  return (
    <div className="contact-edit">
        <div onClick={editTimeBtn} className="edit"><img src="images/edit.png" alt="" /></div>
      </div>
  )
}

export default EditTimeChoiceBtn
