import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuediv100vh from "vue-div-100vh";
import vuescrollto from "vue-scrollto";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from "./store";

Vue.config.productionTip = false;

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo, VueAwesomeSwiper);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 300,
  easing: "linear",
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
  VueAwesomeSwiper,
  render: h => h(App)
}).$mount("#app");