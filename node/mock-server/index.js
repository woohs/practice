const Koa = require('koa');
const Router = require('koa-router');
const routerAry = require('./api')

const app = new Koa();
const router = new Router();

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  ctx.set('Access-Control-Allow-Headers', `Content-Type, x-requested-with, Authorization, access-control-allow-origin`);
  ctx.set('Access-Control-Allow-Methods', `POST, GET, HEAD, OPTIONS , DELETE`);
  ctx.set('Access-Control-Allow-Origin', `*`);
});

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

// 遍历监听路由
routerAry.forEach(item => {
  if(item.type === 'post') {
    router.post(item.path, function(ctx, next) {
      ctx.body = item.data;
    })
  }
  if(item.type === 'get') {
    router.get(item.path, function(ctx, next) {
      ctx.body = item.data;
    })
  }
})


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log("server port 3000 run")
