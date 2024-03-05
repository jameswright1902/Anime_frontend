import React, { useState, useEffect } from "react";

const AnimeCard = ({ anime, addToMustWatchList }) => {
  return (
    <div className="anime-card">
      <img src={anime.image_url} alt={anime.title} />
      <h2>{anime.title}</h2>
      <p>{anime.synopsis}</p>
      <button onClick={() => addToMustWatchList(anime)}>
        Add to Must-Watch
      </button>
    </div>
  );
};

const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);
  const [mustWatchList, setMustWatchList] = useState([]);

  useEffect(() => {
    fetchAnimeData();
  }, []);

  const fetchAnimeData = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/top/anime/1");
      const data = await response.json();
      setAnimeList(data.top);
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  };

  const addToMustWatchList = (anime) => {
    setMustWatchList([...mustWatchList, anime]);
  };

  return (
    <div className="anime-list">
      {animeList.map((anime, index) => (
        <AnimeCard
          key={index}
          anime={anime}
          addToMustWatchList={addToMustWatchList}
        />
      ))}
    </div>
  );
};

export default AnimeList;
