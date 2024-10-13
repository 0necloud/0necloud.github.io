import { createRouter, createWebHashHistory } from 'vue-router';
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
            {
                path: '/resume',
                name: 'resume',
                component: () => import('./components/Resume.vue')
            },
            {
                path: '/education',
                name: 'education',
                component: () => import('./components/Education.vue')
            },
            {
                path: '/projects',
                name: 'projects',
                component: () => import('./components/Projects.vue')
            },
            {
                path: '/experience',
                name: 'experience',
                component: () => import('./components/Experience.vue')
            },
            {
                path: '/achievements',
                name: 'achievements',
                component: () => import('./components/Achievements.vue')
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
    history: createWebHashHistory('/'),
    routes,
});

export default router;
