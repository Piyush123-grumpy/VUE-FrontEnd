import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mainpage from '../views/Mainpage.vue'
import Edit from '../components/Edit.vue'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView

  },
  {
    path: '/mainpage',
    name: 'Mainpage',
    component: Mainpage

  },
  {
    path: '/Edit/:id',
    name: 'Edit',
    component: Edit
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
