import React, { useRef, useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

/* auto user object contains {"nickname":"user","name":"user@example.com","picture":"https://s.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fus.png","updated_at":"2022-05-22T00:07:40.167Z","email":"user@example.com","email_verified":false,"sub":"auth0|6287b71874941e006e61aeb9"} */

export const ProfileInfoModal = ({ setShowProfileModal }) => {
  const { user } = useAuth0();
  const modalRef = useRef();
  const [flashes, setFlashes] = useState(0);
  const [routes, setRoutes] = useState(0);
  const user_id = user.sub;

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowProfileModal(false);
    }
  };

  // get routes flashed by user
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/flashes/${user_id}`)
      .then((res) => {
        setFlashes(res.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // get routes created by user
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/climbs/${user_id}`)
      .then((res) => {
        setRoutes(res.data[0].count);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal--header">
          <button
            className="button-38"
            onClick={() => setShowProfileModal(false)}
          >
            RETURN TO MAP
          </button>
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
            <h2 className="info-container-header">Profile Details</h2>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            <p>Routes Flashed: {flashes} </p>
            <p>Routes Created: {routes} </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ProfileInfoModal;
