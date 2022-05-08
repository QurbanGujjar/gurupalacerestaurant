import React,{useState} from 'react'

const PaymentMethodForm = ({setPayMethod,setEditOrCancelBtnPM}) => {
    const [isChecked, setIsChecked] = useState(false);

    const SavePM=()=>{
        if(!isChecked){
            setPayMethod("Cash")

        }
        else{
            setPayMethod("Card at pickup counter")
        }
        setEditOrCancelBtnPM('edit')

    }
    const handlePM=(e)=>{
        setIsChecked(!isChecked)

    }

  return (
    <div>
          <hr />
      <div className='time-check-form'>
        <div className='check-box-container'>
          <div className='row'>
            <div className='row1' >
              <input
                type='checkbox'
                checked={!isChecked}
                id='vehicle1'
                name='vehicle1'
                value='Bike'
                onChange={handlePM}
              />
              <label htmlFor='vehicle1'>Cash</label>
            </div>
            <div className='row1'>
              <input
                type='checkbox'
                checked={isChecked}
                // checked
                id='vehicle2'
                name='vehicle2'
                value='Car'
                onChange={handlePM}
              />
              <label htmlFor='vehicle2'>Card at pickup counter</label>
            </div>
          </div>
          <button onClick={SavePM} className={`contact-form-btn`}>
          Save
        </button>
        </div>
        </div>

    </div>
  )
}

export default PaymentMethodForm
