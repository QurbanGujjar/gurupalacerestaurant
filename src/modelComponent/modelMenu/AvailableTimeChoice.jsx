import React from "react";
import CancelEditingATC from "./CancelEditingATC";
import EditTimeChoiceBtn from "./EditTimeChoiceBtn";

const AvailableTimeChoice = ({ editOrCancelBtnATC, setEditOrCancelBtnATC }) => {
  return (
    <div className='contact-head'>
      <div className='Contact-title'>AVAILABLE TIME CHOICE</div>

      {editOrCancelBtnATC === "edit" ? (
        <EditTimeChoiceBtn setEditOrCancelBtnATC={setEditOrCancelBtnATC} />
      ) : (

        <CancelEditingATC  setEditOrCancelBtnATC={setEditOrCancelBtnATC}/>
      )}

    </div>
  );
};

export default AvailableTimeChoice;
