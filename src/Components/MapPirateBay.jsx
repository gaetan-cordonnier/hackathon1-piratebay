import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MapStyled, MarkerStyled } from "../ComponentsStyled/MapStyled";
import L from "leaflet";
import weatherData from "../weatherData.json";

export default function MapPirateBay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMock();
  }, []);

  const getMock = () => {
    setData(weatherData.list);
  };

  return (
    <div>
      <h1>Hi pirate bay !</h1>

      <div>
        <MapStyled>
          <MapContainer center={[17.7, -83.6]} zoom={6} minZoom={0}>
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
            />
            {data.map((dataMarker, index) => {
              console.log(dataMarker);
              return (
                <Marker
                  key={index}
                  position={[dataMarker.coord.lat, dataMarker.coord.lon]}
                  icon={L.icon({
                    iconUrl: `http://openweathermap.org/img/wn/${dataMarker.weather[0].icon}@2x.png`,
                    // shadowUrl: iconShadow,
                    iconSize: [90, 90],
                    iconAnchor: [15, 42],
                    shadowAnchor: [12, 42],
                    popupAnchor: [0, -40],
                  })}
                />
              );
            })}
          </MapContainer>
        </MapStyled>
      </div>
    </div>
  );
}
