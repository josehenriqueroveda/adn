<template>
  <div class="container">
    <div class="sidebar">
      <h1 class="logo blue">ADN</h1>
      <i class="material-icons hamburger" @click="isCollapsed = !isCollapsed">menu</i>
      <nav class="sidebar-links" v-if="!isCollapsed">
        <RouterLink class="sidebar-link" to="/">Home</RouterLink>
        <RouterLink class="sidebar-link" to="/clientes">Clientes</RouterLink>
        <RouterLink class="sidebar-link" to="/atendimentos">Atendimentos</RouterLink>
        <RouterLink class="sidebar-link dropdown-link" to="/materiais">Materiais</RouterLink>
        <RouterLink class="sidebar-link dropdown-link" to="/receituarios">Receiturários</RouterLink>
      </nav>
      <div class="dropdown-menu" v-if="isCollapsed">
        <RouterLink class="sidebar-link dropdown-link" to="/">Home</RouterLink>
        <RouterLink class="sidebar-link dropdown-link" to="/clientes">Clientes</RouterLink>
        <RouterLink class="sidebar-link dropdown-link" to="/atendimentos">Atendimentos</RouterLink>
        <RouterLink class="sidebar-link dropdown-link" to="/materiais">Materiais</RouterLink>
        <RouterLink class="sidebar-link dropdown-link" to="/receituarios">Receiturários</RouterLink>
      </div>
    </div>
    <div class="router-view-container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      isCollapsed: false,
    };
  },
};

</script>

<style>
@import './assets/app.css';
</style>