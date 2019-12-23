import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router();
const port = 4000

app.use(bodyParser());

router.register('/hello', (ctx, next) => {
  ctx.body = 'hello world'
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(port)

console.log('server listen port: ' + port)

