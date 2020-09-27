<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-info">
      <router-link to="/" class="navbar-brand">MoviesApp</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            class="form-control mr-sm-4"
            type="search"
            placeholder="Movie Title"
            aria-label="Search"
            v-model="searchText"
          />
          <button
            class="btn btn-light text-info my-2 my-sm-0"
            type="submit"
            @click.prevent="loadMovies"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    loadMovies() {
      if (this.searchText != "")
        this.$store.dispatch("getMoviesBySearch", this.searchText);
    }
  }
};
</script>
