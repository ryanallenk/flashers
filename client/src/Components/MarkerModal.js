import React, { useRef, useState } from "react";
import ReactDom from "react-dom";

export const Modal = ({setShowModal, data}) => {

  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <button onClick={() => setShowModal(false)}>X</button>
        <h2>This is climb #{data.id}</h2>
        <br></br>
        <img style={{height: '300px', width: '300px'}} alt="Climb Image" src={data.image}/>
        <br></br>
        <p>Latitude: {data.lat}</p>
        <br></br>
        <p>Longitude: {data.long}</p>
        <br></br>
        <p>{data.climb_description}</p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};