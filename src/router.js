import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Verifyemail from "@/components/verifyemail";
import signup from "@/components/signup";
import TokenPage from "@/components/tokenPage"
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/signUp",
      name: "SignUp",
      component: signup,
    },

    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/verifyemail",
      name: "verifyemail",
      component: Verifyemail,
    },
    {
      path: "/tokenpage",
      name: "tokenpage",
      component: TokenPage,
    },

    // {
    //   path: "*",
    //   name: "notfound",
    //   component: notfound,
    // },
  ],
  mode: "history",
});
