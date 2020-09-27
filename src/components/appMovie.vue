<template>
  <div class="card mx-auto my-3 col-xl-6 col-sm-10" 
    style="max-width: 600px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="movie.Poster" class="card-img" alt="Tenet" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-info">{{ movie.Title }} ({{ movie.Year }})</h5>
          <p class="card-text">
            {{ movie.Plot }}
          </p>
          <p class="card-text">
            <small class="text-muted"
              >{{ movie.Rated }} | {{ movie.Genre }} -
              {{ movie.Runtime }} | [ {{ movie.imdbRating }} / 10 ]</small
            >
          </p>
          <p class="card-text">
            <router-link :to="`/${movie.imdbID}`" class="btn btn-info text-right">Movie's Details</router-link>
          </p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-movie",
  data() {
    return {
    };
  },
  props: ['movie']
};
</script>

<style scoped></style>
