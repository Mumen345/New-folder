import "mdb-vue-ui-kit/css/mdb.min.css";

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// import NavComponent from "./components/NavComponent.vue"
createApp(App).use(router).mount("#app");
