export default {
  data() {
    return {
      lastScrollPosition: 0,
    };
  },

  methods: {
    handleOnScroll() {
      const body = document.querySelector('body');

      if (window.pageYOffset === 0) {
        body.classList.add('body__top');
        body.classList.remove('body__up');
        body.classList.remove('body__down');
      } else if (window.pageYOffset < this.lastScrollPosition) {
        body.classList.add('body__up');
        body.classList.remove('body__top');
        body.classList.remove('body__down');
      } else {
        body.classList.add('body__down');
        body.classList.remove('body__top');
        body.classList.remove('body__up');
      }
      this.lastScrollPosition = window.pageYOffset;
    },
  },

  created() {
    document.querySelector('body').classList.add('body__top');

    if (!window.eventListenerCalled) {
      window.eventListenerCalled = true;
      window.addEventListener('scroll', this.handleOnScroll);
    }
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleOnScroll);
    window.eventListenerCalled = false;
  },
};
