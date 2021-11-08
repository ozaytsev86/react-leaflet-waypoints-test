import './app.css';
import {ReactLeafletMap} from 'react-leaflet-waypoints';

function App() {
  return (
    <div className="App">
      <ReactLeafletMap
        layerUrl="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        waypoints={[{lat: '40.4381311', lng: '-3.8196196'}, {lat: '42.7576862', lng: '1.5082874'}]}
      />
    </div>
  );
}

export default App;
