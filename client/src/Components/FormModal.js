import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import GradeSelectComponent from "./GradeSelect";
import Select from 'react-select'
import ClimbImage from "./FileUploader";
import axios from 'axios';


export const FormModal = ({ data, setShowForm }) => {
  const modalRef = useRef();
  const [description, setDescription] = useState("");
  const [grade, setGrade] = useState(null);
  const [rating, setRating] = useState(null);

  const gradeOptions = [
    { value: 'v0', label: 'V0' },
    { value: 'v1', label: 'V1' },
    { value: 'v2', label: 'V2' },
    { value: 'v3', label: 'V3' },
    { value: 'v4', label: 'V4' },
    { value: 'v5', label: 'V5' },
    { value: 'v6', label: 'V6' },
    { value: 'v7', label: 'V7' },
    { value: 'v8', label: 'V8' },
    { value: 'v9', label: 'V9' },
    { value: 'v10', label: 'V10' },
    { value: 'v11', label: 'V11' },
    { value: 'v12', label: 'V12' },
    { value: 'v13', label: 'V13' },
    { value: 'v14', label: 'V14' },
    { value: 'v15', label: 'V15' },
    { value: 'v16', label: 'V16' },
    { value: 'v17', label: 'V17' },
  ]
  const ratingOptions =[
    {value: 0, label: 0},
    {value: 1, label: 1},
    {value: 2, label: 2},
    {value: 3, label: 3},
    {value: 4, label: 4},
    {value: 5, label: 5},
  ]
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowForm(false);
    }
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    const formSubmitData = {
      image: "",
      climb_description: description,
      grade: grade,
      user_rating: rating,
      lat: data.lat,
      lng: data.lng,
      user_id: 1,
    }
    return axios
    .post('http://localhost:8080/api/climbs', formSubmitData)
    .then(res => {
      //  console.log(res);
      console.log(res);
    })
    .catch(error => {
      console.log(error)
    })
}
  
  return (
    ReactDom.createPortal(
      <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="form_modal">
          <form onSubmit={handleSubmit}>
          <button onClick={() => setShowForm(false)}>X</button>
          <div className="userClick_coords">
            
            <h1>Click Coordinates</h1>
            <span>Latitude: {data.lat}</span>
            <span>Longitude: {data.lng}</span>
          </div>
          <div>
            <label>Description:
              <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              />
            </label>
          </div>
          <div>
          <label> Grade:
            <Select
            onChange={(event) => setGrade(event.value)}
            options={gradeOptions}

            />
          </label>
          </div>
          <div>
            <label> User Rating:
            <Select
            onChange={(event) => setRating(event.value)}
            options={ratingOptions}

            />
            </label>
          </div>
           <input type="submit" value="Submit" />
          </form>
        </div>
      </div>,
      document.getElementById("portal")
    )
  );
};
  //render the modal JSX in the portal div.
