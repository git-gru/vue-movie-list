import Vue from 'vue';
import Vuex from 'vuex';
import MovieService from '@/services/MovieService';
import { Movie } from '@/services/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: 'Bob Razowski',
      apiToken: '273b9080',
    },
    movies: [] as Movie[],
    page: 1,
  },
  actions: {
    async loadMovies({ commit, state }) {
      const result = await MovieService.movieService.getMovieList(state.user.apiToken, state.page);
      commit('SET_MOVIES', result.result);
    },
  },
  getters: {
    movies(state) {
      return state.movies;
    },
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = [...state.movies, ...movies];
      state.page += 1;
    },
  },
});
