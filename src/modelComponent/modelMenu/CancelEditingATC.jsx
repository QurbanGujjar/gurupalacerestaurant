import React from 'react'

const CancelEditingATC = ({setEditOrCancelBtnATC}) => {

        const cancelBtn=(e)=>{
            e.preventDefault()
            setEditOrCancelBtnATC("edit")

        }

  return (
    <div className="cancel-btn">
    <button onClick={cancelBtn} >Cencel</button>
</div>
  )
}

export default CancelEditingATC
