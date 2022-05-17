import React from 'react'
import { useContext } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { mapMarkerContext } from '../providers/MapMarkersProvider';
const {REACT_APP_API_KEY} = process.env;

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 43.666911,
  lng: -79.449449
};

function MainMapComponent() {
  const {markers} = useContext(mapMarkerContext)
  
  const mapMarkers = markers.map((marker, index) => {
    console.log(marker);
    console.log(parseFloat(marker.lat));
    return (
    <Marker
      key={index}
      position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.long)}}
    >
    </Marker>
    )
  })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: REACT_APP_API_KEY,
  })


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
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options= {{mapId:'707f031a8aaa1435'}}
      >

        <> { mapMarkers } </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MainMapComponent)