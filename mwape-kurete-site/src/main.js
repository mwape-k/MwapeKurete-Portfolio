import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).use(router).mount("#app");

AOS.init({
  duration: 800, // animation duration in ms
  once: true, // whether animation should happen only once
});

router.afterEach(() => {
  AOS.refresh();
});
