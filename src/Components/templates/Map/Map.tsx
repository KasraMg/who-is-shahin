import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
 const Map = () => {
  return (
 
    <MapContainer className={`w-[500px] border-red-600 border-2 border-solid relative  z-[500]  lg:w-full rounded-md h-[300px]`} center={[29.871166, 52.797588]} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[29.871166, 52.797588]}>
        <Popup>
          Nike<br /> Shop
        </Popup>
      </Marker>
    </MapContainer>


  )
}
export default Map