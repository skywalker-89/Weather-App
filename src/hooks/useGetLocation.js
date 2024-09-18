import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useGetLocation = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const fetchLocationData = async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${encodeURIComponent(
        lat
      )}&lon=${encodeURIComponent(lon)}`;
      const res = await fetch(url);
      const data = await res.json();
      const city =
        data.address.city || data.address.town || data.address.village;
      const country = data.address.country;
      setLocation({ city, country });
    } catch (err) {
      setError("Could not fetch location");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("Permission to access location was denied");
        setLoading(false);
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
      } catch (error) {
        setError("Failed to get location");
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchLocationData();
    }
  }, [lat, lon]);

  return [loading, error, location];
};

export default useGetLocation;
