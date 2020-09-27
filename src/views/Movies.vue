<template>
  <div class="card-group container-fluid">
    <div class="row">
      <app-movie v-for="i in 8" :key="i"></app-movie>
    </div>
  </div>
</template>

<script>
import appMovie from "../components/appMovie";

export default {
  name: "Movies",
  components: {
    "app-movie": appMovie
  }
};
</script>

<style scoped></style>
