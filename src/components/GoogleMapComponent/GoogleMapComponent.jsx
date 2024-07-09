import { useEffect, useRef, useCallback } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearCoordinates } from "../../redux/geocode/slice";
import { selectGeoCoords } from "../../redux/geocode/selectors";
import { geocodeLocation } from "../../redux/geocode/operations";

const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = ({ location }) => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApiKey,
  });

  const handleLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const handleUnmount = useCallback(function callback() {
    mapRef.current = null;
  }, []);

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
    <>
      {isLoaded && !loadError && (
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={{
            lat: coord?.lat || 0,
            lng: coord?.lng || 0,
          }}
          zoom={13}
          onLoad={handleLoad}
          onUnmount={handleUnmount}
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
      )}
    </>
  );
};

export default MapComponent;
