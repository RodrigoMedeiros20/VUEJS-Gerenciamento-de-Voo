<script lang="ts" setup>

import Header from '../../components/Header/Header.vue'
import Card from '../../components/Card/Card.vue'
import Footer from '../../components/Footer/Footer.vue'

</script>


<template>
  <div class="home-container">
    <div class="header-container">
      <Header />
    </div>
    <div class="card-container">
      <Card />
    </div>
    <div class="footer-container">
      <Footer/>
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

.header-container {
  width: 100%;
}

.footer-container {
  width: 100%;
}
</style>