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
      movie: {
        Title: "Nightcrawler",
        Year: "2014",
        Rated: "R",
        Released: "31 Oct 2014",
        Runtime: "117 min",
        Genre: "Crime, Drama, Thriller",
        Director: "Dan Gilroy",
        Writer: "Dan Gilroy",
        Actors:
          "Jake Gyllenhaal, Michael Papajohn, Marco Rodríguez, Bill Paxton",
        Plot:
          "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story.",
        Language: "English",
        Country: "USA",
        Awards: "Nominated for 1 Oscar. Another 42 wins & 122 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BN2U1YzdhYWMtZWUzMi00OWI1LWFkM2ItNWVjM2YxMGQ2MmNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        Ratings: [
          { Source: "Internet Movie Database", Value: "7.9/10" },
          { Source: "Rotten Tomatoes", Value: "95%" },
          { Source: "Metacritic", Value: "76/100" }
        ],
        Metascore: "76",
        imdbRating: "7.9",
        imdbVotes: "448,751",
        imdbID: "tt2872718",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "N/A",
        Production: "Bold Films",
        Website: "N/A",
        Response: "True"
      }
    };
  }
};
</script>

<style scoped></style>
