import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let state = {
  movies: []
};
export default new Vuex.Store({
  state,
  getters: {
    getMovies() {
      return state.movies;
    }
  },
  mutations: {
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    clearMovies(state){
      state.movies = []
    }
  },
  actions: {
    getMoviesBySearch({ commit }, search = "Far") {
      commit('clearMovies');
      axios
        .get(`http://www.omdbapi.com/?&apikey=thewdb&s=${search}`)
        .then((response) => {
          response.data.Search.forEach((movie) => {
            axios
              .get(`http://www.omdbapi.com/?&apikey=thewdb&i=${movie.imdbID}`)
              .then((response) => {
                commit('addMovie', response.data)
              });
          });
        });
    }
  },
  modules: {}
});
