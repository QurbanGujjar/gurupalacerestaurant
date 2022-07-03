import React,{useState} from 'react'
import { Link ,useNavigate } from "react-router-dom";
import './loginSignup.css'
const Signup   = () => {
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    telephone: "",
    password:"",
    cpassword:""
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
  const submitDetails = async(e) => {
    e.preventDefault()


    if(details.password===details.cpassword){
      // console.log(details);

      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname:details.fname,
          lname:details.lname,
          telephone:details.telephone,
          email: details.email,

          password: details.password,
        }),
      });
      const json = await response.json();

      // console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        // console.log("Successully login", "success");
        // showAlert("Successully login", "success");
        navigate("/");
      } else {
        // console.log(json.error, "danger");
        // showAlert(json.error, "danger");
        alert(json.error)
      }

  }

  // console.log(details)

  };
  const telephoneLable = () => {
    setDry({ ...dry, telephone: "telephone-lable-top" });
  };
  return (
    <div className="login-container">
      <div className='contact-form login-row1'>
        <h1>Sign up</h1>
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
    {/* password Confirm Password */}
    <div className='nameInput'>
      <label
        htmlFor='password'
        className={`${
          details.password.length === 0 ? "fname" : "fname-lable-top"
        } placeHolder `}
      >
        Password *
      </label>
      <input
        type='password'
        id='password'
        name='password'
        onChange={onChange}
        value={details.password}
      />
      <label
        htmlFor='cpassword'
        className={`${
          details.cpassword.length === 0 ? "" : " lname-lable-top"
        } lname`}
      >
        Last name *
      </label>
      <input
        type='password'
        id='cpassword'
        name='cpassword'
        onChange={onChange}
        value={details.cpassword}
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
    <Link to="/login"> Click here to login </Link>


  </div>
    </div>

  )
}




export default Signup
