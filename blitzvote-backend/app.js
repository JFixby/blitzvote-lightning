'use strict'
var Koa = require('koa');
var Router = require('koa-router');
//var BodyParser = require('koa-body');
const app = new Koa();

var invoices = require('./invoices.js')
app.use(invoices.routes())

app.use(async ctx => {
  ctx.body = 'Hello World';
});




//Routes will go here

module.exports = router;

app.listen(3000);

