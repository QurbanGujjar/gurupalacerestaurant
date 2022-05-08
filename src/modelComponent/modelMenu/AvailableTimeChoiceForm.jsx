import React, { useState } from "react";
import "./availableTimeChoiceForm.css";

const AvailableTimeChoiceForm = ({ setCheck,setEditOrCancelBtnATC }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d_time = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];
  // const getInitialState = () => {
  //   let value = "Today";
  //   return value;
  // };
  const d = new Date();

  let tomorrow = new Date();
  let sec_tomorrow = new Date();
  tomorrow.setDate(d.getUTCDay() + 2);
  sec_tomorrow.setDate(d.getUTCDay() + 3);
  const [boxSign, setBoxSign] = useState(true);
  const [value, setValue] = useState("Today");
  const [D_time, setD_time] = useState("");
  const handleOnChangeCheckbox=()=>{
    // setBoxSign(!boxSign)

  }
  const handleCheck1 = () => {
    setBoxSign(true);
    setCheck("As soon as possible");
    setValue("As soon as possible")
  };
  const handleCheck2 = () => {
    setBoxSign(false);
    setCheck(value);
  };
  const handleDateChange = (e) => {
    setValue(e.target.value);
    // console.log(value);
  };
  const handleDeliveryTime=(e)=>{
    setD_time(e.target.value);

  }
  const SaveChoosenTime = () => {
    setCheck(value+" "+D_time);
    setEditOrCancelBtnATC('edit')

    // console.log(D_time);
  };
  return (
    <div>
      <hr />
      <div className='time-check-form'>
        <div className='check-box-container'>
          <div className='row'>
            <div className='row1' onClick={handleCheck1}>
              <input
                type='checkbox'
                // checked={boxSign}
                id='vehicle1'
                name='vehicle1'
                value='Bike'
                onChange={handleOnChangeCheckbox}
              />
              <label htmlFor='vehicle1'>As soon as possible</label>
            </div>
            <div className='row1' onClick={handleCheck2}>
              <input
                type='checkbox'
                checked={!boxSign}
                // checked
                id='vehicle2'
                name='vehicle2'
                value='Car'
                onChange={handleOnChangeCheckbox}
              />
              <label htmlFor='vehicle2'>Later</label>
            </div>
          </div>
        </div>

        {!boxSign ? (
          <div className='check-box-container'>
            <div className='row'>
              <div className='row3'>
                <div className='img'>
                  <img src='images/calendar.png' alt='' />
                </div>
                <select value={value} onChange={handleDateChange}>
                  <option value='Today'>Today</option>
                  <option value={tomorrow.toDateString().substring(0, 15)}>
                    {tomorrow.toDateString().substring(0, 15)}
                  </option>
                  <option value={sec_tomorrow.toDateString().substring(0, 15)}>
                    {sec_tomorrow.toDateString().substring(0, 15)}
                  </option>
                </select>
              </div>
              <div className='row3'>
                <div className='clock'>
                  <img src='images/clock.png' alt='' />
                </div>
                <select value={D_time} onChange={handleDeliveryTime}>
                  {d_time.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}

                  {/* <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option> */}
                </select>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <button onClick={SaveChoosenTime} className={`contact-form-btn`}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AvailableTimeChoiceForm;
