import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tables',
      name: 'tables',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "tables" */ './views/Tables.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "forms" */ './views/Forms.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/client/new',
      name: 'client.new',
      component: () => import(/* webpackChunkName: "client-form" */ './views/ClientForm.vue')
    },
    {
      path: '/client/:id',
      name: 'client.edit',
      component: () => import(/* webpackChunkName: "client-form" */ './views/ClientForm.vue'),
      props: true
    },
    {
      path: '/full-page',
      component: () => import(/* webpackChunkName: "full-page" */ './views/FullPage.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "full-page" */ './views/full-page/Login.vue')
        },
        {
          path: '/password-recovery',
          name: 'password-recovery',
          component: () => import(/* webpackChunkName: "full-page" */ './views/full-page/PasswordRecovery.vue')
        },
        {
          path: '/error-in-card',
          name: 'error-in-card',
          component: () => import(/* webpackChunkName: "full-page" */ './views/full-page/Error.vue')
        },
        {
          path: '/error-simple',
          name: 'error-simple',
          component: () => import(/* webpackChunkName: "full-page" */ './views/full-page/Error.vue'),
          props: { isInCard: false }
        },
        {
          path: '/lock-screen',
          name: 'lock-screen',
          component: () => import(/* webpackChunkName: "full-page" */ './views/full-page/LockScreen.vue')
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
