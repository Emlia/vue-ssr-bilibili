import {
  createApp
} from './create-app';




export default context => {


  const { app, router, store, App } = createApp()



  // ----------------------官网-------------------
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {

    // 设置服务器端 router 的位置
    router.push(context.url)

    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      console.log('--------server  router   onReady---')


      const matchedComponents = router.getMatchedComponents()
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      // ------------------------vuex----------------------    
      // console.log('-----------App-----------', App)
      // let components = App.components;
      // let asyncDataPromiseFns = [];

      // Object.values(components).forEach(component => {
      //   if (component.asyncData) {
      //     asyncDataPromiseFns.push(component.asyncData({ store }));
      //   }
      // });

      // Promise.all(asyncDataPromiseFns).then((result) => {
      //   // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
      //   context.state = store.state;

      //   console.log(222);
      //   console.log(store.state);
      //   console.log(context.state);
      //   console.log(context);

      //   resolve(app);
      // }, reject);
      Promise.all(matchedComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData({ store });
        }
      })).then(() => {
        // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
        context.state = store.state;

        // 返回根组件
        resolve(app);
      });
      // ------------------------vuex----------------------    




      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      resolve(app)
    }, reject)
  })

}
