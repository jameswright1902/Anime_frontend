import React, { useState, useEffect } from "react";

const TopCharacters = () => {
  const [topCharacters, setTopCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/top/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setTopCharacters(data.data);
      })
      .catch((error) =>
        console.error("Error fetching top characters data:", error)
      );
  }, []);

  const [visibleAboutIndex, setVisibleAboutIndex] = useState(null);

  const toggleAboutVisibility = (index) => {
    setVisibleAboutIndex(index === visibleAboutIndex ? null : index);
  };

  return (
    <div>
      <h1>Welcome to My Top Characters Page</h1>
      <p>Here you'll find Top Characters tailored just for you!</p>
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
