import React, { useState, useEffect } from 'react';

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/recommendations/anime?page=${pageNumber}&limit=10`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setRecommendations(prevRecommendations => [...prevRecommendations, ...data.data]);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching recommendations data:', error));
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  return (
    <div>
      <h1>Welcome to My Recommendations Page</h1>
      <p>Here you'll find personalized recommendations tailored just for you!</p>
      <div id="recommendation-container">
        {recommendations.map((anime, index) => (
          <div key={anime.id || index} className="anime-card">
            {anime.entry.length > 0 && anime.entry[0].images && anime.entry[0].images.jpg && (
              <img src={anime.entry[0].images.jpg.image_url} alt={anime.title} />
            )}
            <h2>{anime.title}</h2>
            <p>Type: {anime.type}</p>
            <p>Score: {anime.score}</p>
            <p>Episodes: {anime.episodes}</p>
            <p>{anime.title}</p> {/* Display anime title under the image */}

          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default RecommendationsPage;
