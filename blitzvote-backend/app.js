var koa = require('koa');
var router = require('koa-router');
var Grpc = require('./GrpcCaller.js')
var app = new koa();

var _ = router(); //Instantiate the router

_.get('/invoices', getMessage);
_.post('/invoices', postMessage);

function getMessage(ctx) {
  console.log("start web server");
  var grpc_caller = new Grpc()
  var ballance = grpc_caller.get_wallet_balance()
  return ballance
}
function postMessage() {
  this.body = "You just called the post method at '/hello'!\n";
};
app.use(_.routes()); //Use the routes defined using the router
app.listen(3000);
