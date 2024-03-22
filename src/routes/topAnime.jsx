import { useState, useEffect } from "react";
import axios from "axios";

const TopAnime = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/top/anime`);
        console.log("Response data:", response.data.data);
        const shuffledAnime = shuffleArray(response.data.data);
        setTopAnime(shuffledAnime);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top anime data:", error);
        if (error.response && error.response.status === 429) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          fetchData();
        } else {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime);
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>AnimeMania</h1>
      <div id="top-anime-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          topAnime.map((anime, index) => (
            <div key={anime.id || index} className="anime-card">
              <img
                src={anime.images?.jpg?.image_url}
                alt={anime.title}
                onClick={() => handleAnimeClick(anime)}
                style={{ cursor: "pointer" }}
              />
              <h2>{anime.title}</h2>
              {selectedAnime === anime && (
                <div>
                  {/* Display additional details here */}
                  <p>Status: {anime.status}</p>
                  <p>Rating: {anime.rating}</p>
                  <p>Rank: {anime.rank}</p>
                  <p>Type: {anime.type}</p>
                  <p>Episodes: {anime.episodes}</p>
                  <p>{anime.synopsis}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopAnime;
