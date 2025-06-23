import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  const center = [54.601699, 36.257406] as [number, number];
  const company = {
    name: "Дальняя улица, 5",
    position: [54.601699, 36.257406] as [number, number],
  };

  return (
    <div style={{ height: "500px", width: "80%" }}>
      <MapContainer
        center={center}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={company.position} icon={defaultIcon}>
          <Popup>{company.name}</Popup>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            {company.name}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
