import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCoordinates } from "../../redux/geocode/selectors";
import { geocodeLocation } from "../../redux/geocode/operations";
import { API_KEY } from "../../api/axiosInst";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = ({ location }) => {
  const dispatch = useDispatch();

  const coord = useSelector(selectCoordinates);

  useEffect(() => {
    if (location) {
      const [country, city] = location.split(",").map((part) => part.trim());
      dispatch(geocodeLocation({ city, country }));
    }
  }, [dispatch, location]);

  return (
    <MapContainer
      center={coord}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?apikey=${API_KEY}`}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coord}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
