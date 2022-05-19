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
    
        <p className="coords"> Latitude: {data.lat} </p>
       
        <p className="coords"> Longitude: {data.long} </p>
      
        <p className="coords"> Grade: {data.grade} </p>
       
        <p className="coords"> User Rating: {data.user_rating} </p>

        </div>
        </div>
        <p className="description">{data.climb_description} What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <p><button onClick={editForm}> Edit Form </button></p>
    </div>,
    document.getElementById("portal")
  );
};