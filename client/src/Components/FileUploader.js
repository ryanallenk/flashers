import React, { useState } from 'react';
import axios from 'axios';

const { REACT_APP_CLOUD_API_SECRET, REACT_APP_CLOUD_API_KEY, REACT_APP_CLOUD_NAME } = process.env;

export default function ClimbImage() {
    const tempImage = 'https://i.imgur.com/TaEzV7X.jpeg'
    const [values, setValues] = useState({
        imagePreviewUrl: tempImage,
        picFile: null
    })
    let fileInput = React.createRef();

    // Activates user file input to set div
    const editPic = () => {
        fileInput.current.click();
    }
    // Handles the image that was input by user
    const handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let inFile = e.target.files[0];
        reader.onloadend = () => {
            setValues({
                ...values,
                picFile: inFile,
                imagePreviewUrl: reader.result
            })
        };
        reader.readAsDataURL(inFile);
    };
    // Call the API Backend, will describe this later
    const handleSubmit = () => {

        return axios
            .post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME}/upload`, values.picFile)
            .then((response) => {
                console.log("Axios Response client side", response)
            })
            .catch((error) => {
                alert("Error occurred while uploading picture, try uploading a smaller image size or try again later.")
                console.log("Axios error client side:", error)
            })
        // response stores the response back from the API
        //  const response = await axios.post(`/storage/upload`, form_data) // **** need to modify to add data to the post request
        //  .catch(error => {
        //     alert("Error occurred while uploading picture, try uploading a smaller image size or try again later.")
        //     return;
        //   });
    }

    return (
        <div>
            <div onClick={() => editPic()}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInput} />
                <img
                    src={values.imagePreviewUrl}
                    alt="..." style={{ objectFit: 'cover' }} height="725" width="500" />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}