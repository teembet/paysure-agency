import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import "boxicons";
import router from "./router.js";
import VueCarousel from "vue-carousel";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
import NaijaStates from "naija-state-local-government";

import VueToast from "vue-toast-notification";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/index.js'
import "vue-toast-notification/dist/theme-sugar.css";

Vue.config.productionTip = false;

Vue.use(VueToast)
// Vue.use($)
// Vue.use(Popper)
Vue.use(NaijaStates)
Vue.use(VueAxios, axios)
Vue.use(VueCarousel)
// Vue.prototype.$toast = VueToast;
 let instance = Vue.$toast.open('You did it!');

// // Force dismiss specific toast
instance.dismiss();
// // Dismiss all opened toast immediately
 Vue.$toast.clear();



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
