import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VueRouter from "vue-router";
import "boxicons";
import router from "./router.js";
import VueCarousel from "vue-carousel";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import NaijaStates from "naija-state-local-government";
import axios from "axios";
import VueToast from "vue-toast-notification";
import anime from 'animejs/lib/anime.es.js';

import "vue-toast-notification/dist/theme-sugar.css";

Vue.config.productionTip = false;
Vue.use(anime,VueRouter, $, Popper, VueCarousel, NaijaStates, axios, VueToast);
// Vue.prototype.$toast = VueToast;
//  let instance = Vue.$toast.open("You did it!");

// // // Force dismiss specific toast
// instance.dismiss();
// // // Dismiss all opened toast immediately
//  Vue.$toast.clear();
Vue.prototype.axios = axios;


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
