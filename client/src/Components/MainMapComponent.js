import React from "react";
import MapMarkers from "./Marker";
import { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { FormModal } from "./FormModal";
const { REACT_APP_API_KEY } = process.env;
// const {} = use
const containerStyle = {
  width: "100vw",
  height: "93.5vh",
};

function MainMapComponent() {
  // two states are tracked by the Map Component -> showForm which is a boolean deciding wheteher the form loads and formData which is the data from the click event passed to the form

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: REACT_APP_API_KEY,
  });

  // const initInfoWindows = InfoWindow()
  const initMapMarkers = MapMarkers();

  const [map, setMap] = React.useState(null);
  const [lng, setLong] = useState(-79.347015);
  const [lat, setLat] = useState(43.6532);
  const center = {
    lat,
    lng,
  };
  const [errorMessage, setErrorMessage] = useState("");

  const onLoad = React.useCallback(function callback(map) {
    // logic for the location detection upon arrival
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log("lat:", lat, "long:", lng);
          setLat(lat);
          setLong(lng);
        },
        () => {
          setErrorMessage("We could not find your location.");
        }
      );
    }
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const mapClickHandler = (event) => {
    const locationData = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    // addMarker(locationData)
    setShowForm(true);
    setFormData(locationData);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "707f031a8aaa1435" }}
      onDblClick={(event) => mapClickHandler(event)}
    >
      {initMapMarkers}
      {showForm ? (
        <FormModal data={formData} setShowForm={setShowForm} />
      ) : null}
      <> </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MainMapComponent);
