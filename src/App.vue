<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRoute} from  'vue-router'
import {ref} from 'vue'
</script>

<template>
  <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <b>Pokémon Facts!</b>
            </a>
            <div class="text-end" data-bs-theme="dark">
            <RouterLink to="/registro">Registro/Inicio de sesión</RouterLink>
            </div>
        </div>
  </nav>
    <br><br>
    <img alt="pokeball" class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" width="100" height="100"/>

    <div class="wrapper">
      <h1  class="text-center">Bienvenid@</h1>
      <h4 class="text-center">¡Aquí encontrarás información sobre tus Pokémon preferidos!</h4>
      <br><br>
      <h6 class="text-center">Inicia sesión para guardar los datos que gustes o realiza una consulta rápida:</h6>
      
    </div>
    <div class="text-center">
      <RouterLink to="/pokeAPI">PokeAPI</RouterLink>
    </div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>