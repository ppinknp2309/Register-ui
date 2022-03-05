import { createWebHistory, createRouter } from 'vue-router';
import Footer from '../components/Footer.vue';
import List from '../components/List.vue';
import Home from '../components/Home.vue';


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
 

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;