import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/index.js";
import animeReducer from './slices/anime.js'


const store = configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
    
      sets:animeReducer()

  },
  middleware:(getdefaultMiddleware)=> getdefaultMiddleware().concat(api.middleware)
})

export default store;