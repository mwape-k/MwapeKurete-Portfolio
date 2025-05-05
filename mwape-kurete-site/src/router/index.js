import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Ui from "../views/UIWork.vue";
import DEv from "../views/DevWork.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/ui-work", name: "UiWork", component: Ui },
  { path: "/dev-work", name: "DevWork", component: Dev },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
