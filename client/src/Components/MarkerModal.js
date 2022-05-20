import React, { useRef } from "react";
import ReactDom from "react-dom";
import { EditFormModal } from "./EditFormModal";


export const MarkerModal = ({setShowModal, data, setShowEditFormModal}) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  const editForm = () => {
    console.log("Edit form button clicked")
      setShowModal(false);
      setShowEditFormModal(true)
  }
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal--header">

        <div className="x--button">
        <button onClick={() => setShowModal(false)}>X</button>
        </div>
        </div>
        <div className="modal--body">
        <div className="photo--container">
        <img className="climb--image" width="300" height="300" src={data.image} />
        </div>
        <div className="info--container">
        <h1 className="climb--title">This is climb #{data.id}</h1>
    
        <p className="coords"> Latitude: {data.lat} Longitude: {data.long}</p>
            
        <p className="coords"> Grade: {data.grade} </p>
       
        <p className="coords"> User Rating: {data.user_rating} </p>

        <p className="edit"><button onClick={editForm}> Edit Form </button></p>
<div class="boxes">
  <input type="checkbox" id="box-1"></input>
  <label for="box-1">Have you climbed here?</label>
</div>
        </div>
        </div>
        <p className="description">{data.climb_description} </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};