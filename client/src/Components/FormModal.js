import React, { useRef, useState } from "react";
import ReactDom from "react-dom";

export const FormModal = (formData) => {
  console.log("lat location data in FormModal:", formData.data.lat)
  console.log("long location data in FormModal:", formData.data.lng)
  return (
    ReactDom.createPortal(
      <div className="container">
        <div className="form-modal">
          Form Modal
          <span>Latitude: {formData.data.lat}</span>
          <span>Longitude: {formData.data.lng}</span>
        </div>
      </div>,
      document.getElementById("portal")
      )
    );
  };
  //render the modal JSX in the portal div.
  