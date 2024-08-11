import {createRouter, createWebHistory} from "vue-router";
import home from "../views/home/index.vue";
import teach from "../views/teach/index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: home
        },
        {
            path: "/about",
            component: teach
        },
    ],
});

export default router;