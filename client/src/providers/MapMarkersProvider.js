import { createContext, useState, useEffect } from 'react'

const axios = require('axios').default;

export const mapMarkerContext = createContext();

//Make an axios request to the database API, returns provider context for MapMarkers
export default function MapMarkersProvider (props) {
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/climbs/")
      .then(res =>  {
       setMarkers(res.data)
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