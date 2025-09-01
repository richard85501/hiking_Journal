// components/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FC, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { useFlyToStore } from "@/lib/useFlyToStore";
import "leaflet-gpx";
import { useGpxStore } from "@/lib/useGpxStore";
import { LayerEvent } from "leaflet";

// 擴展 Leaflet 類型
// 擴展 Leaflet 類型
declare module "leaflet" {
  class GPX extends L.FeatureGroup {
    constructor(gpxUrl: string, options?: Record<string, unknown>);
  }
}
interface PatchedDefaultIcon extends L.Icon.Default {
  _getIconUrl?: () => string;
}
// 讓 TypeScript 知道 prototype 有這個東西
delete (L.Icon.Default.prototype as PatchedDefaultIcon)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// GPX 控制組件
const GPXControl: FC<{ gpxUrl: string; gpxColor: string }> = ({
  gpxUrl,
  gpxColor,
}) => {
  const map = useMap();
  const gpxLayerRef = useRef<L.GPX | null>(null);

  // map.on("click", function (e) {
  //   const lat = e.latlng.lat;
  //   const lng = e.latlng.lng;
  //   alert(`你點的位置：${lat}, ${lng}`);

  //   // 開啟 OSM 上該位置
  //   // const osmUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=18/${lat}/${lng}`;
  //   // window.open(osmUrl, "_blank");
  // });

  useEffect(() => {
    // 移除之前的 GPX 圖層
    if (gpxLayerRef.current) {
      map.removeLayer(gpxLayerRef.current);
    }

    // 創建新的 GPX 圖層
    gpxLayerRef.current = new L.GPX(gpxUrl, {
      async: true,
      polyline_options: {
        color: gpxColor,
        weight: 4,
        opacity: 0.7,
      },
    });

    // 加載完成後自動調整視野
    gpxLayerRef.current.on("loaded", function (e: LayerEvent) {
      map.fitBounds(e.target.getBounds());
    });

    // 添加到地圖
    gpxLayerRef.current.addTo(map);

    // 清理函數
    return () => {
      if (gpxLayerRef.current) {
        map.removeLayer(gpxLayerRef.current);
      }
    };
  }, [map, gpxUrl, gpxColor]);

  return null;
};

interface MapComponentProps {
  center?: [number, number];
  zoom?: number;
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
}) => {
  const flyTo = useFlyToStore((state) => state.flyTo);
  const gpxList = useGpxStore((state) => state.gpxList);
  const markerList = useGpxStore((state) => state.markerList);

  return (
    <div className="w-full h-96 relative">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        {/* OpenStreetMap 圖層 */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* 渲染標記點 */}
        {markerList.map((item) => (
          <Marker
            key={`${item.lat}${item.caption}`}
            position={item.coordinates}
          >
            <Popup>
              <div>
                <h3 className="font-bold">{item.location}</h3>
                <p>{item.caption}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {gpxList.map((item) => (
          <GPXControl
            key={item.gpxFile}
            gpxUrl={`/gpx/${item.gpxFile}`}
            gpxColor={item.gpxColor}
          />
        ))}

        <FlyToControl flyTo={flyTo} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
