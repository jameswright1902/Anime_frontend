import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  topAnime: [],
  loading: false,
  error: null,
};

// Define the asynchronous thunk for fetching top anime data
export const fetchTopAnime = createAsyncThunk('topAnime/fetchTopAnime', async () => {
  const response = await fetch('http://localhost:3000/top/anime');
  if (!response.ok) {
    throw new Error('Failed to fetch top anime data');
  }
  const data = await response.json();
  return data;
});

// Define the top anime slice
const topAnimeSlice = createSlice({
  name: 'topAnime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.topAnime = action.payload.data; // Assuming the payload structure is { data: [...] }
      })
      .addCase(fetchTopAnime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the top anime slice reducer
export default topAnimeSlice.reducer;
