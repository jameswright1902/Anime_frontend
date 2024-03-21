import { useState, useEffect } from "react";
import axios from "axios";

const TopAnime = () => {
  const [topAnime, setTopAnime] = useState([]);
  const [error, setError] = useState(null); // New state for storing error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/top/anime");
        console.log("Response data:", response.data.data);
        const shuffledAnime = shuffleArray(response.data.data);
        setTopAnime(shuffledAnime);
      } catch (error) {
        // If rate limited, wait for some time and retry
        console.error("Error fetching top anime data:", error);
        if (error.response && error.response.status === 429) {
          // If rate limited, wait for some time and retry
          // Wait for 5 seconds
          await new Promise((resolve) => setTimeout(resolve, 5000));

          // Retry fetching data
          fetchData();
        } else {
          // Set other errors
          setError(error);
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

  const handleAnimeClick = (index) => {
    // Define your click handling logic here
    // For now, let's log the index to the console
    console.log("Clicked anime index:", index);
  };

  // Render error message if there's an error
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h1>AnimeMania</h1>
      <div id="top-anime-container">
        {topAnime.length > 0 ? (
          topAnime.map((anime, index) => (
            <div key={anime.id || index} className="anime-card">
              <img
                src={anime.images?.jpg?.image_url}
                alt={anime.title}
                onClick={() => handleAnimeClick(index)} // Call handleAnimeClick when clicked
              />
              <h2>{anime.title}</h2>
              {/* Rest of your code */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TopAnime;
