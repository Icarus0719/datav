import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/auth/constantRouter.js'

// push
const originalPush = Router.prototype.push
Router.prototype.push = pushRouter

function pushRouter (location) {
  return originalPush.call(this, location).catch(err => err)
}
// replace
const originalReplace = Router.prototype.replace
Router.prototype.replace = replaceRouter

function replaceRouter (location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(Router)
const router = new Router({
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
export default router
