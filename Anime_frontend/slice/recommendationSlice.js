// import React, { useState, useEffect } from 'react';

// // Function to get the slice of recommendations for the current page
// const getRecommendationSlice = (recommendations, currentPage, itemsPerPage) => {
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, recommendations.length);
//   return recommendations.slice(startIndex, endIndex);
// };

// const RecommendationsPage = () => {
//   const [recommendations, setRecommendations] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     fetch('http://localhost:3000/recommendations/anime')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setRecommendations(data);
//         setTotalPages(Math.ceil(data.length / itemsPerPage));
//       })
//       .catch(error => console.error('Error fetching recommendations data:', error));
//   }, []);

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const recommendationSlice = getRecommendationSlice(recommendations, currentPage, itemsPerPage);

//   return (
//     <div>
//       <h1>Welcome to My Recommendations Page</h1>
//       <p>Here you'll find personalized recommendations tailored just for you!</p>
//       <div id="recommendation-container">
//         {recommendationSlice.map(anime => (
//           <div key={anime.id} className="anime-card">
//             <img src={anime.poster_image} alt={anime.title} />
//             <h2>{anime.title}</h2>
//             <p>Type: {anime.type}</p>
//             <p>Score: {anime.score}</p>
//             <p>Episodes: {anime.episodes}</p>
//           </div>
//         ))}
//       </div>
//       <div className="pagination-controls">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default RecommendationsPage;
