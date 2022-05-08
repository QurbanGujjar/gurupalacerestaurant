import React, { useState } from "react";

const ContactDetailsForm = () => {

    const [details, setDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        telephone: "",
      });
      const [dry, setDry] = useState({
        fname: "",
        lname: "",
        email: "",
        telephone: "",
      });
      const [disableBtn, setDisableBtn] = useState(false);

      const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
        if (
          details.fname !== "" &&
          details.lname !== "" &&
          details.email !== "" &&
          details.telephone !== ""
        ) {
          setDisableBtn(true);
        } else {
          setDisableBtn(false);
        }
      };
      const submitDetails = () => {
        if (disableBtn) {
          // Put the object into storage
          localStorage.setItem("UserDetails", JSON.stringify(details));
          console.log("a", disableBtn);
        } else {
          // Retrieve the object from storage
          var retrievedObject = localStorage.getItem("UserDetails");
          console.log("retrievedObject: ", JSON.parse(retrievedObject));
        }
        if (
          details.fname !== "" &&
          details.lname !== "" &&
          details.email !== "" &&
          details.telephone !== ""
        ) {
          setDisableBtn(true);
        } else {
          setDisableBtn(false);
          alert("requird Field");
        }
      };
      const telephoneLable = () => {
        setDry({ ...dry, telephone: "telephone-lable-top" });
      };
  return (
      <>

    <hr />
    <div className='contact-form'>
      <div className='nameInput'>
        <label
          htmlFor='fname'
          className={`${
            details.fname.length === 0 ? "fname" : "fname-lable-top"
          } placeHolder `}
        >
          First name *
        </label>
        <input
          type='text'
          id='fname'
          name='fname'
          onChange={onChange}
          value={details.fname}
        />
        <label
          htmlFor='lname'
          className={`${
            details.lname.length === 0 ? "" : " lname-lable-top"
          } lname`}
        >
          Last name *
        </label>
        <input
          type='text'
          id='lname'
          name='lname'
          onChange={onChange}
          value={details.lname}
        />
      </div>

      <div className='emailtelephoneInput'>
        <label
          htmlFor='email'
          className={`${
            details.email.length === 0 ? "email" : "email-lable-top"
          } placeHolder `}
        >
          E-mail *
        </label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={onChange}
          value={details.email}
        />
        <label
          htmlFor='telephone'
          className={`${
            details.telephone.length === 0
              ? "telephone"
              : "telephone-lable-top"
          } placeHolder ${dry.telephone !== "" ? "telephone-lable-top" : ""}`}
        >
          Telephone *
        </label>
        <input
          onChange={onChange}
          onClick={telephoneLable}
          value={details.telephone}
          type='text'
          id='telephone'
          name='telephone'
        />
      </div>

      <p className='condition'>
        You agree to be remembered on this device and to receive money-off
        coupons & exclusive offers.
      </p>
      <button
        onClick={submitDetails}
        className={`contact-form-btn  ${disableBtn ? "" : "disable-btn"}`}
      >
        Save
      </button>
    </div>
    </>
  )
}

export default ContactDetailsForm
