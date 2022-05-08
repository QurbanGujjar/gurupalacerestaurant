import React from 'react'

const CancelEditingPM = ({setEditOrCancelBtnPM}) => {
    const cancelBtn=(e)=>{
        e.preventDefault()
        setEditOrCancelBtnPM("edit")

    }
  return (
    <div className="cancel-btn">
    <button onClick={cancelBtn} >Cencel</button>
</div>
  )
}

export default CancelEditingPM
