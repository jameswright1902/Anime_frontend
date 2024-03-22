import { useState, useEffect } from "react";
import axios from "axios";

const TopCharacters = () => {
  const [topCharacters, setTopCharacters] = useState([]);
  const [visibleAboutIndex, setVisibleAboutIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://anime-demo.onrender.com/top/characters");
        const data = response.data.data;
        console.log(data);
        const shuffledCharacters = shuffleArray(data);
        setTopCharacters(shuffledCharacters);
      } catch (error) {
        console.error("Error fetching top characters data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const toggleAboutVisibility = (index) => {
    setVisibleAboutIndex(index === visibleAboutIndex ? null : index);
  };

  return (
    <div>
      <h1>Characters:</h1>
      
      <div id="top-characters-container">
        {topCharacters.length > 0 ? (
          topCharacters.map((character, index) => (
            <div key={character.id || index} className="character-card">
              <img
                src={character.images.jpg.image_url}
                alt={character.name}
                onClick={() => toggleAboutVisibility(index)}
              />
              <h2>{character.name}</h2>
              {visibleAboutIndex === index && (
                <p>About: {character.about}</p>
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

export default TopCharacters;
