import React from 'react'
import { useContext, useState } from 'react'
import { mapMarkerContext } from '../providers/MapMarkersProvider';
import { Marker, InfoWindow } from '@react-google-maps/api';


export default function MapMarkers () {
  const {markers} = useContext(mapMarkerContext);

  

// (id, lat, long, image, grade, user_rating, climb_description, user_id)
  const newMarkers = markers.map((marker, index) => {
    return (
    <Marker
      key={index}
      position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.long)}}
      onClick={() => {console.log("Clicked")}}
    >
    </Marker>
    )
  })
return (
  newMarkers
)

}
