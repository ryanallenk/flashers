
import './App.css';
import MainMapComponent from "./Components/MainMapComponent";
import { Modal } from './Components/MarkerModal';
import MapMarkersProvider from './providers/MapMarkersProvider';
import {useState, useContext} from 'react'
import { markerContext } from './providers/CurrentMarkerProvider';
import { modalContext } from './providers/ModalProvider';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import useGeolocation from "react-navigator-geolocation";

function App() {
  const {showModal, setShowModal} = useContext(modalContext);
  const {currentMarker, setCurrentMarker} = useContext(markerContext);

  
  return (
    <div className="App">
    <Navbar />
    <MapMarkersProvider>
    <MainMapComponent />
    </MapMarkersProvider>
    {showModal ? <Modal setShowModal={setShowModal} data={currentMarker}/> : null}
    </div>
  );
}

export default App;

