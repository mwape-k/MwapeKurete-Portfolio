import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"; // if using Bootstrap CSS

createApp(App).use(router).mount("#app");
