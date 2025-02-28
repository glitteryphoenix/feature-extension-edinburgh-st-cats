// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// // 🗺️ Full List of Edinburgh Neighborhoods with Coordinates
// const neighborhoodCoords = {
//   "Leith": [55.975, -3.172],
//   "New Town": [55.9565, -3.1965],
//   "Old Town": [55.9486, -3.1914],
//   "Stockbridge": [55.9579, -3.2075],
//   "Morningside": [55.9225, -3.2115],
//   "Portobello": [55.9532, -3.1132],
//   "Southside": [55.9444, -3.1870],
//   "Tollcross": [55.9456, -3.2035],
//   "Bruntsfield": [55.9390, -3.2090],
//   "Gorgie": [55.9395, -3.2320],
//   "Dalry": [55.9450, -3.2190],
//   "Corstorphine": [55.9410, -3.2800],
//   "South Queensferry": [55.9900, -3.3960],
//   "West End": [55.9500, -3.2100]
// };

// function Map({ cats }) {
//   const edinburghCoords = [55.9533, -3.1883]; // Center the map on Edinburgh

//   return (
//     <MapContainer center={edinburghCoords} zoom={12} style={{ height: "400px", width: "100%" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//       {/* 🐾 Place markers based on neighborhood */}
//       {cats.map((cat) => {
//         const position = neighborhoodCoords[cat.location];
//         if (!position) return null; // Skip if neighborhood isn't listed

//         return (
//           <Marker key={cat.id} position={position}>
//             <Popup>
//               <strong>{cat.name}</strong> <br />
//               📍 {cat.location}
//             </Popup>
//           </Marker>
//         );
//       })}
//     </MapContainer>
//   );
// }

// export default Map;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 🗺️ Full List of Edinburgh Neighborhoods with Coordinates
const neighborhoodCoords = {
  "Leith": [55.975, -3.172],
  "New Town": [55.9565, -3.1965],
  "Old Town": [55.9486, -3.1914],
  "Stockbridge": [55.9579, -3.2075],
  "Morningside": [55.9225, -3.2115],
  "Portobello": [55.9532, -3.1132],
  "Southside": [55.9444, -3.1870],
  "Tollcross": [55.9456, -3.2035],
  "Bruntsfield": [55.9390, -3.2090],
  "Gorgie": [55.9395, -3.2320],
  "Dalry": [55.9450, -3.2190],
  "Corstorphine": [55.9410, -3.2800],
  "South Queensferry": [55.9900, -3.3960],
  "West End": [55.9500, -3.2100]
};

function Map({ cats }) {
  const edinburghCoords = [55.9533, -3.1883]; // Center the map on Edinburgh

  return (
    <div className="map" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
    <MapContainer center={edinburghCoords} zoom={12} style={{ height: "400px", width: "70%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* 🐾 Place markers based on neighborhood */}
      {cats.map((cat) => {
        const position = neighborhoodCoords[cat.location];
        if (!position) return null; // Skip if neighborhood isn't listed

        return (
          <Marker key={cat.id} position={position}>
            <Popup>
              <strong>{cat.name}</strong> <br />
              🐾 {cat.location}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
    </div>
  );
}

export default Map;

