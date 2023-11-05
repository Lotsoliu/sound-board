import {createRouter, createWebHashHistory} from 'vue-router'


const routes= [
  {
    path: '/sound-board',
    name: 'sound-board',
    hidden: true,
    component: () => import('../pages/SoundBoard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

