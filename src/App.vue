<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/appHeader'

export default {
  name: 'App',
  components: {
    'app-header': appHeader
  }
}
</script>

<style>
</style>
