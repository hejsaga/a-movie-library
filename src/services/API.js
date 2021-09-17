import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "?api_key=a0c601aa6ecbb939cd7d58617bbc8150";

const get = async (endpoint) => {
  const response = await axios.get(endpoint + apiKey);
  return response.data;
};

// Get something with Append To Response method
const getWithATR = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

// Get all movies currently in cinemas
export const getNowPlaying = async () => {
  return await get(`/movie/now_playing`);
};

// Get all trending movies from today
export const getTrendingToday = async () => {
  return await get(`/trending/movie/day`);
};

// Get all trending movies from this week
export const getTrendingWeek = async () => {
  return await get(`trending/movie/week`);
};

// Get all top rated movies
export const getTopRated = async () => {
  return await get(`/movie/top_rated`);
};

// Get one movie
export const getMovie = async (id) => {
  return await get(`/movie/${id}`);
};

// Get similar to one movie
export const getSimilarMovies = async (id) => {
  return await get(`/movie/${id}/similar`);
};

// Get actors from movie id
export const getActors = async (id) => {
  return await get(`/movie/${id}/credits`);
};

// Get actor by id
export const getActorById = async (id) => {
  return await get(`/person/${id}`);
};

// Get actors filmography
export const getActorMovies = async (id) => {
  return await get(`/person/${id}/movie_credits`);
};

// Get all genres
export const getGenres = async (id) => {
  return await get(`genre/movie/list`);
};

// Get movies from genre id
export const getMoviesInGenre = async (id, page) => {
  return await getWithATR(
    `/discover/movie/${apiKey}&with_genres=${id}&page=${page}`
  );
};

// Get search result and paginate it
export const getSearchResult = async (query, page) => {
  return await getWithATR(
    `/search/multi/${apiKey}&query=${query}&page=${page}`
  );
};

export default {
  getNowPlaying,
  getTopRated,
  getMovie,
  getSimilarMovies,
  getActors,
  getActorById,
  getActorMovies,
  getGenres,
  getMoviesInGenre,
  getSearchResult,
  getTrendingToday,
  getTrendingWeek,
};
