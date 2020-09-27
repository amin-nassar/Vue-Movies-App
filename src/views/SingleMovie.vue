<template>
  <div class="container mt-3 bg-info p-3 rounded-lg">
    <div class="row">
      <div class="col-md-4">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="col-md-8 text-light">
        <h1>{{ movie.Title }} | ({{ movie.Year }})</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "single-movie",
  data() {
    return {
      movie: {}
    };
  },
  created() {
    let movieID = this.$route.params.id;
    axios
      .get(`http://www.omdbapi.com/?&apikey=thewdb&i=${movieID}`)
      .then((response) => {
        this.movie = response.data;
      });
  }
};
</script>

<style scoped></style>
