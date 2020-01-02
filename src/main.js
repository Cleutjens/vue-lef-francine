import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuediv100vh from "vue-div-100vh";
import vuescrollto from "vue-scrollto";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from "./store";

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 300,
  easing: "ease-in-out",
  offset: 0,
  force: false,
  cancelable: true,
  onStart: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  router,
  store,
  vuediv100vh,
  vuescrollto,
  render: h => h(App)
}).$mount("#app");