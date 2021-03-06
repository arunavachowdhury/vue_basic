import {createRouter, createWebHistory} from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import Game from '../views/Game'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home        
    },
    {
        path: '/about',
        name: 'About',
        component: About        
    },
    {
        path: '/game',
        name: 'Game',
        component: Game        
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
});

export default router