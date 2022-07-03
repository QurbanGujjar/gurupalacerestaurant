import React, { useState, useReducer } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitital = [];
  const [notes, setNotes] = useState(notesInitital);
  const [bd, setBd] = useState(notesInitital);

  // ======================= Basic Details Functions Start=======================
  // Get basic details
  const getBasicDetails = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchBasicDetails`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setBd(json);
  };
  // add basic details
  const addItems = async (id, iname, price, qty, val) => {
    // API call
    const response = await fetch(`${host}/api/notes/addItems`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id,
        iname,
        price,
        qty,
        val,
      }),
    });

    const json = await response.json();
    // console.log(json);
    // getBasicDetails();
  };
  //  edit Basic Details

  const editBasicDetails = async (
    id,
    accountCode,
    openDate,
    unkNumber,
    unkIssueDate,
    cName,
    cFName,
    resStatus,
    nationality,
    maritalStatus,
    placeOfBirth,
    uinType,
    uin,
    dateOfIssue,
    uinExpiry,
    email,
    mobile,
    ivrService,
    motherName,
    motherDOB
  ) => {
    // API call
    const response = await fetch(`${host}/api/notes/updateBasicDetails/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id,
        accountCode,
        openDate,
        unkNumber,
        unkIssueDate,
        cName,
        cFName,
        resStatus,
        nationality,
        maritalStatus,
        placeOfBirth,
        uinType,
        uin,
        dateOfIssue,
        uinExpiry,
        email,
        mobile,
        ivrService,
        motherName,
        motherDOB,
      }),
    });
    await response.json();

    getBasicDetails();
  };
  // ======================= Basic Details Functions End=======================



//   ====================== payment method and pickup time function Start ============


// add basic details
const addOrderPickupMethod = async ( timeChoice,payment) => {
    // API call
    const response = await fetch(`${host}/api/orderPickupMethod/addOrderPickupMethod`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        timeChoice,payment
      }),
    });

    const json = await response.json();
    // console.log(json);
    // getBasicDetails();
  };



//   ====================== payment method and pickup time function Start ============

  // =====================================================================================================================
  // Get all notes
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjM1ZjQzNjM5NjA1NTQzNjU4Y2Y1In0sImlhdCI6MTY0OTEzODU0Nn0.U3f7zfWJD4xMt4FRZHpizyYwk3z6ZbjRulFXsV-lkqg"
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };
  // delete a note
  const deleteNote = async (id) => {
    // API call
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      // body: JSON.stringify({title,description,tag}),
    });
    // const json= response.json();
    const afterDel = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(afterDel);
  };

  // Add a note
  // title, description, tag
  // Add basic details
  const addNote = async (title, description, tag) => {
    // API call
    // console.log(title, description, tag,imgData)
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data;boundary=MyBoundary",
        // "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(title, description, tag),
    });

    const json = await response.json();
    const note = json;
    // let note = {
    //   _id: json._id,
    //   user: json.user,
    //   title: title,
    //   description: description,
    //   tag: json.tag,
    //   date: json.date,
    //   __v: json.__v,
    // };
    setNotes(notes.concat(note));
  };

  // edit a note

  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await response.json();
    // const json = response.json();
    // console.log(json)

    let newNote = JSON.parse(JSON.stringify(notes));
    // Login to edit client

    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        // console.log(id)
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        getNotes,
        // ==========Basic details function pass start
        bd,
        getBasicDetails,
        addItems,
        editBasicDetails,
        // ==========Basic details function pass end
//
        addOrderPickupMethod,
      }}
    >
      {" "}
      {props.children}{" "}
    </NoteContext.Provider>
  );
};

export default NoteState;
