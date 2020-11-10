import { createApp } from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import "./index.scss";

import { createWebHashHistory, createRouter } from "vue-router";

// 创建 router
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/home", component: Home },
    {
      path: "/doc",
      component: Doc
    },
  ],
});

// 使用 router
const app = createApp(App);

app.use(router);
app.mount("#app");
