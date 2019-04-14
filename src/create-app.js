/* eslint-disable import/extensions */


import createStore from '../server/store/store'
import createRouter from '../server/router';
import Vue from 'vue';
import App from './App.vue';



export function createApp() {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return {
    router,
    store,
    app,
    App
  };
}
