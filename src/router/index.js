import { createWebHistory, createRouter } from 'vue-router';
import Footer from '../components/Footer.vue';
import List from '../components/List.vue';
import Home from '../components/Home.vue';
import regis_form from '../components/regist-form.vue';
import lists_admin from '../components/lists-admin.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
    path: "/regist_form",
    name: "regist_form",
    component: regis_form,
  },
  {
    path: "/lists_admin",
    name: "lists_admin",
    component: lists_admin,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;