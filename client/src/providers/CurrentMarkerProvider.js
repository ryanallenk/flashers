import { createContext, useState } from "react";


export const markerContext = createContext();

// saves the current selected marker globally on click so the data can be accessed throughout app

export default function CurrentMarkerProvider(props) {
  const [currentMarker, setCurrentMarker] = useState({});

  const providerData = { currentMarker, setCurrentMarker };

  return (
    <markerContext.Provider value={providerData}>
      {props.children}
    </markerContext.Provider>
  );
}
