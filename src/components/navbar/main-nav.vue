<template>
  <div class="main-nav">
    <div class="main-nav__item-container" v-for="(item, index) in mainNavItems" :key="index">
      <a :class="['main-nav__item-link', { 'main-nav__item-link--selected' : item.selected}]" :href="item.linkUrl">
        <b-icon :icon="item.icon" />
        <span class="main-nav__item-text">{{item.label}}</span>
      </a>
    </div>
  </div>
</template>

<script>
import WindowScroll from '../window-scroll';

export default {
  name: 'MainNavbar',

  mixins: [
    WindowScroll,
  ],

  data() {
    return {
      mainNavItems: [
        {
          icon: 'house-door-fill',
          label: 'Home',
          linkUrl: "#home",
          selected: true
        },
        {
          icon: 'person-fill',
          label: 'About',
          linkUrl: "#about",
          selected: false
        },
        {
          icon: 'telephone-fill',
          label: 'Contact',
          linkUrl: "#contact",
          selected: false
        }
      ]
    };
  }
}
</script>

<style lang="scss">
@import '../../scss/variables.scss';

.body__down .main-nav {
  transform: translate3d(0, -100%, 0);
  transition: transform 0.5s ease;
}

.body__top .main-nav,
.body__up .main-nav {
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease;
}

.main-nav {
  overflow: hidden;
  background-color: $lightest-purple;
  box-shadow: 0 0 7px 0 $lightest-grey;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  text-align: center;
}

.main-nav__item-container {
  display: inline-flex;
}

.main-nav__item-link {
  color: $dark-grey;
  text-align: center;
  padding: 0.7em 1.5em;
  text-decoration: none;
  font-size: 17px;
  font-size: 1.2em;

  @media (min-width: $screen-sm) {
    padding: 0.7em 3em;
  }

  &:hover {
    color: $dark-grey;
    background-color: $light-purple;
    border-bottom: 4px solid $light-purple;
  }

  &--selected,
  &--selected:hover {
    color: $primary-color-purple;
    background-color: $light-purple;
    border-bottom: 4px solid;
  }
}

.main-nav__item-text {
  margin-left: 0.4em;
  display: none;

  @media (min-width: $screen-sm) {
    display: inline-block;
  }
}
</style>
