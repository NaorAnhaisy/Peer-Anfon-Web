import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

const COORDINATES = [32.022130, 34.801570];
const ZOOM = 17;

const Map = () => {
  return (
    <MapContainer center={COORDINATES} zoom={ZOOM} scrollWheelZoom={false} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={COORDINATES}>
        <Popup>
          פאר אנפון תעשיות בע&quot;מ - הסדנה 13, חולון
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;