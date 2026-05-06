import Navbar from "../Navbar.jsx";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

function Routing() {
  const map = useMap();

  useEffect(() => {
    const customIcon = new L.Icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    const control = L.Routing.control({
      waypoints: [
        L.latLng(-4.0548, 122.4816),
        L.latLng(-4.075, 122.4839),
        L.latLng(-4.0742, 122.4883),
        L.latLng(-4.0678, 122.4916),
      ],
      routeWhileDragging: false,
      draggableWaypoints: false,
      addWaypoints: false,
      createMarker: function (i, wp) {
        return L.marker(wp.latLng, { icon: customIcon });
      },
    }).addTo(map);

    return () => map.removeControl(control);
  }, [map]);

  return null;
}

function Location() {
  const position = [-4.0601, 122.47666];

  return (
    <main className="bg-linear-to-br from-primary via-primary/90 to-primary/50 min-h-screen overflow-hidden">
      <div className="w-full h-150 rounded-xl overflow-hidden">
        <MapContainer center={position} zoom={13} className="w-full h-full">
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Routing />
        </MapContainer>
      </div>

      <Navbar />
    </main>
  );
}

export default Location;
