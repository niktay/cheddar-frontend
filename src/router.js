import Vue from "vue";
import Router from "vue-router";
import VHomePage from "@/components/pages/VHomePage/.";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/home",
      component: VHomePage
    }
  ]
});
