import { createContext, useState, useEffect } from 'react'

const axios = require('axios').default;

export const modalContext = createContext();

//Make an axios request to the database API, returns provider context for MapMarkers
export default function ModalProvider (props) {
  const [showModal, setShowModal] = useState(false);
  
  const providerData = {showModal}
  
  return (
    <modalContext.Provider value={providerData}>
      {props.children}
    </modalContext.Provider>
  )
}