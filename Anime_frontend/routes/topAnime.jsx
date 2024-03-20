import React, { useState, useEffect } from "react";
const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [clickedAnime, setClickedAnime] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/top/anime")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        const shuffledAnime = shuffleArray(data.data);
        setTopAnime(shuffledAnime);
      })
      .catch((error) => console.error("Error fetching top anime data:", error));
  }, []);
  // Function to shuffle an array
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
      <h1> AnimeMania</h1>
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