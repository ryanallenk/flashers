import './App.css';
import MainMapComponent from "./Components/MainMapComponent";
import { MarkerModal } from './Components/MarkerModal';
import MapMarkersProvider from './providers/MapMarkersProvider';
import { useContext} from 'react'
import { markerContext } from './providers/CurrentMarkerProvider';
import { modalContext } from './providers/ModalProvider';
import {editFormModalContext} from './providers/EditFormModalProvider';
import { EditFormModal } from './Components/EditFormModal';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import useGeolocation from "react-navigator-geolocation";

function App() {
  const {showModal, setShowModal} = useContext(modalContext);
  const {currentMarker, setCurrentMarker} = useContext(markerContext);
  const {showEditFormModal, setShowEditFormModal} = useContext(editFormModalContext);
  return (
    <div className="App">
    <Navbar />
    <MapMarkersProvider>
    <MainMapComponent />
    </MapMarkersProvider>
    {showModal ? <MarkerModal setShowModal={setShowModal} data={currentMarker} setShowEditFormModal={setShowEditFormModal}/> : null}
    {showEditFormModal ? <EditFormModal setShowEditFormModal={setShowEditFormModal} data={currentMarker}/> : null}
    </div>
  );
}

export default App;

