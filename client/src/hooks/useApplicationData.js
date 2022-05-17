import { useEffect } from 'react';

const axios = require('axios').default;

export default function useApplicationData () {
  
  useEffect(() => {
    axios.get("http://localhost:8080/api/climbs/")
      .then(res =>  {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  
  function getMapMarkers() {

  }
  return {
    getMapMarkers
  }
}
