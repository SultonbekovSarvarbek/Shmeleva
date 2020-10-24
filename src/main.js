import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import vmodal from 'vue-js-modal';
// import Sticky from 'vue-sticky-directive';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import VueAnimate from 'vue-animate-scroll';
// import VueScrollTo from 'vue-scrollto';
// import VueWindowSize from 'vue-window-size';
// Vue.use(VueWindowSize);
// Vue.use(vmodal);
// Vue.use(Sticky);
// Vue.use(VueAnimate);
// Vue.use(VueScrollTo, {
//   container: 'body',
//   duration: 500,
//   easing: 'ease',
//   offset: 0,
//   force: true,
//   cancelable: true,
//   onStart: false,
//   onDone: false,
//   onCancel: false,
//   x: false,
//   y: true,
// });
Vue.mixin({
  methods: {
    scrollToTop: function() {
      window.scrollTo(0, 0);
    },
  },
});
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
