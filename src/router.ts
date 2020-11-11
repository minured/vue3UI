import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/SwitchDemo.vue";
import Tabs from "./components/TabsDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Button from "./components/ButtonDemo.vue";
import DocIndex from "./components/DocIndex.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "/doc/", component: DocIndex },
        { path: "/doc/switch", component: Switch },
        { path: "/doc/tabs", component: Tabs },
        { path: "/doc/dialog", component: Dialog },
        { path: "/doc/button", component: Button },
      ],
    },
  ],
});

export default router;
