import Vue from "vue";
import VueRouter from "vue-router";

import Movies from '../views/Movies'
import Watchlist from '../views/Watchlist'
import Favourites from '../views/Favourites'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Movies
  },
  {
    path: '/Watchlist',
    component: Watchlist
  },
  {
    path: '/Favourites',
    component: Favourites
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
