import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../pages/index'))),
      children: [{
        path: '',
        redirect: {
          name: 'chat'
        }
      },
      {
        path: 'chat',
        name: 'chat',
        meta: {
          title: '微信'
        },
        component: r => require.ensure([], () => r(require('../pages/chat/chat')))
      },
      {
        path: 'contact',
        name: 'contact',
        meta: {
          title: '联系人'
        },
        component: r => require.ensure([], () => r(require('../pages/contact/contact')))
      },
      {
        path: 'find',
        name: 'find',
        meta: {
          title: '发现'
        },
        component: r => require.ensure([], () => r(require('../pages/find/find')))
      },
      {
        path: 'me',
        name: 'me',
        meta: {
          title: '我'
        },
        component: r => require.ensure([], () => r(require('../pages/me/me')))
      }
      ]
    },
    {
      path: '/new-friends',
      name: 'new-friends',
      meta: {
        title: '新的朋友'
      },
      component: r => require.ensure([], () => r(require('../pages/contact/new-friends')))
    },
    {
      path: '/personal-details',
      name: 'personal-details',
      meta: {
        title: '个人详情'
      },
      component: r => require.ensure([], () => r(require('../pages/contact/personal-details')))
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
