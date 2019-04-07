// data.js
import GrpcCaller from './GrpcCaller.js'

var http = require('http');

export const add = (x, y) => {
    console.log("start web server");
    var grpc_caller = new GrpcCaller()
    // grpc_caller.get_wallet_balance()
    http.createServer(function (req, res) {
        // add a HTTP header:
        // var res = grpc_caller.get_wallet_balance()
        var ballance = grpc_caller.get_wallet_balance()

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello World!');
        res.write(ballance + '')
        res.end();
    }).listen(8080);

    return x + y
}

//
//
//
//


