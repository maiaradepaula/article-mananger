import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticleByCategory from '@/components/article/ArticleByCategory'
import ArticlebyId from '@/components/article/ArticleById'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
},{
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticleByCategory
}, {
    name: 'articleById',
    path: '/categories/:id',
    component: ArticlebyId
}
]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router