import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import Select from "react-select";
import ClimbImage from "./ImageUploader";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const FormModal = ({ data, setShowForm }) => {
  const { user, isAuthenticated } = useAuth0();
  const modalRef = useRef();
  const [description, setDescription] = useState("");
  const [grade, setGrade] = useState(null);
  const [rating, setRating] = useState(null);
  const [image, setImage] = useState("");
  const [climbName, setClimbName] = useState("");

  const gradeOptions = [
    { value: "v0", label: "V0" },
    { value: "v1", label: "V1" },
    { value: "v2", label: "V2" },
    { value: "v3", label: "V3" },
    { value: "v4", label: "V4" },
    { value: "v5", label: "V5" },
    { value: "v6", label: "V6" },
    { value: "v7", label: "V7" },
    { value: "v8", label: "V8" },
    { value: "v9", label: "V9" },
    { value: "v10", label: "V10" },
    { value: "v11", label: "V11" },
    { value: "v12", label: "V12" },
    { value: "v13", label: "V13" },
    { value: "v14", label: "V14" },
    { value: "v15", label: "V15" },
    { value: "v16", label: "V16" },
    { value: "v17", label: "V17" },
  ];
  const ratingOptions = [
    { value: 0, label: 0 },
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ];
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowForm(false);
    }
  };
  const handleSubmit = (e) => {
    if (!isAuthenticated) {
      alert("You must be logged in to submit a new boulder.");
    } else {
      const formSubmitData = {
        image: image,
        climb_description: description,
        grade: grade,
        user_rating: rating,
        lat: data.lat,
        lng: data.lng,
        creator_id: user.sub,
        climb_name: climbName,
      };

      return axios
        .post("http://localhost:8080/api/climbs", formSubmitData)
        .then((res) => {
          //  console.log(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setShowForm(false);
  };

  // custom styles for react select component
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
    })
  };

  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal--header">
          <button class="button-38" onClick={() => setShowForm(false)}>
            RETURN TO MAP
          </button>
        </div>
        <div className="modal--body">
          <div className="photo--container">
            <ClimbImage setImage={setImage} />
          </div>
          <div className="info--container">
            <form onSubmit={handleSubmit}>
              <h2 className="info-container-header">New Route</h2>
              <span>Latitude: {data.lat}</span>
              <br></br>
              <span>Longitude: {data.lng}</span>
              <br></br>
              <label>
                <br></br>
                Name:
                <br></br>
                <input
                  className="form--field"
                  type="text"
                  value={climbName}
                  onChange={(event) => setClimbName(event.target.value)}
                />
              </label>
              <div>
                <br></br>
                <label>
                  {" "}
                  Grade:
                  <Select
                    styles={customStyles}
                    onChange={(event) => setGrade(event.value)}
                    options={gradeOptions}
                  />
                </label>
              </div>
              <div>
                <br></br>
                <label>
                  {" "}
                  User Rating:
                  <Select
                    styles={customStyles}
                    onChange={(event) => setRating(event.value)}
                    options={ratingOptions}
                  />
                </label>
              </div>
              <br></br>
              <div>
                <label>
                  Description:
                  <br></br>
                  <input
                    className="form--field"
                    styles={customStyles}
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </label>
              </div>

              <br></br>
              <input className="button-38" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
//render the modal JSX in the portal div.
