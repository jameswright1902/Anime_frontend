import React, { useState, useEffect } from "react";

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [clickedAnime, setClickedAnime] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/top/anime")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setTopAnime(data.data);
      })
      .catch((error) => console.error("Error fetching top anime data:", error));
  }, []);

  const handleAnimeClick = (index) => {
    // Toggle the clicked anime index
    if (clickedAnime === index) {
      setClickedAnime(null); // If already clicked, close the details
    } else {
      setClickedAnime(index); // If not clicked, set the clicked anime index
    }
  };

  return (
    <div>
      <h1>Welcome to My Anime</h1>
      <p>This is the home page of my anime website.</p>
      <div id="top-anime-container">
        {topAnime.length > 0 ? (
          topAnime.map((anime, index) => (
            <div key={anime.id || index} className="anime-card">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                onClick={() => handleAnimeClick(index)}
              />
                  <h2>{anime.title}</h2>

              {clickedAnime === index && (
                <>
                  <p>Type: {anime.type}</p>
                  <p>Score: {anime.score}</p>
                  <p>Episodes: {anime.episodes}</p>
                  <p>Genre: {anime.genre}</p>
                  <p>Rank: {anime.rank}</p>
                  <p>Synopsis: {anime.synopsis}</p>
                  <p>Year: {anime.year}</p>
                </>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
