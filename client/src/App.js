
import './App.css';
import MainMapComponent from "./Components/MainMapComponent";
import { Modal } from './Components/MarkerModal';
import { EditFormModal } from './Components/EditFormModal';
import MapMarkersProvider from './providers/MapMarkersProvider';
import {useState, useContext} from 'react'
import { markerContext } from './providers/CurrentMarkerProvider';
import { modalContext } from './providers/ModalProvider';

function App() {
  const {showModal, setShowModal} = useContext(modalContext);
  const {currentMarker, setCurrentMarker} = useContext(markerContext);
  
  return (
    <div className="App">
    <MapMarkersProvider>
    <MainMapComponent />
    </MapMarkersProvider>
    {showModal ? <EditFormModal setShowModal={setShowModal} data={currentMarker}/> : null}
    </div>
  );
}

export default App;
