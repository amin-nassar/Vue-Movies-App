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
        <ul class="navbar-nav ml-auto mr-5">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Movies</router-link>
          </li>
          <li class="nav-item">
            <router-link to="Favourites" class="nav-link">Favourites</router-link>
          </li>
          <li class="nav-item"><router-link to="WatchList" class="nav-link">WatchList</router-link></li>
          <li class="nav-item"><router-link to="/" class="nav-link">Logout</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
