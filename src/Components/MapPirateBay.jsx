import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { MapStyled } from "../ComponentsStyled/MapStyled";
import L from "leaflet";

import weatherData from "../weatherData.json";

export default function MapPirateBay({ select }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMock();
    console.log(select);
  }, []);

  const getMock = () => {
    setData(weatherData.list);
  };

  return (
    <div>
      <MapStyled>
        <MapContainer center={[17.7, -83.6]} zoom={6} minZoom={0}>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
          />
          {data
            .filter(dataMarker => {
              return dataMarker.hasOwnProperty(select);
            })
            .map((dataMarker, index) => {
              let toto = null;
              switch (select) {
                case "weather":
                  toto = `http://openweathermap.org/img/wn/${dataMarker.weather[0].icon}@2x.png`;
                  break;
                case "boat":
                  toto =
                    "https://cdn.icon-icons.com/icons2/951/PNG/512/boat_icon-icons.com_74182.png";
                  break;
                case "tresor":
                  toto =
                    "https://cdn.icon-icons.com/icons2/1320/PNG/512/-treasure_86876.png";
                  break;
                default:
                  toto = "";
              }
              return (
                <Marker
                  key={index}
                  position={[dataMarker.coord.lat, dataMarker.coord.lon]}
                  icon={L.icon({
                    iconUrl: toto,

                    //shadowUrl: iconShadow,
                    iconSize: [30, 42],
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
  );
}
