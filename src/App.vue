<template>
  <div id="app">
    <app-header></app-header>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import appHeader from "./components/appHeader";
export default {
  name: "App",
  components: {
    "app-header": appHeader
  }
};
</script>

<style></style>
