import { useGetAnimeQuery } from "./redux/api/index.js";

function App() {
  
  const{isLoading}= useGetAnimeQuery

  return (
    <>
      {isLoading? <h1>Loading...</h1>:<h1>Loaded</h1>}
    </>
  )
}

export default App
