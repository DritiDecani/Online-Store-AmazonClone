import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4268d7e2 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _099d23ec = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages/category" */))
const _2fb26035 = () => interopDefault(import('..\\pages\\owner.vue' /* webpackChunkName: "pages/owner" */))
const _10910220 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _380f0550 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _02f92258 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4268d7e2,
    name: "about"
  }, {
    path: "/category",
    component: _099d23ec,
    name: "category"
  }, {
    path: "/owner",
    component: _2fb26035,
    name: "owner"
  }, {
    path: "/products",
    component: _10910220,
    name: "products"
  }, {
    path: "/products/:id",
    component: _380f0550,
    name: "products-id"
  }, {
    path: "/",
    component: _02f92258,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
