/* eslint-disable import/no-unresolved */
import {
  createApp
} from './create-app';
// console.log(createApp)
const {
  app,
  router
} = createApp();
router.onReady(() => {
  app.$mount('#app')
})
// app.$mount('#app');
