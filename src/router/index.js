import Vue from "vue";
import VueRouter from "vue-router";

import Movies from '../views/Movies'
import SingleMovie from '../views/SingleMovie'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Movies
  },
  {
    path: '/:id',
    component: SingleMovie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
