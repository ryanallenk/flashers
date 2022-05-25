import React, { useRef } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const MarkerModal = ({ setShowModal, data, setShowEditFormModal }) => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  const editForm = () => {
    if (!isAuthenticated) {
      alert("You must be logged in to edit an existing climb.");
    } else {
      setShowModal(false);
      setShowEditFormModal(true);
    }
  };

  const handleCheck = () => {
    const checkbox = document.getElementById("box-1");
    if (checkbox.checked === true) {
      checkbox.disabled = true;
      console.log("Checked!");
    }
    const formSubmitData = {
      user_id: user.sub,
      location_id: data.id,
    };
    return axios
      .post("http://localhost:8080/api/flashes", formSubmitData)
      .then((res) => {
        //  console.log(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal--header">
          <div className="x--button">
            <button class="button-17" onClick={() => setShowModal(false)}>
              RETURN TO MAP
            </button>
          </div>
        </div>
        <div className="modal--body">
          <div className="photo--container">
            <img
              className="climb--image"
              width="300"
              height="300"
              src={data.image}
            />
          </div>
          <div className="info--container">
            <h1 className="climb--title">
              #{data.id} {data.climb_name}
            </h1>

            <p className="coords">
              {" "}
              Latitude: {data.lat}, Longitude: {data.long}
            </p>

            <p className="coords"> Grade: {data.grade} </p>

            <p className="coords"> User Rating: {data.user_rating} </p>

            <p className="edit">
              <button class="button-17" onClick={editForm}>
                {" "}
                Edit Climb Details{" "}
              </button>
            </p>

            <div className="boxes">
              <input type="checkbox" onClick={handleCheck} id="box-1"></input>
              <label for="box-1">Have you flashed?</label>
            </div>
          </div>
        </div>
        <br></br>
        <p className="description">
          {data.climb_description}Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.{" "}
        </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
