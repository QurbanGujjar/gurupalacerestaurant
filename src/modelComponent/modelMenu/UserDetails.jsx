import React from 'react'
import './userDetails.css'
const UserDetails = () => {
    var retrievedObject = localStorage.getItem("UserDetails");
    let data=JSON.parse(retrievedObject)
  return (
    <div className='user-details'>

       <span>{data.fname}</span><span>{" "}</span>
       <span>{data.lname}</span>
       <p>{data.email}</p>
       <p>{data.telephone}</p>
    </div>
  )
}

export default UserDetails
