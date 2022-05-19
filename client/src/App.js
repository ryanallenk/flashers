
import './App.css';
import MainMapComponent from "./Components/MainMapComponent";
import { Modal } from './Components/MarkerModal';
import MapMarkersProvider from './providers/MapMarkersProvider';
import {useState, useContext} from 'react'
import { markerContext } from './providers/CurrentMarkerProvider';
import { modalContext } from './providers/ModalProvider';
import ClimbImage from './Components/FileUploader';

function App() {
  const {showModal, setShowModal} = useContext(modalContext);
  const {currentMarker, setCurrentMarker} = useContext(markerContext);
  
  return (
    <div className="App">
    <ClimbImage/>
    <MapMarkersProvider>
    <MainMapComponent />
    </MapMarkersProvider>
    {showModal ? <Modal setShowModal={setShowModal} data={currentMarker}/> : null}
    </div>
  );
}

export default App;
