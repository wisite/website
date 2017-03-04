/**
 * Created by ssehacker on 2017/3/4.
 */
import serve from 'koa-static';
import Koa from 'koa';
import path from 'path';
import views from 'koa-views';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import React from 'react';
import ReactApp from './app';


const app = new Koa();
const router = new Router();

app.use(serve(path.resolve(__dirname , '../dist/assets')));
app.use(serve(path.resolve(__dirname ,'../public')));

app.use(views( path.resolve('public', 'views'), {
  map: {
    html: 'ejs',
  },
}));

app.use(async (ctx, next) =>{
  var start = Date.now();
  await next();
  var time = Date.now()-start;
  console.log(ctx.request.method +'\t'+ctx.request.url +'\t' + time + 'ms');
});

router.get('/', async (ctx, next) => {
  const html = renderToString(<ReactApp />);
  await ctx.render('index', {
    body: html,
  });
});


app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3003);

console.log('listening on port 3003');