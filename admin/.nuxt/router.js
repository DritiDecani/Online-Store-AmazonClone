import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f85bc168 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3e22738f = () => interopDefault(import('../pages/category.vue' /* webpackChunkName: "pages/category" */))
const _568e291c = () => interopDefault(import('../pages/owner.vue' /* webpackChunkName: "pages/owner" */))
const _06b1c090 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _4069b020 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _b8ec0bde = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _f85bc168,
    name: "about"
  }, {
    path: "/category",
    component: _3e22738f,
    name: "category"
  }, {
    path: "/owner",
    component: _568e291c,
    name: "owner"
  }, {
    path: "/products",
    component: _06b1c090,
    name: "products"
  }, {
    path: "/products/:id",
    component: _4069b020,
    name: "products-id"
  }, {
    path: "/",
    component: _b8ec0bde,
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
