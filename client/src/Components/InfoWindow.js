import React from 'react'
import { useContext } from 'react'
import { mapMarkerContext } from '../providers/MapMarkersProvider';
import { InfoWindow } from '@react-google-maps/api';

const InfoWindowComponent = (props) => {
  const {markers} = useContext(mapMarkerContext)
  const infoWindows = markers.map((marker, index) => {
    
    return (
     <InfoWindow key={index} options={{ maxWidth: 320, disableAutoPan: true }} position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.long)}}>
      <div>
       <h3>Marker #{index}</h3>
       <p>
        Grade: {marker.grade}
        <br></br>
        Description: {marker.climb_description}
        <br></br>
        User Score: {marker.user_rating}
       </p>
      </div>
     </InfoWindow>
    )
  })
  return (
    infoWindows
    )
   }

   export default InfoWindowComponent

//    withGoogleMap(props => (
//     <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={props.defaultZoom}
//     defaultCenter={props.defaultCenter}
//    >
//     {props.markers.map((marker, index) => (
//      <Marker {...marker}>
//      {
//        marker.key === props.activeMarker ? 
//        <InfoWindow {...marker.infoWindow} >
//             <span>
//               <b>{marker.marker.venue}</b>
//               {genInfoWindow(marker.marker)}
//             </span>
//        </InfoWindow> : null
//      }
//      </Marker>
//     ))}
//    </GoogleMap>
//   ))