/* eslint-disable import/extensions */
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../../src/components/HelloWorld';
import home from '../../src/page/home.vue';

Vue.use(Router);

export default function () {
  const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/bar',
      component: () => import('../../src/components/Bar.vue')   // 异步路由
    }
  ]
  return new Router({
    mode: 'hash',
    routes
  });
}
