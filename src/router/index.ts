import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router';
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'login',
        component: () =>
            import('../components/LoginPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
