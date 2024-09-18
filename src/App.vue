<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';

</script>

<template>
  <div class="home-container">
    <div class="navbar-container">
      <RouterLink to="/">
        <Navbar />
      </RouterLink>
    </div>
    <div class="router-container">
      <RouterView />
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.navbar-container {
  width: 100%;
}

.footer-container {
  width: 100%;
}
</style>