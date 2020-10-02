<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark" :class="backgroundThemeClass">
      <router-link to="/" class="navbar-brand font-weight-bold"
        >MoviesApp</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarMenu"
      >
        <div class="colorPick ml-auto">
          <div class="bg-primary mx-1" @click="changeTheme"></div>
          <div class="bg-secondary mx-1" @click="changeTheme"></div>
          <div class="bg-success mx-1" @click="changeTheme"></div>
          <div class="bg-danger mx-1" @click="changeTheme"></div>
          <div class="bg-warning mx-1" @click="changeTheme"></div>
          <div class="bg-info mx-1" @click="changeTheme"></div>
          <div class="bg-dark mx-1" @click="changeTheme"></div>
        </div>
        <form class="form-inline my-2 my-lg-0 ml-auto" v-if="!$route.params.id">
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
  computed: {
    backgroundThemeClass(){
      return this.$store.getters.getBackgroundThemeClass;
    }
  },
  methods: {
    loadMovies() {
      if (this.searchText != "") {
        this.$store.dispatch("getMoviesBySearch", this.searchText);
        this.searchText = "";
      }
    },
    changeTheme(event){
      let className = event.target.classList[0];
      this.$store.dispatch('changeTheme', className);
    }
  }
};
</script>


<style scoped>
.colorPick div {
  width: 30px;
  height: 30px;
  display: inline-block;
  border: 2px solid black;
  border-radius: 8px;
  cursor: pointer;
}
</style>