
import './App.css';
import MainMapComponent from "./Components/MainMapComponent";
import { Modal } from './Components/MarkerModal';
import MapMarkersProvider from './providers/MapMarkersProvider';
import {useState} from 'react'

function App() {
  const [showModal, setShowModal] = useState(true);
  
  return (
    <div className="App">
    <MapMarkersProvider>
    <MainMapComponent />
    </MapMarkersProvider>
    {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default App;
