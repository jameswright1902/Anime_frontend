import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/index.js";
import animeReducer from "../slice/anime.js";


const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    anime: animeReducer

    // sets: animeReducer(),
  },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
});

export default store;
