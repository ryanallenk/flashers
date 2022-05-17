import { createContext, useState, useEffect } from 'react'

const axios = require('axios').default;

export const mapMarkerContext = createContext();

export default function MapMarkersProvider (props) {
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/climbs/")
      .then(res =>  {
       setMarkers(res.data) // will need to make sure this is not a stale state i.e. should ...prev state and update with any new markers
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  
  const providerData = {markers}
  
  return (
    <mapMarkerContext.Provider value={providerData}>
      {props.children}
    </mapMarkerContext.Provider>
  )
}