import React from 'react'
import MapMarkers from './Marker';
import { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { FormModal } from './FormModal';
const {REACT_APP_API_KEY} = process.env;
// const {} = use
const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 43.666911,
  lng: -79.449449
};

function MainMapComponent() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState(false)
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: REACT_APP_API_KEY,
  })

  // const initInfoWindows = InfoWindow()
  const initMapMarkers = MapMarkers()

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const mapClickHandler = (event) => {
    setShowForm(true);
    setFormData(event)  
  
    // <FormModal coords={event.latLng.toJSON()} /> 
    // console.log("You clicked the map")
    // event.latLng returns an object, call .toString or .toJSON to parse into coordinates
    // console.log(event.latLng.toString())
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options= {{mapId:'707f031a8aaa1435'}}
        onDblClick= {event => mapClickHandler(event)}
      >
       { initMapMarkers } 
       { showForm ? <FormModal data={formData}/> : null}
        <> </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MainMapComponent)