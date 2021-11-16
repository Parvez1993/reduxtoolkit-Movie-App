import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apikey } from "../common/MovieApiKey";
import MovieApi from "../common/MovieApi";

//movies
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const res = await MovieApi.get(
      `?apikey=${apikey}&s=${movieText}&type=movie`
    );
    return res.data;
  }
);

//tv series
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Harry";
    const res = await MovieApi.get(
      `?apikey=${apikey}&s=${seriesText}&type=series`
    );
    return res.data;
  }
);

export const selectedmovieorShow = createAsyncThunk(
  "movies/selectedmovieorShow",
  async (id) => {
    const res = await MovieApi.get(`?apikey=${apikey}&i=${id}&plot=short`);
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieorShow: (state) => {
      state.selectedMovieorShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched Succesfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched Succesfully");
      return { ...state, shows: payload };
    },
    [selectedmovieorShow.fulfilled]: (state, { payload }) => {
      console.log("selected Movies/series Succesfully");
      return { ...state, selectedMovieorShow: payload };
    },
  },
});

export const { removeSelectedMovieorShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.shows;
export const getSelectedMovieorProducts = (state) =>
  state.movies.selectedMovieorShow;
export default movieSlice.reducer;
