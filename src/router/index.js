import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setTitle } from '@/utils'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to)
  const { title } = to.meta
  if (title) setTitle(title)

  next()
})

router.afterEach((to, from) => {
  // ...
})

export default router
