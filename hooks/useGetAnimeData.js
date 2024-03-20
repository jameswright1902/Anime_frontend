// import React, { useEffect } from "react";
// import useGetAnimeData from "./useGetAnimeData";
// import { useNavigate } from "react-router-dom";

// const AllAnime
//  = () => {
//   const { animeData, isLoading, error } = useGetAnimeData();
//   const navigate = useNavigate();

//   useEffect(() => {}, [animeData, error, isLoading]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1 className="productTitle">All Anime</h1>
//       <hr />
//       <div className="product-list cart">
//         {animeData.map((anime) => (
//           <div className="soloItems" key={anime.id}>
//             <h2
//               onClick={() => {
//                 navigate(`/anime/${anime.id}`);
//               }}
//             >
//               {anime.title}
//             </h2>
//             <img
//               onClick={() => {
//                 navigate(`/anime/${anime.id}`);
//               }}
//               src={anime.image_url}
//               alt={anime.title}
//             />
//             <p>{anime.synopsis}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllAnime
// ;
