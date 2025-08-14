import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/IndexPage.vue'
import register from '@/views/register.vue'
import politica_privacidade from '@/views/politicaPrivacidade.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/politica_privacidade',
        name: 'politica_privacidade',
        component: politica_privacidade,
    },
    {
        path: '/register/:token',
        name: 'register',
        component: register,
    },
    {
        path: '/:pathMatch(.*)*',
        component: index,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
