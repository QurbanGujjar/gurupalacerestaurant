import React from 'react'

const EditPaymentMethodBtn = ({setEditOrCancelBtnPM}) => {
    const editTimeBtn=()=>{
        setEditOrCancelBtnPM("cancel")

    }
  return (
    <div className="contact-edit">
        <div onClick={editTimeBtn} className="edit"><img src="images/edit.png" alt="" /></div>
      </div>
  )
}

export default EditPaymentMethodBtn
