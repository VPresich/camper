import { useEffect, useRef, useCallback } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearCoordinates } from "../../redux/geocode/slice";
import { selectGeoCoords } from "../../redux/geocode/selectors";
import { geocodeCity, geocodeLocation } from "../../redux/geocode/operations";

const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const libraries = ["places"];

const MapComponent = ({ location, onLocationSelect = null }) => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleApiKey,
    libraries,
  });

  const handleLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const handleUnmount = useCallback(function callback() {
    mapRef.current = null;
  }, []);

  const handleMapClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    dispatch(geocodeCity(newLocation))
      .unwrap()
      .then((city) => {
        onLocationSelect && onLocationSelect(city);
      })
      .catch(() => {
        toast.error("Error fetching");
      });
  };

  const coord = useSelector(selectGeoCoords);
  useEffect(() => {
    if (location) {
      const [country, city] = location.split(",").map((part) => part.trim());
      dispatch(geocodeLocation({ city, country }));
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
          onClick={handleMapClick}
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
