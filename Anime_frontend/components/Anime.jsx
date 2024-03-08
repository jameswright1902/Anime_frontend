import { useEffect, useState } from "react";
// import AllAnime from "../hooks/useGetAnimeData";
import { useGetAnimeQuery } from "../api";
const Anime = () => {
  const [animeData, setAnimeData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { data, isLoading } = useGetAnimeQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    console.log(data);
  }
};

export default Anime;
