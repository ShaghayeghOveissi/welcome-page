<template>
  <div id="app">
    <MainNav />
    <DefaultCarousel :slides="carouselSlides" />
    <WelcomeInformation title="Welcome"/>
  </div>
</template>

<script>
import MainNav from './components/navbar/main-nav.vue'
import DefaultCarousel from './components/carousel/default-carousel.vue'
import WelcomeInformation from './components/welcome-information.vue'

export default {
  name: 'App',

  components: {
    MainNav,
    DefaultCarousel,
    WelcomeInformation
  },

  data() {
    return {
      carouselSlides: [
        {
          caption: 'First slide',
          image: 'https://picsum.photos/1024/480/?image=10'
        },
        {
          caption: 'Second slide',
          image: 'https://picsum.photos/1024/480/?image=55'
        },
        {
          caption: 'Third slide',
          image: 'https://picsum.photos/1024/480/?image=58'
        }
      ]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
