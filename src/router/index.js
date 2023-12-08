import { createApp } from 'vue';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Example from '@/components/Example.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Example',
            component: Example,
        }
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app');