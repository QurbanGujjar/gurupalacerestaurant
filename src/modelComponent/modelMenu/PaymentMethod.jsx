import React from 'react'
import CancelEditingATC from './CancelEditingATC'
import CancelEditingPM from './CancelEditingPM'
import EditPaymentMethodBtn from './EditPaymentMethodBtn'
// import EditTimeChoiceBtn from './EditTimeChoiceBtn'

const PaymentMethod = ({editOrCancelBtnPM,setEditOrCancelBtnPM}) => {
  return (
    <div className='contact-head'>
    <div className='Contact-title'>Payment Method</div>

{editOrCancelBtnPM === "edit" ? (
        <EditPaymentMethodBtn setEditOrCancelBtnPM={setEditOrCancelBtnPM} />
      ) : (

        <CancelEditingPM  setEditOrCancelBtnPM={setEditOrCancelBtnPM}/>
      )}
</div>
  )
}

export default PaymentMethod
