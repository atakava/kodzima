import {createRouter, createWebHistory} from 'vue-router'
import IntroPage from "@/components/IntroPage.vue";
import AuthPage from "@/components/AuthPage.vue";
import BioPage from "@/components/BioPage.vue";
import GamesPage from "@/components/GamesPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'intro',
            component: IntroPage
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthPage
        },
        {
            path: '/bio',
            name: 'bio',
            component: BioPage
        },
        {
            path: '/game',
            name: 'game',
            component: GamesPage
        }
    ]
})

export default router
