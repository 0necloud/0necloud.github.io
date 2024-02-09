import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'main',
                component: () => import('./components/Main.vue')
            },

        ]
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue')
    },
    {
        path: '/:notFound(.*)',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
