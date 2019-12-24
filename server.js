import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import KoaStatic from 'koa-static'
import {database} from './mongodb'
import {addOne, getAllList, editOne, tickOne, delOne} from './controllers/list' 

database()

const app = new Koa()
const router = new Router()
const port = 4000

app.use(bodyParser())

router.get('/hello', (ctx, next) => {
  ctx.body = 'hello world'
})

router.post('/addOne', addOne)
      .post('/editOne', editOne)
      .post('/tickOne', tickOne)
      .post('/delOne', delOne)
      .post('/getAllList', getAllList)

app.use(KoaStatic(__dirname + '/public'))
app.use(router.routes()).use(router.allowedMethods());

app.listen(port)

console.log('server listen port: ' + port)

