import { createApp } from "vue";
import "jquery/src/jquery.js";
import App from "./App.vue";
import router from "./router";
import "./styles/default.scss";
import "./styles/linearicons.scss";
import "./styles/chartist-custom.scss";
import "./styles/main.scss";
import "./styles/demo.scss";


createApp(App)
  .use(router)
  .mount("#app");