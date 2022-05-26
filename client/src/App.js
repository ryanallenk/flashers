import './App.css';
import './App.scss';
import MainMapComponent from "./Components/MainMapComponent";
import { MarkerModal } from './Components/MarkerModal';
import MapMarkersProvider from './providers/MapMarkersProvider';
import { useContext} from 'react'
import { markerContext } from './providers/CurrentMarkerProvider';
import { modalContext } from './providers/ModalProvider';
import {editFormModalContext} from './providers/EditFormModalProvider';
import {profileModalContext} from './providers/ProfileModalProvider'
import { EditFormModal } from './Components/EditFormModal';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import ProfileInfoModal from "./Components/ProfileInfoModal";



function App() {
  const {showModal, setShowModal} = useContext(modalContext);
  const {currentMarker, setCurrentMarker} = useContext(markerContext);
  const {showEditFormModal, setShowEditFormModal} = useContext(editFormModalContext);
  const {showProfileModal, setShowProfileModal} = useContext(profileModalContext);
  return (
    <>
    <div className="nav-header">
    
    <Navbar setShowProfileModal={() => setShowProfileModal}/>
    </div>
    <div className="App">
    <MapMarkersProvider>
    <MainMapComponent />
    </MapMarkersProvider>
    {showModal ? <MarkerModal setShowModal={setShowModal} data={currentMarker} setShowEditFormModal={setShowEditFormModal}/> : null}
    {showEditFormModal ? <EditFormModal setShowEditFormModal={setShowEditFormModal} data={currentMarker}/> : null}
    {showProfileModal ? <ProfileInfoModal setShowProfileModal={setShowProfileModal}/> : null}
    </div>
    </>
  );
}

export default App;

