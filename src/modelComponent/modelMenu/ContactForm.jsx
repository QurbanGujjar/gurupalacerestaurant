import React, { useState } from "react";
import AvailableTimeChoice from "./AvailableTimeChoice";
import AvailableTimeChoiceForm from "./AvailableTimeChoiceForm";
import AvailableTimeChosen from "./AvailableTimeChosen";
import ContactDetailsForm from "./ContactDetailsForm";
import "./contactForm.css";
import ContactHead from "./ContactHead";
import OrderingMethod from "./OrderingMethod";
import PaymentMethod from "./PaymentMethod";
import PaymentMethodChosen from "./PaymentMethodChosen";
import PaymentMethodForm from "./PaymentMethodForm";
import UserDetails from "./UserDetails";

const ContactForm = ({check, setCheck,payMethod, setPayMethod}) => {
  const [editOrCancelBtn, setEditOrCancelBtn] = useState("edit");
  const [editOrCancelBtnATC, setEditOrCancelBtnATC] = useState("edit");
  const [editOrCancelBtnPM, setEditOrCancelBtnPM] = useState("edit");


  return (
    //   <div className="customer-details-container">
    <div className='customer-details'>
      <ContactHead
        editOrCancelBtn={editOrCancelBtn}
        setEditOrCancelBtn={setEditOrCancelBtn}
      />
      {editOrCancelBtn === "cancel" ? <ContactDetailsForm /> : <UserDetails />}
      <hr />
     <OrderingMethod />
     <hr />
      <AvailableTimeChoice
        editOrCancelBtnATC={editOrCancelBtnATC}
        setEditOrCancelBtnATC={setEditOrCancelBtnATC}
      />
      {editOrCancelBtnATC === "cancel" ? (
        <AvailableTimeChoiceForm
          setCheck={setCheck}
          setEditOrCancelBtnATC={setEditOrCancelBtnATC}
        />
      ) : (
        <AvailableTimeChosen check={check} />
      )}
      <hr />
      <PaymentMethod
        editOrCancelBtnPM={editOrCancelBtnPM}
        setEditOrCancelBtnPM={setEditOrCancelBtnPM}
      />
      {editOrCancelBtnPM === "cancel" ? (
        <PaymentMethodForm
          setPayMethod={setPayMethod}
          setEditOrCancelBtnPM={setEditOrCancelBtnPM}
        />
      ) : (
        <PaymentMethodChosen payMethod={payMethod} />
      )}
    </div>

    // </div>
  );
};

export default ContactForm;
