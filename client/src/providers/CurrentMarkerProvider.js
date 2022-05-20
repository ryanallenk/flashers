import { createContext, useState } from "react";

const axios = require("axios").default;

export const markerContext = createContext();

//Make an axios request to the database API, returns provider context for MapMarkers
export default function CurrentMarkerProvider(props) {
  const [currentMarker, setCurrentMarker] = useState({});

  const providerData = { currentMarker, setCurrentMarker };

  return (
    <markerContext.Provider value={providerData}>
      {props.children}
    </markerContext.Provider>
  );
}
