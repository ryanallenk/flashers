import React, { useRef, useState, useContext } from "react";
import ReactDom from "react-dom";
import Select from "react-select";
import { useAuth0 } from "@auth0/auth0-react";
import { Data } from "@react-google-maps/api";
import profileModalContext from "../providers/ProfileModalProvider";
/* {"nickname":"user","name":"user@example.com","picture":"https://s.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fus.png","updated_at":"2022-05-22T00:07:40.167Z","email":"user@example.com","email_verified":false,"sub":"auth0|6287b71874941e006e61aeb9"} */
export const ProfileInfoModal = ({ setShowProfileModal }) => {
  const { user } = useAuth0();
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowProfileModal(false);
    }
  };
  console.log(user);
  //   const editProfile = () => {
  //     console.log("Edit profile button clicked");
  //     setShowModal(false);
  //     setShowEditProfileModal(true);
  //   };
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      
      <div className="modal">
      <div className="modal--header">
      <div className="x--button">
        <button class="button-17" onClick={() => setShowProfileModal(false)}>
          RETURN TO MAP
        </button>
      </div>
      </div>
        <div className="modal--body">
          <div className="photo--container">
            <img
              className="user--image"
              width="300"
              height="300"
              src={user.picture}
            />
          </div>
          <div className="info--container">
            <div className="user--details">
              <h2 className="name-header">Welcome, {user.name}!</h2>
              <br></br>
              <p>Email Address: {user.email}</p>
              <p>Routes Flashed: </p>
              <p>Routes Created: </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ProfileInfoModal;
