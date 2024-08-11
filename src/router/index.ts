import {createRouter, createWebHistory} from "vue-router";
import home from "../views/home/index.vue";
import teach from "../views/teach/index.vue";
import user from "../views/user/index.vue";
import messages from "../views/message/index.vue"
import settings from "../views/settings/index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: home
        },
        {
            path: "/teach",
            component: teach
        },
        
        {
            path: "/user",
            component: user
        },
        {
            path: "/messages",
            component: messages
        },
        {
            path: "/settings",
            component: settings
        },
    ],
});

export default router;