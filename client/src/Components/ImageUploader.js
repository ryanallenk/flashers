import React, { useState } from "react";
import axios from "axios";
import logo from "./square-logo.png";

export default function ClimbImage({ currentImage, setImage }) {
  const tempImage = logo;
  const [values, setValues] = useState({
    imagePreviewUrl: currentImage || tempImage,
    picFile: null,
    uploadSuccess: false,
  });
  let fileInput = React.createRef();

  // Activates user file input to set div
  const editPic = () => {
    fileInput.current.click();
  };
  // Handles the image that was input by user
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let inFile = e.target.files[0];
    reader.onloadend = () => {
      setValues({
        ...values,
        picFile: inFile,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(inFile);
  };
  // Call the IMGUR API
  const handleSubmit = () => {
    return axios
      .post(`https://api.imgur.com/3/image`, values.picFile, {
        headers: {
          Authorization: "Client-ID d310b73b815ec88",
        },
      })
      .then((response) => {
        setImage(response.data.data.link);
        if (response.data.success == true) {
          setValues({ ...values, uploadSuccess: true });
        }
      })
      .catch((error) => {
        alert(
          "Error occurred while uploading picture, try uploading a smaller image size or try again later."
        );
        console.log("Axios error IMGUR POST:", error);
      });
  };

  return (
    <div>
      <div onClick={() => editPic()}>
        <img
          className="user-image"
          src={values.imagePreviewUrl}
          alt="..."
          style={{ objectFit: "cover" }}
          height="300"
          width="300"
        />
        <input
          className="button-38"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInput}
        />
      </div>
      <br></br>
      <button class="button-38" onClick={handleSubmit}>
        Upload
      </button>
      {values.uploadSuccess ? (
        <span> Your image was uploaded successfully!</span>
      ) : null}
    </div>
  );
}
