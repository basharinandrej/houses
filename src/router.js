import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home.vue";
import SingleFlat from "@/views/single-flat.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/favorites',
            component: () => import('./views/Favorites.vue')
        },
        {
            path: '/flat/:id',
            component: SingleFlat,
            name: 'flat'
        }
    ]
})