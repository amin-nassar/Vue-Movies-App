<template>
  <div id="app">
    <app-header></app-header>
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
