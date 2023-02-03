import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//import componenti che fungono da pagine
import AboutUs from './views/pages/AboutUs.vue'
import HomePage from './views/pages/HomePage.vue'

import PostsIndex from './views/pages/posts/PostsIndex.vue'
import PostShow from './views/pages/posts/PostShow.vue'

import TagsIndex from './views/pages/tags/TagsIndex.vue'

const router = new VueRouter({
    //paths
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsIndex
        },
        {
            path: '/posts/:id',
            name: 'singlePost',
            component: PostShow
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsIndex
        }
    ]
});

export default router;
