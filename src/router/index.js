import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path: '/:section',
      name: 'ContainerSection',
      component: Container
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
  }
})
