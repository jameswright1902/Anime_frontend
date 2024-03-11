import React, { useState, useEffect } from "react";

const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [clickedAnime, setClickedAnime] = useState(null);

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 100) + 1; // Generate a random page number
    fetch(`http://localhost:3000/top/anime?page=${randomPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        // Filter out anime with the genre "Hentai"
        const filteredAnime = data.data.filter(anime => !anime.genres.some(genre => genre.name === 'Hentai'));
        setTopAnime(filteredAnime);
      })
      .catch((error) =>
        console.error("Error fetching top anime data:", error)
      );
  }, []); // Empty dependency array means this effect runs only once on component mount

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
      <h1>Top Anime</h1>
      <p>...</p>
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
