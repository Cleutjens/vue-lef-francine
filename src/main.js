import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuediv100vh from "vue-div-100vh";
import vuescrollto from "vue-scrollto";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from "./store";
import i18n from "./i18n'";

Vue.config.productionTip = false;

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

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
  i18n,
  render: h => h(App)
}).$mount("#app");