<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
}
</script>

<template>
  <HeaderComponent />

  <MainComponent />

  <FooterComponent />

  <!-- button leading back to the header -->
  <a class="go-up" href="#header">
    <i class="fa-solid fa-chevron-up"></i>
  </a>
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>
