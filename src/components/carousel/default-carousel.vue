<template>
  <div>
    <b-carousel id="default_carousel"
      :interval="0"
      fade
      controls
      indicators
      class="default-carousel"
      img-width="1024"
      img-height="500">
      <div v-for="(item, index) in slides" :key="index">
        <b-carousel-slide 
          :caption="item.caption"
          :img-src="item.image"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'defaultCarousel',

    props: [
      'slides',
    ],
  }
</script>

<style lang="scss">
@import '../../scss/variables.scss';

.default-carousel,
.default-carousel .carousel-item {
  max-height: 500px;
}

.default-carousel .carousel-control-prev,
.default-carousel .carousel-control-next {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  top: 50%;
  margin: 0 1em;
  background-color: $primary-color-purple;
}

.default-carousel .carousel-indicators li {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: $light-purple;
}

.default-carousel .carousel-indicators .active {
  background-color: $primary-color-purple;
  opacity: 0.7;
}

.default-carousel .carousel-caption {
  bottom: 30px;
  text-shadow: 0 0 15px $grey;
}
</style>