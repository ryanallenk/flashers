import React, { useRef, useState } from "react";
import ReactDom from "react-dom";

export const FormModal = (data) => {
  console.log(data)
  return (
    ReactDom.createPortal(
      <div className="container">
        <div className="modal">
          Form Modal
        </div>
      </div>,
      document.getElementById("portal")
      )
    );
  };
  //render the modal JSX in the portal div.
  