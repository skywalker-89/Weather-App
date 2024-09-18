import { useState, useEffect } from "react";
import axios from "axios";
import { X_RAPID_API } from "@env";

const useGetCityPopulation = (country) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [population, setPopulation] = useState(null);

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const fetchPopulationData = async () => {
    setLoading(true);
    setError(null);
    setPopulation(null);

    try {
      const options = {
        method: "GET",
        url: "https://country-location-api.p.rapidapi.com/location",
        params: { country },
        headers: {
          "x-rapidapi-key": X_RAPID_API,
          "x-rapidapi-host": "country-location-api.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      if (
        response.data &&
        response.data.location &&
        response.data.location.population
      ) {
        setPopulation(formatNumber(response.data.location.population));
      } else {
        setError("Population data not available");
      }
    } catch (err) {
      setError("Could not fetch population data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (country) {
      fetchPopulationData();
    }
  }, [country]);

  return [loading, error, population];
};

export default useGetCityPopulation;
