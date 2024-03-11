import React, { useState, useEffect } from "react";

const TopCharacters = () => {
  const [topCharacters, setTopCharacters] = useState([]);
  const [visibleAboutIndex, setVisibleAboutIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/top/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        // Shuffle the array of characters
        const shuffledCharacters = shuffleArray(data.data);
        setTopCharacters(shuffledCharacters);
      })
      .catch((error) =>
        console.error("Error fetching top characters data:", error)
      );
  }, []);

  const toggleAboutVisibility = (index) => {
    setVisibleAboutIndex(index === visibleAboutIndex ? null : index);
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      <h1>Top Characters</h1>
      <p>...</p>
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
