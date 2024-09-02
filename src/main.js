import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import descope from "@descope/vue-sdk";

const app = createApp(App);

app.use(descope, {
    projectId: import.meta.env.VITE_DESCOPE_PROJECT_ID,
});

app.use(router);

app.mount("#app");