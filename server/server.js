const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path = require("path");
const fs = require("fs");
const backendApp = new Koa();
const frontendApp = new Koa();
const backendRouter = new Router();
const frontendRouter = new Router();
const { createBundleRenderer } = require("vue-server-renderer");
// const bundle = fs.readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf-8');
// const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
//   template: fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8')
// });

const serverBundle = require(path.resolve(
  __dirname,
  "../dist/vue-ssr-server-bundle.json"
));
const clientManifest = require(path.resolve(
  __dirname,
  "../dist/vue-ssr-client-manifest.json"
));
const template = fs.readFileSync(
  path.resolve(__dirname, "../dist/index.ssr.html"),
  "utf-8"
);

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
});

// console.log('bundle', bundle)

// 后端Server
//
// backendRouter.get('/index', (ctx, next) => {
//   // console.log('ctx', ctx)
//   // 这里用 renderToString 的 promise 返回的 html 有问题，没有样式
//   renderer.renderToString((err, html) => {
//     if (err) {
//       console.error('------  get err  -------'.err);
//       ctx.status = 500;
//       ctx.body = '服务器内部错误';
//     } else {
//       // console.log(html);
//       console.log('----   get html     ------')
//       ctx.status = 200;
//       ctx.body = html;
//     }
//   });
// });

backendApp.use(serve(path.resolve(__dirname, "../dist")));

// after add store
backendRouter.get("*", async (ctx, next) => {
  try {
    let context = {
      url: ctx.url
    };
    console.log("------context----", context);
    // let html = await new Promise((resolve, reject) => {
    //   // 这里直接使用 renderToString 的 Promise 模式，返回的 html 字符串没有样式和 __INITIAL_STATE__，原因暂时还没有查到
    //   // 所以，只能暂时先自己封装一个 Promise，用 renderToString 的 callback 模式
    //   renderer.renderToString((err, html) => {
    //     if (err) {
    //       reject(err);
    //     } else {
    //       resolve(html, context);
    //     }
    //   });
    // });
    const ssrStream = renderer.renderToStream(context);
    ctx.status = 200;
    ctx.type = "html";
    ctx.body = ssrStream;

    // ctx.type = 'html';
    // ctx.status = 200;
    // ctx.body = html;
  } catch (err) {
    console.error("---backendRouter --err--", err);
    ctx.status = 500;
    ctx.body = "服务器内部错误";
  }
});

backendApp.use(backendRouter.routes()).use(backendRouter.allowedMethods());

backendApp.listen(8888, () => {
  console.log("服务器端渲染地址： http://localhost:8888");
});

// 前端Server
frontendRouter.get("*", (ctx, next) => {
  let html = fs.readFileSync(
    path.resolve(__dirname, "../dist/index.html"),
    "utf-8"
  );
  ctx.type = "html";
  ctx.status = 200;
  ctx.body = html;
});

frontendApp.use(serve(path.resolve(__dirname, "../dist")));

frontendApp.use(frontendRouter.routes()).use(frontendRouter.allowedMethods());

frontendApp.listen(7777, () => {
  console.log("浏览器端渲染地址： http://localhost:7777");
});
