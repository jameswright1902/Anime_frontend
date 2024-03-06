import { useEffect, useState } from "react";
import AllAnime from "../hooks/useGetAnimeData";
const useGetAnimeData = () => {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/anime");
        if (!response.ok) {
          throw new Error("Failed to fetch anime data");
        }
        const data = await response.json();
        setAnimeData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  return { animeData, isLoading, error };
};

export default useGetAnimeData;
