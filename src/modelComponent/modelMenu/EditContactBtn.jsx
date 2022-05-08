import React from 'react'

const EditContactBtn = ({setEditOrCancelBtn}) => {
    const editBtn=(e)=>{
        e.preventDefault()
        setEditOrCancelBtn("cancel")

    }
  return (
    <div className="contact-edit">
        <div onClick={editBtn} className="edit"><img src="images/edit.png" alt="" /></div>
      </div>
  )
}

export default EditContactBtn
