import { useState, useEffect } from "react";
import { createClient } from "pexels";
import { IMAGE_API } from "@env";

const useGetCityImage = (query, type) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const client = createClient(IMAGE_API);

    const fetchImage = async () => {
      try {
        const searchQuery = type === "city" ? query : `${query} country`;
        const response = await client.photos.search({
          query: searchQuery,
          per_page: 1,
        });
        if (response.photos && response.photos.length > 0) {
          setImage(response.photos[0].src.original);
        } else {
          setError("No image found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [query, type]);

  return [loading, error, image];
};

export default useGetCityImage;
