import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearCoordinates } from "../../redux/geocode/slice";
import { selectGeoCoords } from "../../redux/geocode/selectors";
import { geocodeLocation } from "../../redux/geocode/operations";

const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const MapComponent = ({ location }) => {
  const dispatch = useDispatch();
  const coord = useSelector(selectGeoCoords);

  useEffect(() => {
    if (location) {
      const [country, city] = location.split(",").map((part) => part.trim());
      dispatch(geocodeLocation({ city, country }))
        .unwrap()
        .then(() => {})
        .catch((err) => {
          toast.error(err.message);
        });
    }
    return () => {
      dispatch(clearCoordinates());
    };
  }, [dispatch, location]);

  const mapStyles = {
    paddingLeft: "40px",
    paddingRight: "40px",
    width: "100%",
    height: "580px",
  };

  return (
    <LoadScript googleMapsApiKey={googleApiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{
          lat: coord?.lat || 0,
          lng: coord?.lng || 0,
        }}
        zoom={13}
      >
        {coord && (
          <Marker
            position={{
              lat: coord?.lat || 0,
              lng: coord?.lng || 0,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
