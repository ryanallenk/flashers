import React from 'react'
import { useContext, useState } from 'react'
import { mapMarkerContext } from '../providers/MapMarkersProvider';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { markerContext } from '../providers/CurrentMarkerProvider';
import { modalContext } from '../providers/ModalProvider';


export default function MapMarkers () {
  const {markers} = useContext(mapMarkerContext);
  const {currentMarker, setCurrentMarker} = useContext(markerContext);
  const {showModal, setShowModal} = useContext(modalContext);

  const markerClickHandler = (marker) => {
    setCurrentMarker(marker);
    setShowModal(true);
  }

// (id, lat, long, image, grade, user_rating, climb_description, user_id)
  const newMarkers = markers.map((marker, index) => {
    return (
    <Marker
      key={index}
      position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.long)}}
      onClick={() => {markerClickHandler(marker)}}
    >
    </Marker>
    )
  })
return (
  newMarkers
)

}
