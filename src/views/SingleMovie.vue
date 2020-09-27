<template>
  <div>
    <div class="container mt-3 bg-info p-3 rounded-lg">
      <div class="row">
        <div class="col-md-4">
          <img :src="movie.Poster" :alt="movie.Title" />
        </div>
        <div class="col-md-8 text-light">
          <h1 class="text-center">{{ movie.Title }} ({{ movie.Year }})</h1>
          <hr />
          <p><strong>MPAA Rating : </strong> {{ movie.Rated }}</p>
          <p><strong>Genre : </strong> {{ movie.Genre }}</p>
          <p><strong>Runtime : </strong> {{ movie.Runtime }}</p>
          <p><strong>Release Date : </strong> {{ movie.Released }}</p>
          <ul class="list-group">
            <li
              v-for="rating in ratings"
              :key="rating.Source"
              class="list-group-item bg-info d-flex justify-content-between align-items-center"
            >
              {{ rating.Source }}
              <span class="badge badge-light p-1 badge-pill">{{
                rating.Value
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mt-3 bg-info p-3 rounded-lg">
      <div class="row">
        <div class="col-md-12 text-light">
          <h2 class="text-left">Movie Plot</h2>
          <p>{{ movie.Plot }}</p>
          <hr />
          <h2>Actors</h2>
          <ul class="list-group">
            <li
              v-for="actor in actors"
              :key="actor"
              class="list-group-item bg-info d-flex justify-content-between align-items-center"
            >
              {{actor}}
            </li>
          </ul>
          <hr>
          <h2>Director/s</h2>
          <ul class="list-group">
            <li
              v-for="director in directors"
              :key="director"
              class="list-group-item bg-info d-flex justify-content-between align-items-center"
            >
              {{director}}
            </li>
          </ul>
          <hr>
          <h2>Writer/s</h2>
          <ul class="list-group">
            <li
              v-for="writer in writers"
              :key="writer"
              class="list-group-item bg-info d-flex justify-content-between align-items-center"
            >
              {{writer}}
            </li>
          </ul>
        </div>
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
  computed: {
    ratings() {
      return this.movie.Ratings
    },
    actors() {
      return this.movie.Actors.split(',')
    },
    writers(){
      return this.movie.Writer.split(',')
    },
    directors(){
      return this.movie.Director.split(',')
    }
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

<style scoped>
.badge {
  display: inline-block !important;
  padding: 10px !important;
}
</style>
