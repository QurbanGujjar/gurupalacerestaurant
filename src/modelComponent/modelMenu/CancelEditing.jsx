import React from 'react'
import './cancelbtn.css'

const CancelEditing = ({setEditOrCancelBtn}) => {
    const cancelBtn=(e)=>{
        e.preventDefault()
        setEditOrCancelBtn("edit")

    }
  return (
    <div className="cancel-btn">
        <button onClick={cancelBtn} >Cencel</button>
    </div>

  )
}

export default CancelEditing
