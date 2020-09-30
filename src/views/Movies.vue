<template>
  <div class="card-group container-fluid">
    <div class="row">
      <app-movie
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
      ></app-movie>
    </div>
  </div>
</template>

<script>
import appMovie from "../components/appMovie";

export default {
  name: "Movies",
  data() {
    return {};
  },
  components: {
    "app-movie": appMovie
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    }
  },
  created() {
    this.$store.dispatch("getMoviesBySearch");
  }
};
</script>

<style scoped></style>
