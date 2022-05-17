
import './App.css';
import MainMapComponent from "./Components/MainMapComponent";
import MapMarkersProvider from './providers/MapMarkersProvider';

function App() {

  
  return (
    <div className="App">
    <MapMarkersProvider>
    <MainMapComponent />
    </MapMarkersProvider>
    </div>
  );
}

export default App;
