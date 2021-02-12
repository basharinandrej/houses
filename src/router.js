import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home.vue";
import SingleFlat from "@/views/Single-flat.vue";
import CabinetAdmin from "@/views/users/admin/CabinetAdmin.vue";

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
        },
        {
            path: '/login',
            component: CabinetAdmin,
            name: 'cabinetAdmin'
        }
    ]
})