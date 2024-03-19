import React, { useState, useEffect } from "react";
import axios from "axios";

const RecommendationsPage = () => {
  const [schedules, setSchedules] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchAnimeSchedules()
      .then((data) => {
        setSchedules(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching anime schedules:", error)
      );
  }, []);

  // Function to fetch anime schedules
  async function fetchAnimeSchedules() {
    try {
      const response = await axios.get(`http://localhost:3000/schedules`);
      return response.data;
    } catch (error) {
      console.error("Error fetching anime schedules:", error.message);
      throw error;
    }
  }

  // Function to handle image click and display details
  const handleImageClick = (anime) => {
    setSelectedAnime(anime);
  };

  return (
    <div>
      <h1></h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.keys(schedules).map((day, index) => (
          <div key={index}>
            {/* <h2>{day}</h2> */}
            <div id={`recommendation-container-${index}`}>
              {schedules[day] && Array.isArray(schedules[day])
                ? schedules[day].map((anime, animeIndex) => (
                    <div key={anime.id || animeIndex} className="anime-card">
                      {anime.images && anime.images.jpg && anime.images.jpg.image_url ? (
                        <img
                          src={anime.images.jpg.image_url} // Check if image_url is available
                          alt={anime.title}
                          onClick={() => handleImageClick(anime)}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                      <h3>{anime.title}</h3>
                      {/* Display details only if anime is selected */}
                      {selectedAnime === anime && (
                        <div>
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
                : null}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsPage;
