import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/rampage',
    component: () => import('layouts/RampageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RampagePage.vue'), name: 'rampage' }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' },
      { path: 'friends', component: () => import('pages/FriendsPage.vue'), name: 'friends' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
