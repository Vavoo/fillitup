import { createRouter, createWebHashHistory } from 'vue-router'

const json = () => import('./components/json.vue')
const doc = () => import('./components/doc.vue')

const routes = [{
  path: '/json',
  name: 'json',
  component: json
}, {
  path: '/doc',
  name: 'doc',
  component: doc
}]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
