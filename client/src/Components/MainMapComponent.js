import React from 'react'
import MapMarkers from './Marker';
// import { useContext } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import InfoWindow from './InfoWindow';
// import { mapMarkerContext } from '../providers/MapMarkersProvider';
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
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: REACT_APP_API_KEY,
  })

  const initInfoWindows = InfoWindow()
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

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options= {{mapId:'707f031a8aaa1435'}}
      >
       { initMapMarkers}
       { initInfoWindows }
        <> </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MainMapComponent)