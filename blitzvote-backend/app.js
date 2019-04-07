const json = require('koa-json')
var koa = require('koa');
var router = require('koa-router');
var Grpc = require('./GrpcCaller.js')
var app = new koa();

var _ = router(); //Instantiate the router

_.get('/invoices', getMessage);
_.post('/invoices', postMessage);

function getMessage(ctx) {
    console.log("getMessage");

    var grpc = new Grpc()
    var ballance = grpc.get_wallet_balance()
    console.log("ballance: " + JSON.stringify(ballance));
    return json(ballance)
}

function postMessage() {
    this.body = "You just called the post method at '/hello'!\n";
};
app.use(json())
app.use(_.routes()); //Use the routes defined using the router
app.listen(8080);
