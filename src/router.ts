import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/Switch.vue";
import Tabs from "./components/Tabs.vue";
import Dialog from "./components/Dialog.vue";
import Button from "./components/Button.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/doc", component: Doc },
    { path: "/doc/switch", component: Switch },
    { path: "/doc/tabs", component: Tabs },
    { path: "/doc/dialog", component: Dialog },
    { path: "/doc/button", component: Button }
  ],
});

export default router;
