import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home.vue';
import Bio from './pages/bio.vue';
import Services from './pages/services.vue';
import Detail from './pages/detail.vue';
import Contacts from './pages/contacts.vue';
import Detail1 from './pages/detail-1.vue';
import Detail2 from './pages/detail-2.vue';
import Detail3 from './pages/detail-3.vue';
Vue.use(Router);
let router = new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/bio',
      component: Bio,
    },
    {
      path: '/contacts',
      component: Contacts,
    },
    {
      path: '/services',
      component: Services,
    },
    {
      path: '/detail',
      component: Detail,
    },
    {
      path: '/detail-1',
      component: Detail1,
    },
    {
      path: '/detail-2',
      component: Detail2,
    },
    {
      path: '/detail-3',
      component: Detail3,
    },
  ],
});
export default router;
