import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _91b304f4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _f5b899d6 = () => interopDefault(import('..\\pages\\category.vue' /* webpackChunkName: "pages/category" */))
const _080d49ac = () => interopDefault(import('..\\pages\\owner.vue' /* webpackChunkName: "pages/owner" */))
const _04923fa7 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _11ac0062 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _52434f6a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _91b304f4,
    name: "about"
  }, {
    path: "/category",
    component: _f5b899d6,
    name: "category"
  }, {
    path: "/owner",
    component: _080d49ac,
    name: "owner"
  }, {
    path: "/products",
    component: _04923fa7,
    name: "products"
  }, {
    path: "/products/:id",
    component: _11ac0062,
    name: "products-id"
  }, {
    path: "/",
    component: _52434f6a,
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
