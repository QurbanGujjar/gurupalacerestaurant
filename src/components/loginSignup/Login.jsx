import React,{useState} from 'react'
import { Link ,useNavigate } from "react-router-dom";
import './loginSignup.css'
const Login = () => {
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [details, setDetails] = useState({

    email: "",
    password: "",
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

  };
  const submitDetails = async(e) => {
    e.preventDefault();
    // console.log(details);
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      // refreshPage()
    } else {
      // console.log(json.error, "danger");
      // showAlert(json.error, "danger");
      alert(json.error)
    }

    console.log(details)
  };
  const telephoneLable = () => {
    setDry({ ...dry, telephone: "telephone-lable-top" });
  };
  return (
    <div className="login-container">
      <div className='contact-form login-row1'>
      <h1>Login</h1>

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
          details.password.length === 0
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
        type='password'
        id='telephone'
        name='password'
      />
    </div>

    <p className='condition'>
      You agree to be remembered on this device and to receive money-off
      coupons & exclusive offers.
    </p>
    <button
      onClick={submitDetails}
      className={`contact-form-btn `}
    >
      Login
    </button>
<br />
    <Link to="/signup"> Click here to sign up</Link>
  </div>
    </div>

  )
}

export default Login
