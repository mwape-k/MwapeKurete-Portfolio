import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Ui from "../views/UIWork.vue";
import Dev from "../views/DevWork.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/ui-work", name: "UiWork", component: Ui },
  { path: "/dev-work", name: "DevWork", component: Dev },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // Always scroll to top on navigation
  },
});

export default router;
