import React, { useRef, useState } from "react";
import ReactDom from "react-dom";

export const FormModal = ({data, setShowForm}) => {
  const modalRef = useRef();
  
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowForm(false);
    }
  };

  return (
    ReactDom.createPortal(
      <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="form-modal">
        <button onClick={() => setShowForm(false)}>X</button>
          Form Modal
          <span>Latitude: {data.lat}</span>
          <span>Longitude: {data.lng}</span>
        </div>
      </div>,
      document.getElementById("portal")
      )
    );
  };
  //render the modal JSX in the portal div.
  