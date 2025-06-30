// components/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FC, useEffect } from "react";
import { Trail } from "@/data/trail-markers";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 修復 Leaflet 預設圖示問題
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapComponentProps {
  center?: [number, number];
  zoom?: number;
  markers?: Trail[];
  flyTo?: [number, number];
}

const FlyToControl: FC<{ flyTo?: [number, number] | null }> = ({ flyTo }) => {
  const map = useMap();

  useEffect(() => {
    if (flyTo) {
      map.flyTo(flyTo, 15);
    }
  }, [flyTo, map]);

  return null;
};

const MapComponent: FC<MapComponentProps> = ({
  center = [25.033, 121.565],
  zoom = 13,
  markers = [],
  flyTo,
}) => {
  return (
    <div className="w-full h-96 relative">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      >
        {/* OpenStreetMap 圖層 */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 渲染標記點 */}
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              <div>
                <h3 className="font-bold">{marker.title}</h3>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <FlyToControl flyTo={flyTo} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
